import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'
import { SignInButton } from '.';
import { useSession } from 'next-auth/client'

jest.mock('next-auth/client')

describe('SignInButton Component', () => {

  it('Renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <SignInButton />
    )
    expect(screen.getByText('Sign In with Github')).toBeInTheDocument()
  })

  it('Renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([{ user: { name: 'John Doe', email: 'john@john.com' }, expires: 'fake-expires' }, false])

    render(
      <SignInButton />
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })



})
