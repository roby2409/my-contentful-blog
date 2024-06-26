import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import '@src/styles/globals.css';
import { ThemeProvider } from '@src/context/ThemeContext';
import config from 'next-seo.config';
import { DefaultSeo } from 'next-seo';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main>
        <DefaultSeo {...config} />
        <Component {...pageProps} />
        <SpeedInsights />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
