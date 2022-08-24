import React from "react";
import Image from "next/image";
import mypic from "../public/travel/profile.jpg";
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { CgAsterisk } from "react-icons/cg";

export default function Hero() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(100px);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
`;
  return (
    <div className="sm:flex flex-col content-between items-stretch place-content-between mt-40 relative z-0 heroContainer">
      <div className="flex sm:flex-row flex-col items-center content-center justify-between">
        <Fade triggerOnce delay={500}>
          <div className="sm:left-20 sm:relative sm:top-16 sm:w-1/2 w-screen z-0 my-8 sm:my-0">
            <Image
              src={mypic}
              alt=""
              // width="640px"
              // height="420px"
              className="sm:rounded-lg relative"
            />
            <div className="flex text-xs mt-4 asterisk">
              <CgAsterisk /> This photo is a little outdated. I am a bit more
              mature now(?) and have a couple grey hair.
            </div>
          </div>
        </Fade>
        <div className="flex flex-col justify-center items-end relative sm:pr-16 sm:pl-16 sm:mr-40 pl-4  mr-4 sm:w-1/4">
          <Reveal keyframes={customAnimation} triggerOnce delay={750}>
            <h1 className="text-5xl sm:text-8xl text-slate-800 font-bold">
              GEORGE ONISIFOROU
            </h1>
          </Reveal>

          <h2 className="text-sm text-slate-600 sm:text-2xl mb-16 heroSoftwareDeveloper">
            Software Developer
          </h2>
        </div>
      </div>
      <div className="sm:flex justify-end pl-4 pr-4 sm:mr-56 sm:mt-64 mb-12">
        <Reveal keyframes={customAnimation} triggerOnce delay={1250}>
          <div className=" sm:text-2xl text-justify max-w-xl">
            <h3>
              Newly born Web Developer with a strong lean on the frontend side.
              I try to create minimalistic user-friendly interfaces.
            </h3>
            <h3 className="mt-12">
              When I&apos;m not working on a visual interface, I&apos;m probably
              out eating with friends or stuck in a YouTube video watching
              spree.
            </h3>
            <h3 className="mt-12">Or petting a dog.</h3>
            <h3>Maybe a cat also.</h3>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
