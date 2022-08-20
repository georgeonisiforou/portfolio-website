import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return loading ? (
    <div className="loadingScreen">
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
    </div>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
