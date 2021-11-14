import { Router, useRouter } from 'next/router';
import { createContext, ReactNode, useState, useEffect } from 'react';

import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { auth } from '../services/auth/authClient';

type SignInCredentials = {
  email: string;
  password: string;
}
type User = {
  email: string;
  permissions: string[];
  roles: string[];
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'dashgo.refreshToken')
  destroyCookie(undefined, 'dashgo.token')
  Router.call('/')
}



export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'dashgo.token': token } = parseCookies();
    if (token) {
      auth.get('/me').then((response) => {
        const { email, permissions, roles } = response.data;

        setUser({ email, permissions, roles })
        router.push('/dashboard')
      }).catch(() => {
        signOut();
      })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await auth.post('sessions', { email, password });

      const { token, refreshToken, permissions, roles } = response.data;

      setCookie(undefined, 'dashgo.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });
      setCookie(undefined, 'dashgo.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });


      setUser({
        email,
        permissions,
        roles,
      })

      auth.defaults.headers['Authorization'] = `Bearer ${token}`;
      router.push('/dashboard')
    } catch (err) {
      console.log(err.message)
    }
  }


  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}