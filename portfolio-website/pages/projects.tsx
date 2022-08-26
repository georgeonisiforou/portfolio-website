import React from "react";
import { BsFillFileEarmarkPdfFill, BsGithub } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center p-8 w-screen gap-8 projectsContainer text-3xl lg:mt-24 mt-48 mb-20 lg:mb-0">
      <h1 className="font-bold text-5xl mb-16">STILL IN PROGRESS...</h1>

      <h2>But since you are already here &#128064;:</h2>
      <br />
      <div className="flex font-semibold ml-8">
        <h3 className="mr-8">Please check my GitHub</h3>
        <a
          href="https://github.com/georgeonisiforou?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <BsGithub />
        </a>
      </div>

      <div className="flex font-semibold ml-8">
        <h3 className="mr-8">Or have a look at my resume</h3>
        <span className="pdf">
          <a href="../CV/CV.pdf" download>
            <BsFillFileEarmarkPdfFill />
          </a>
        </span>
      </div>
    </div>
  );
}
