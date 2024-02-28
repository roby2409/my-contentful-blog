import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { Heading, Text } from '@src/components/design-system';
import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { revalidateDuration } from '../utils/constants';
import { client, previewClient } from '@src/libs/client';
import { PageBlogPostOrder } from '@src/libs/__generated/sdk';
import Link from 'next/link';
import { ArticleHero, ArticleTileGrid } from '@src/components/modules/components/features/article';
import { SeoFields } from '@src/components/modules/components/features/seo';

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const posts = props.posts;
  const page = props.page;
  if (!page?.featuredBlogPost || !posts) return;
  return (
    <>
      <SeoMeta description={'Blog - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <HomePageLayout>
        <Animate>
          <section className="mx-auto -mt-12 mb-12 flex h-full flex-col p-4 md:-mt-0 md:p-0">
            <Heading style={{ marginBottom: '0.5rem' }}>
              Welcome to my blogs and tutorials <span className="wave">😎📚🔖</span>
            </Heading>
            <div className="mb-4 flex font-semibold text-gray-700 dark:text-gray-100">
              <p>I love share my experience while i as development , relax and enjoy it dude </p>
            </div>
            <React.Fragment>
              <Text style={{ marginBottom: `1.5rem` }}>
                I&apos;m a 28-year-old enthusiast, deeply immersed in the dynamic world of
                technology, driven by an insatiable curiosity to explore its limitless
                possibilities. My passion lies in the intricate art of software development, where I
                constantly seek to innovate and create impactful solutions that resonate with users
                worldwide.&quot;
              </Text>
              <div className="flex w-[100%] flex-col space-x-2 md:w-[60rem] md:flex-row dark:border-teal-900  dark:bg-[#10161a]/50">
                <Link href={`/blog/${page.featuredBlogPost.slug}`}>
                  <ArticleHero article={page.featuredBlogPost} />
                </Link>
              </div>
              <Text style={{ marginBottom: `1.5rem`, marginTop: `3.5rem`, fontStyle: `italic` }}>
                Take on a journey of discovery through my articles, where you&apos;ll learn valuable
                insights and solutions to common challenges in project development. Join me as I
                share the coolest tips and tricks to enhance your skills and overcome obstacles.
                Let&apos;s explore together the fascinating world of problem-solving in project
                development!&quot;
              </Text>
              <h1 className="my-12 mb-4 md:mb-6">Latest articles</h1>
              <div className="flex w-[100%]  flex-col space-x-2 md:w-[60rem]  md:flex-row dark:border-teal-900  dark:bg-[#10161a]/50">
                <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
              </div>
            </React.Fragment>
          </section>
        </Animate>
      </HomePageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 6,
      order: PageBlogPostOrder.PublishedDateDesc,
      where: {
        slug_not: page?.featuredBlogPost?.slug,
      },
      preview,
    });
    const posts = blogPostsData.pageBlogPostCollection?.items;
    if (!page) {
      return {
        revalidate: revalidateDuration,
        notFound: true,
      };
    }
    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        page,
        posts,
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default Blog;
