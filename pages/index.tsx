import type { NextPage } from "next";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import TechnologiesLogos from "../components/TechnologiesLogos";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  return (
    <div>
      <Seo
        title="Frontend Developer"
        description="Frontend-focused software engineer building interactive, user-friendly web experiences with React and Next.js."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.georgeonisiforou.com/",
            name: "George Onisiforou",
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "George Onisiforou",
            url: "https://www.georgeonisiforou.com/",
            jobTitle: "Software Engineer",
          },
        ]}
      />
      <Hero />
      <Technologies />
      <TechnologiesLogos />
      <WorkExperience />
      <Contact />
    </div>
  );
};

export default Home;
