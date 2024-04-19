import React from "react";
import Image from "next/image";
import csslogo from "../public/assets/images/css-svgrepo-com.svg";
import gitlogo from "../public/assets/images/git-svgrepo-com.svg";
import githublogo from "../public/assets/images/github-svgrepo-com.svg";
import htmllogo from "../public/assets/images/html-svgrepo-com.svg";
import jslogo from "../public/assets/images/js-svgrepo-com.svg";
import nextjslogo from "../public/assets/images/nextjs-svgrepo-com.svg";
import nodejslogo from "../public/assets/images/nodejs-svgrepo-com.svg";
import reactlogo from "../public/assets/images/react-svgrepo-com.svg";
import tailwindlogo from "../public/assets/images/tailwindcss-svgrepo-com.svg";
import sanitylogo from "../public/assets/images/sanity-svgrepo-com.svg";
import framerlogo from "../public/assets/images/framer-svgrepo-com.svg";
import styledcomponentslogo from "../public/assets/images/styled-components-1.svg";
import typescriptLogo from "../public/assets/images/typescript-svgrepo-com.svg";

import { keyframes } from "@emotion/react";

export default function TechnologiesLogos() {
  const logos = [
    csslogo,
    gitlogo,
    githublogo,
    htmllogo,
    jslogo,
    typescriptLogo,
    nextjslogo,
    nodejslogo,
    reactlogo,
    tailwindlogo,
    sanitylogo,
    framerlogo,
    styledcomponentslogo,
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
          <div key={key} className="sm:m-10 m-2">
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
        ))}
      </div>
    </div>
  );
}
