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
  return (
    <div className="flex justify-center m-8">
      <div className=" flex justify-center p-8 flex-wrap max-w-5xl border-slate-400">
        {logos.map((logo, key) => (
          <div key="" className="m-8">
            <Image
              src={logo}
              width="70px"
              height="70px"
              alt="tech-logo"
              key=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
