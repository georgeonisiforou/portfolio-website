import React from "react";
import Image from "next/image";
import mypic from "../public/travel/profile.jpg";
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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
    <div className="flex flex-col content-between items-stretch place-content-between mt-40 relative z-0 heroContainer">
      <div className="flex items-center content-center justify-between">
        <Fade triggerOnce delay={500}>
          <div className="left-20 relative top-16">
            <Image
              src={mypic}
              alt=""
              width="640px"
              height="420px"
              className="rounded-lg relative"
            />
          </div>
        </Fade>
        <div className="flex flex-col justify-center items-end relative pr-16 pl-16 mr-40 w-1/4">
          <Reveal keyframes={customAnimation} triggerOnce delay={750}>
            <h1 className=" text-8xl text-slate-800 font-bold">
              GEORGE ONISIFOROU
            </h1>
          </Reveal>

          <h2 className=" text-slate-600 text-2xl mb-16">Software Developer</h2>
        </div>
      </div>
      <div className="flex justify-end mr-56 mt-64 mb-12">
        <Reveal keyframes={customAnimation} triggerOnce delay={1250}>
          <div className=" text-2xl text-justify max-w-xl">
            <h3>
              Newly born Web Developer with a strong lean on the frontend side.
              I try to create minimalistic user-friendly interfaces.
            </h3>
            <h3 className="mt-12">
              When I'm not working on a visual interface, I'm probably out
              eating with friends or stuck in a YouTube video loophole.
            </h3>
            <h3 className="mt-2">Or petting a dog.</h3>
            <h3>Maybe a cat also.</h3>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
