import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { mocked } from 'ts-jest/utils';
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';
import { getPrismicClient } from '../../services/prismic';



const post = {
  slug: 'my-new-post',
  title: 'my-new-post',
  content: '<p>post excerpt</p>',
  updated: '10 de novembro',
}

jest.mock('next-auth/client')
jest.mock('../../services/prismic')
jest.mock('next/router')

describe('Post Preview page', () => {
  it('renders', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    render(<Post post={post} />)

    expect(screen.getByText('my-new-post')).toBeInTheDocument()
    expect(screen.getByText('post excerpt')).toBeInTheDocument()
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()



  });

  it('redirects user to full post when user is subscribed', async () => {
    const useSessionMocked = mocked(useSession)
    const useRouterMocked = mocked(useRouter)
    const pushMock = jest.fn()
    useSessionMocked.mockReturnValueOnce([{
      activeSubscription: 'fake-active-subscription'
    }, false])

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)


    render(<Post post={post} />)
    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post')
  })

  it('load initial data', async () => {


    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            { type: 'heading', text: 'post heading' }
          ],
          content: [
            { type: 'paragraph', text: 'post paragraph' },
          ],
        },
        last_publication_date: '11-11-2021'
      })
    } as any)



    const response = await getStaticProps({
      params: { slug: 'my-new-posts' }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-posts',
            title: 'post heading',
            content: '<p>post paragraph</p>',
            updated: '11 de novembro de 2021'
          }
        }
      })
    )
  })



})