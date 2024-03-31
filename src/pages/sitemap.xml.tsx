import { PageBlogPostFieldsFragment, PageBlogPostOrder } from '@src/libs/__generated/sdk';
import { client, previewClient } from '@src/libs/client';
import { GetServerSideProps } from 'next';
import { revalidateDuration } from './utils/constants';

function generateSiteMap(data: Array<PageBlogPostFieldsFragment | null>, host: string | null) {
  const urls = data?.map(item => {
    const slug = item?.slug;
    return {
      url: `${host}/blogs/${slug}`,
    };
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${host}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${host}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${host}/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${host}/uses</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${host}/contact-us</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${urls
        ?.map((item: any) => {
          return (
            item &&
            `<url>
              <loc>${item?.url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
          );
        })
        .join('')}
    </urlset>
  `;
}
type Props = {
  host: string | null;
  sitemap: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ res, preview, req }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 6,
      order: PageBlogPostOrder.PublishedDateDesc,

      preview,
    });
    const posts = blogPostsData.pageBlogPostCollection?.items;
    if (posts) {
      const host = req.headers.host || null;
      const sitemap = generateSiteMap(posts, host);
      res.setHeader('Content-Type', 'text/xml');
      res.write(sitemap);
      res.end();
    }

    return {
      props: {
        host: req.headers.host || null,
        sitemap: '',
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default function SiteMap() {}
