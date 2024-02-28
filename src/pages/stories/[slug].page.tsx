import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { frontMatterStory } from '@src/types/stories';
import { useTheme } from '@src/context/ThemeContext';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Heading, Text } from '@src/components/design-system';
import { MDXRemote } from 'next-mdx-remote';

interface StoryDetailProps {
  frontMatter: frontMatterStory;
  mdxSource: any;
}

const DetailStoryPage: NextPage<StoryDetailProps> = props => {
  const [isLoading, setLoading] = useState(true);
  const { theme } = useTheme();

  return (
    <>
      <SeoMeta description={props.frontMatter.description} title={props.frontMatter.title} />
      <HomePageLayout>
        <Animate>
          <section className="mx-auto -mt-12 max-w-3xl p-2 md:-mt-0 md:p-0">
            {props.frontMatter && props.mdxSource && (
              <>
                <div className=" mt-10 rounded-md  bg-gray-50 p-10 md:w-[38.5rem]">
                  <Image
                    loading="lazy"
                    src={props.frontMatter.thumbnail}
                    alt={'thumbnail'}
                    width={1}
                    height={1}
                    sizes="80"
                    className={`
                            duration-700 ease-in-out group-hover:opacity-75
                            ${
                              isLoading
                                ? 'scale-110 blur-2xl grayscale'
                                : 'scale-100 blur-0 grayscale-0'
                            })`}
                    onLoadingComplete={() => setLoading(false)}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <h1 className="text-dark my-8 text-4xl font-semibold dark:text-gray-100">
                  {props.frontMatter.title}
                </h1>

                <MDXRemote
                  {...props.mdxSource}
                  components={{
                    h1: ({ children }) => <Heading>{children}</Heading>,
                    h2: ({ children }) => <Heading>{children}</Heading>,
                    p: ({ children }) => (
                      <Text
                        style={{
                          marginTop: 12,
                          lineHeight: 2,
                        }}
                      >
                        {children}
                      </Text>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="bg-color-secondary mt-4 border-l-4  border-l-teal-600 pl-2 dark:border-l-teal-500">
                        {children}
                      </blockquote>
                    ),
                    ul: ({ children }) => (
                      <ul className="ml-10 list-disc text-[#10161a] dark:text-gray-100">
                        {children}
                      </ul>
                    ),
                    img: ({ src, alt }) => (
                      <figure className="mt-4 border text-center  text-[#10161a] dark:text-gray-100">
                        <Image src={src} alt={alt} className="w-full" />
                        <figcaption className="py-2 text-xs text-[#10161a] dark:text-gray-100">
                          {alt}
                        </figcaption>
                      </figure>
                    ),
                    code: ({ children }) => {
                      if (typeof children === 'string') {
                        return (
                          <SyntaxHighlighter
                            language="javascript"
                            className="rounded-md border-2"
                            style={theme == 'dark' ? dark : a11yLight}
                          >
                            {children}
                          </SyntaxHighlighter>
                        );
                      }
                      return children;
                    },
                  }}
                />
              </>
            )}
            {/* <div className="border-t text-sm border-color">
            <TagLink
              href={""}
              onClick={() => {
                !location && router.back();
              }}
            >
              <FiArrowLeft className="text-lg mr-1" /> Go back to
            </TagLink>
          </div> */}
          </section>
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default DetailStoryPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/stories'));
  const paths = files.map(file => {
    return {
      params: {
        slug: file.replace('.mdx', ''),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { slug } = params;
  const fileData = fs.readFileSync(path.join('src/stories', slug + '.mdx'), 'utf-8');
  const { data, content } = matter(fileData);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter: data,
      slug,
      mdxSource,
    },
  };
};
