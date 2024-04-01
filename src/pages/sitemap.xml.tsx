import { PageBlogPostFieldsFragment, PageBlogPostOrder } from '@src/libs/__generated/sdk';
import { client, previewClient } from '@src/libs/client';
import { GetServerSideProps } from 'next';
import { revalidateDuration } from './utils/constants';

function generateSiteMap(data: Array<PageBlogPostFieldsFragment | null>, host: string | null) {
  const homepage = `https://${host}`;
  const urls = data?.map(item => {
    const slug = item?.slug;
    return {
      url: `${homepage}/blogs/${slug}`,
    };
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${homepage}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${homepage}/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${homepage}/uses</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${homepage}/contact-us</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
      ${urls
        ?.map((item: any) => {
          return (
            item &&
            `<url>
              <loc>${item?.url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.5</priority>
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
