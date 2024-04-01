import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  const googleSiteVerification = process.env.VERIFICATION_GOOGLE as string;
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content={googleSiteVerification} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
