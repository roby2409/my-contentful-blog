import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import React, { useEffect, useState } from 'react';
import { Container } from '@src/components/modules/components/shared/container';
import {
  ArticleContent,
  ArticleHero,
  ArticleTileGrid,
} from '@src/components/modules/components/features/article';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { revalidateDuration } from '../utils/constants';
import { client } from '@src/libs/client';
import { SeoFields } from '@src/components/modules/components/features/seo';
import { formatPublishedAt, getPlainTextFromHeader } from '@src/pages/utils/formatingHelper';
import readingTime from 'reading-time';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { BLOCKS } from '@contentful/rich-text-types'
import slugify from 'slugify'
import { twMerge } from 'tailwind-merge';

const DetailBlog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const blogPost = props.blogPost;
  const relatedPosts = blogPost?.relatedBlogPostsCollection?.items;

  if (!blogPost || !relatedPosts) return null;
  const theContainText = blogPost.content?.json;

  const plainTextContent = documentToPlainTextString(theContainText);

  // Calculate reading time for the plain text content
  const { minutes } = readingTime(plainTextContent);

  const TableOfContents = ({ post }) => {
    const { content } = post;
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLink(entry.target.id);
            }
          });
        },
        { threshold: 0.5 }
      );

      document.querySelectorAll('h2[id]').forEach((element) => {
        observer.observe(element);
      });

      return () => {
        observer.disconnect();
      };
    }, []);

    const handleClick = (e, href) => {
      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        const offset = 100; // Adjust this value as needed
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetTop - offset,
          behavior: 'smooth',
        });
        setActiveLink(href.substring(1));
      }
    };

    const getHeadersFromRichText = (richText) => {
      const headers = (content) => content.nodeType === BLOCKS.HEADING_2

      return richText.content.filter(headers).map((heading) => {

        const plainText = getPlainTextFromHeader(heading.content)
        return {
          text: plainText,
          href: `#${slugify(plainText)}`,
        }
      })
    };

    return (
      <div className='divide-y divide-dashed'>
        <h3 className="text-gray-900 dark:text-gray-100 md:text-xl mb-2">Sections this page</h3>
        <div>
          <ol className='mt-4'>
            {getHeadersFromRichText(content.json).map((item, i) => (
              <li key={i} >
                <a
                  className={`${activeLink === slugify(item.text) ? 'text-blue-400' : 'text-gray-400 dark:text-gray-300'} divide-y divide-dashed`}
                  href={`#${slugify(item.text)}`}
                  onClick={(e) => handleClick(e, `#${slugify(item.text)}`)}
                  style={{ marginLeft: "0px" }}
                >
                  {item.text}
                </a>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              </li>
            ))}

          </ol>
        </div>

      </div>
    );
  };

  return (
    <>
      <SeoMeta description={'Blog - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
      {blogPost.seoFields && <SeoFields {...blogPost.seoFields} />}
      <HomePageLayout>
        <Animate>
          <section className="mb-12 mt-10 flex flex-col">
            <div className="mb-4 flex font-semibold text-gray-700 dark:text-gray-100">
              <p>
                {' '}
                {formatPublishedAt(blogPost.publishedDate as Date)} {Math.ceil(minutes)} min read{' '}
              </p>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div className="w-full md:w-3/4 md:mr-8">
                <ArticleHero
                  article={blogPost}
                  isFeatured={props.isFeatured}
                  isReversedLayout={true}
                />
                <Container className="mt-8 max-w-4xl">
                  <ArticleContent article={blogPost} />
                </Container>
                {relatedPosts && (
                  <Container className="mt-8 max-w-5xl">
                    <h2 className="mb-4 md:mb-6">Related articles</h2>
                    <ArticleTileGrid className="md:grid-cols-2" articles={relatedPosts} />
                  </Container>
                )}
              </div>
              <div className="hidden md:block w-1/4 px-10">
                <div className={twMerge(
                  `fixed w-[270px] h-[400px] overflow-hidden rounded-2xl border border-gray300 shadow-lg`,
                )}>
                  <div className="overflow-auto max-h-[calc(100vh-9rem-113px)] pb-4 mb-10 px-4 pt-4 full-width">
                    <div className="mt-4 flex flex-col space-y-2 text-sm">
                      <TableOfContents post={blogPost} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </Animate>
      </HomePageLayout>
    </>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }

  try {
    const [blogPageData, landingPageData] = await Promise.all([
      client.pageBlogPost({ slug: params.slug.toString() }),
      client.pageLanding(),
    ]);

    const blogPost = blogPageData.pageBlogPostCollection?.items[0];
    const landingPage = landingPageData.pageLandingCollection?.items[0];

    const isFeatured = landingPage?.featuredBlogPost?.slug === blogPost?.slug;

    if (!blogPost) {
      return {
        notFound: true,
        revalidate: revalidateDuration,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        blogPost,
        isFeatured,
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }
};

export async function getStaticPaths() {
  const dataPerLocale = await client.pageBlogPostCollection({ limit: 100 });
  const paths = dataPerLocale?.pageBlogPostCollection?.items?.map(blogPost => {
    return blogPost?.slug
      ? {
        params: {
          slug: blogPost.slug,
        },
      }
      : undefined;
  });
  const filteredPaths = paths?.filter(Boolean) || [];
  return {
    paths: filteredPaths,
    fallback: true,
  };
}
export default DetailBlog;
