import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router';
import React from 'react'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'


export function SubscribeButton() {
  const [session] = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }
    if (session.activeSubscription) {
      router.push('/posts')
      return;
    }

    try {
      const response = await api.post<any>('/subscribe');
      const { sessionId } = response.data;



      const stripe = await getStripeJs()

      stripe.redirectToCheckout({ sessionId })

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={() => handleSubscribe()}
    >
      Subscribe Now
    </button >
  )
}
