import React from "react";
import { BsFillFileEarmarkPdfFill, BsGithub } from "react-icons/bs";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div className="flex flex-col p-8 w-screen gap-8 projectsContainer text-3xl lg:mt-24 mt-48 mb-20 lg:mb-0">
      {/* <Project
        title="George Onisiforou"
        description="Personal website/portfolio."
        picture="https://images.unsplash.com/photo-1581315628079-f093bb040803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      />
      <Project
        title="Spotifyi"
        description="An app for listening to unnessesary information."
        picture="https://images.unsplash.com/photo-1581315628079-f093bb040803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      /> */}

      <div className="flex font-normal ml-8">
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

      <div className="flex font-normal ml-8">
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
