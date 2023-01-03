import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Xplori | Global Sim & eSim</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
