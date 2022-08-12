import type { NextPage } from "next";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import TechnologiesLogos from "../components/TechnologiesLogos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
// import CustomCursor from "../components/CustomCursor";

const Home: NextPage = () => {
  return (
    <div>
      {/* <CustomCursor /> */}

      <Hero />
      <Technologies />
      <TechnologiesLogos />

      <Contact />
    </div>
  );
};

export default Home;
