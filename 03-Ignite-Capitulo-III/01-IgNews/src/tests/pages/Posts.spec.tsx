import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Posts, { getStaticProps } from '../../pages/posts';
import { stripe } from '../../services/stripe';
import { getPrismicClient } from '../../services/prismic'


const posts = [{
  slug: 'my-new-post',
  title: 'my-new-post',
  excerpt: 'post excerpt',
  updatedAt: '10 de novembro',
}]

jest.mock('../../services/prismic')

describe('Posts page', () => {
  it('renders', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText('my-new-post')).toBeInTheDocument()

  });

  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-post',
            data: {
              title: [
                { type: 'heading', text: 'post heading' }
              ],
              content: [
                { type: 'paragraph', text: 'post paragraph' },
              ],
            },
            last_publication_date: '11-11-2021'
          }
        ]
      })
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [{
            slug: 'my-new-post',
            title: 'post heading',
            excerpt: 'post paragraph',
            updatedAt: '11 de novembro de 2021'
          }]
        },
      })
    )
  })
})