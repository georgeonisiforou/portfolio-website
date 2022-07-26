import type { NextPage } from "next";
import Hero from "../components/Hero";
import Header from "../components/Title";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
