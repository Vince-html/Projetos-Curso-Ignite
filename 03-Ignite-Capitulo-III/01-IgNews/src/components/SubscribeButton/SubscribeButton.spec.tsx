import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'
import { SubscribeButton } from '.';
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

jest.mock('next-auth/client')

jest.mock('next/router')

describe('SubscribeButton Component', () => {

  it('Renders correctly ', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SubscribeButton />
    )
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
  })
  it('redirects user to sign in when not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    const signInMocked = mocked(signIn);

    render(
      <SubscribeButton />
    )
    const subscribeButton = screen.getByText('Subscribe Now');

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();


  })

  it('redirects to posts when user already subscribe', () => {

    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([
      {
        user:
          { name: 'John Doe', email: 'john@john.com' },
        activeSubscription: 'fake-activeSubscription',
        expires: 'fake-expires'
      },
      false
    ])


    const pushMock = jest.fn();

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)

    render(
      <SubscribeButton />
    )
    const subscribeButton = screen.getByText('Subscribe Now');

    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalledWith('/posts');


  })


})
