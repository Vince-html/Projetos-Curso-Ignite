import { render, screen } from '@testing-library/react';
import { getSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import { getPrismicClient } from '../../services/prismic';



const post = {
  slug: 'my-new-post',
  title: 'my-new-post',
  content: '<p>post excerpt</p>',
  updated: '10 de novembro',
}

jest.mock('next-auth/client')
jest.mock('../../services/prismic')

describe('Post page', () => {
  it('renders', () => {
    render(<Post post={post} />)

    expect(screen.getByText('my-new-post')).toBeInTheDocument()
    expect(screen.getByText('post excerpt')).toBeInTheDocument()


  });

  it('it redirects user if no subscriotion is found', async () => {
    const getSessionMocked = mocked(getSession)


    getSessionMocked.mockResolvedValueOnce(null)

    const response = await getServerSideProps({
      params: { slug: 'my-new-posts' }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/',
        })
      })
    )
  })

  it('load initial data', async () => {
    const getSessionMocked = mocked(getSession)

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

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription',
    })

    const response = await getServerSideProps({
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