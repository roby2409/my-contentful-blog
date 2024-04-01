import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  description: 'Software Developer and Frontend Enthusiast that deliver user-centric interfaces for web and mobile applications that exceed client expectations',
  defaultTitle: 'Roby Setiawan (Software Developer and Frontend Enthusiast)',
  canonical: 'https://robysetiawan.vercel.app',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://robysetiawan.vercel.app/favicon.ico'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robysetiawan.vercel.app',
    title: 'Roby Setiawan (Software Developer and Frontend Enthusiast)',
    siteName: 'Roby Setiawan (Software Developer and Frontend Enthusiast)',
    description: 'Software Developer and Frontend Enthusiast that deliver user-centric interfaces for web and mobile applications that exceed client expectations',
    images: [
      {
        url: 'https://robysetiawan.vercel.app/static/home-image-preview.jpg',
        alt: 'Roby Setiawan Portfolio',
        type: 'image/jpg',
        secureUrl: 'https://robysetiawan.vercel.app/static/home-image-preview.jpg'
      }
    ]
  }
}

export default config;
