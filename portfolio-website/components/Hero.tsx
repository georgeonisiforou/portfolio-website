import React from "react";
import Image from "next/image";
import mypic from "../assets/images/profilepic.jpg";
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
    <div className="flex flex-col content-between items-stretch place-content-between">
      <div className="flex items-center content-center">
        <Fade triggerOnce delay={500}>
          <div className="left-20 relative top-16">
            <Image
              src={mypic}
              alt=""
              width="600px"
              height="420px"
              className="rounded-lg"
            />
          </div>
        </Fade>
        <div className="flex flex-col ml-32 mt-20 relative">
          <Reveal keyframes={customAnimation} triggerOnce delay={750}>
            <h1 className=" text-8xl text-slate-800 font-medium fancy-title">
              GEORGE ONISIFOROU
            </h1>
          </Reveal>

          <h2 className="absolute top-48 right-60 text-slate-600 text-2xl mb-16">
            Software Developer
          </h2>
        </div>
      </div>
      <div className="flex justify-end mr-52 mt-32 mb-12">
        <Reveal keyframes={customAnimation} triggerOnce delay={1250}>
          <div className=" text-lg max-w-xl">
            <h3>
              Newly born Web Developer with a strong lean on the frontend side.
              I try to create minimalistic user-friendly interfaces. Dark mode
              advocate.
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
