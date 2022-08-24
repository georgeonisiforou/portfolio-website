import React from "react";
import Image from "next/image";
import csslogo from "../assets/images/css-svgrepo-com.svg";
import gitlogo from "../assets/images/git-svgrepo-com.svg";
import githublogo from "../assets/images/github-svgrepo-com.svg";
import htmllogo from "../assets/images/html-svgrepo-com.svg";
import jslogo from "../assets/images/js-svgrepo-com.svg";
import nextjslogo from "../assets/images/nextjs-svgrepo-com.svg";
import nodejslogo from "../assets/images/nodejs-svgrepo-com.svg";
import reactlogo from "../assets/images/react-svgrepo-com.svg";
import tailwindlogo from "../assets/images/tailwindcss-svgrepo-com.svg";
import typescriptlogo from "../assets/images/typescript-svgrepo-com.svg";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function TechnologiesLogos() {
  const logos = [
    csslogo,
    gitlogo,
    githublogo,
    htmllogo,
    jslogo,
    nextjslogo,
    nodejslogo,
    reactlogo,
    tailwindlogo,
    typescriptlogo,
  ];

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

  return (
    <div className="flex justify-center m-8">
      <div className=" flex justify-center sm:p-8 flex-wrap max-w-5xl">
        {logos.map((logo, key) => (
          <Reveal key={key} keyframes={customAnimation} triggerOnce>
            <div key={key} className="sm:m-8 m-2">
              <ul className="logoUl">
                <li>
                  <div className="imageWrapper">
                    {" "}
                    <Image
                      src={logo}
                      width="70px"
                      height="70px"
                      alt="tech-logo"
                      key=""
                      className="imageLogo"
                    />
                  </div>
                  <div className="imageWrapper">
                    {" "}
                    <Image
                      src={logo}
                      width="70px"
                      height="70px"
                      alt="tech-logo"
                      key=""
                      className="imageLogo"
                    />
                  </div>
                  <div className="imageWrapper">
                    {" "}
                    <Image
                      src={logo}
                      width="70px"
                      height="70px"
                      alt="tech-logo"
                      key=""
                      className="imageLogo"
                    />
                  </div>
                  <div className="imageWrapper">
                    {" "}
                    <Image
                      src={logo}
                      width="70px"
                      height="70px"
                      alt="tech-logo"
                      key=""
                      className="imageLogo"
                    />
                  </div>
                  <div className="imageWrapper">
                    <Image
                      src={logo}
                      width="70px"
                      height="70px"
                      alt="tech-logo"
                      key=""
                      className="imageLogo"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
