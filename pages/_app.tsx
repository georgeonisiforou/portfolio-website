import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        className="base-page-size"
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.75 }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        <Layout>
          <Head>
            <title>George Onisiforou</title>
            <meta name="viewport" content="width=device-width"></meta>
            <meta
              name="description"
              content="Software developer building interactive and user-friendly web experiences."
            ></meta>
            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta
              property="twitter:url"
              content="https://www.georgeonisiforou.com/"
            ></meta>
            <meta property="twitter:title" content="George Onisiforou"></meta>
            <meta
              property="twitter:description"
              content="Software developer building interactive and user-friendly web experiences."
            ></meta>
            <meta
              property="twitter:image"
              content="https://www.georgeonisiforou.com/images/app-cover.png"
            ></meta>
            <meta property="og:type" content="website"></meta>
            <meta
              property="og:url"
              content="https://www.georgeonisiforou.com/"
            ></meta>
            <meta property="og:title" content="George Onisiforou"></meta>
            <meta
              property="og:description"
              content="Software developer building interactive and user-friendly web experiences."
            ></meta>
            <meta
              property="og:image"
              content="https://www.georgeonisiforou.com/images/app-cover.png"
            ></meta>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
