import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return loading ? (
    <div className="loadingScreen flex flex-col justify-center items-center">
      <ul className="text" id="text">
        <li className="bounce">G</li>
        <li className="ghost">e</li>
        <li className="ghost">o</li>
        <li className="ghost">r</li>
        <li className="ghost">g</li>
        <li className="ghost">e</li>
        <li className="ghost">&nbsp;</li>

        <li className="rotate">O</li>
        <li className="ghost">n</li>
        <li className="ghost">i</li>
        <li className="ghost">s</li>
        <li className="ghost">i</li>
        <li className="ghost">f</li>
        <li className="ghost">o</li>
        <li className="ghost">r</li>
        <li className="ghost">o</li>
        <li className="ghost">u</li>
      </ul>
      <div className=" text-center text-2xl font-extralight recommendation">
        This website is best enjoyed on a computer screen.
      </div>
    </div>
  ) : (
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
