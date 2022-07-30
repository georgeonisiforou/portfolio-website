import type { NextPage } from "next";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import TechnologiesLogos from "../components/TechnologiesLogos";
import Header from "../components/Title";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Technologies />
      <TechnologiesLogos />
      <Footer />
    </div>
  );
};

export default Home;
