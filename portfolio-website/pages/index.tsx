import type { NextPage } from "next";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import TechnologiesLogos from "../components/TechnologiesLogos";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";

// import CustomCursor from "../components/CustomCursor";

const Home: NextPage = () => {
  return (
    <div>
      {/* <CustomCursor /> */}
      <Hero />
      <Technologies />
      <TechnologiesLogos />
      <WorkExperience />
      <Contact />
    </div>
  );
};

export default Home;
