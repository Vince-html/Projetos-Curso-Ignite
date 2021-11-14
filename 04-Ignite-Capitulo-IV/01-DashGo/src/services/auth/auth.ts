import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from '../../contexts/AuthContext';

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestQueue = [];

export function setupAuthClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const auth = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      Authorization: `Bearer ${cookies['dashgo.token']}`,
    },
  });

  auth.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
          cookies = parseCookies(ctx);

          const { 'dashgo.refreshToken': refreshToken } = cookies;

          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            auth
              .post('/refresh', {
                refreshToken,
              })
              .then((response) => {
                const { token } = response.data;

                setCookie(ctx, 'dashgo.token', token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                });
                setCookie(
                  ctx,
                  'dashgo.refreshToken',
                  response.data.refreshToken,
                  {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: '/',
                  }
                );

                auth.defaults.headers['Authorization'] = `Bearer ${token}`;

                failedRequestQueue.forEach((request) => request.resolve(token));
                failedRequestQueue = [];
              })
              .catch((error) => {
                failedRequestQueue.forEach((request) => request.reject(error));
                failedRequestQueue = [];

                if (process.browser) {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              resolve: (token: string) => {
                originalConfig.headers['Authorization'] = `Bearer ${token}`;
                resolve(auth(originalConfig));
              },
              reject: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (process.browser) {
            signOut();
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return auth;
}
