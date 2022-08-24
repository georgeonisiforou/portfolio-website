import React, { useEffect, useState } from "react";
import { useRef } from "react";
import aboutpic from "../assets/images/aboutpic.jpg";
import Image from "next/image";
import travelImages from "./travel_images.js";
import Carousel from "../components/Carousel";
import "animate.css";

export default function About() {
  const footballHobby =
    "I love watching and playing football (even though I am only watching lately). I'm a massive Liverpool FC fan and if I'm not answering to your calls or messages, then most probably I'm watching them play.";

  const foodHobby =
    "I'm a culinary enthusiast and an amateur cook. I could be a food blogger but I keep the photos to myself. I'm always in the mood for a good juicy smashed burger.";

  const travelHobby =
    "I believe that travelling is a cure for the stressed mind and I'm always seeking to explore new places around the world. Covid-19 has slowed me down a little but I will get back on track soon.";

  const gardenHobby =
    "In the last few years I have been more and more interested in gardening. I guess you can say it's an indication that I'm growing old. I love caring, propagating, experimenting or just simply staring at a beautiful plant. I'm also making my own compost in my backyard. Nothing goes to waste!";

  const hobbyText = useRef(footballHobby);

  const [btnClicked, setBtnClicked] = useState(footballHobby);

  const footballClicked = () => {
    setBtnClicked(footballHobby);
  };
  const foodClicked = () => {
    setBtnClicked(foodHobby);
  };
  const travelClicked = () => {
    setBtnClicked(travelHobby);
  };
  const gardenClicked = () => {
    setBtnClicked(gardenHobby);
  };

  return (
    <div className="sm:p-16 p-4 mt-48 relative z-0">
      <div className="mb-32 sm:w-1/3 relative">
        <p className="sm:font-medium text-xs sm:text-base text-slate-500 ml-1 mb-2">
          GEORGE ONISIFOROU - EST 1990
        </p>
        <h1 className="text-5xl sm:text-8xl text-slate-900 font-bold fancy-title uppercase">
          Passionate Web Developer
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:m-8">
        <div className="sm:text-2xl mb-8 sm:mb-0 mt-8 font-semibold">
          <h3>Always seeking and exploring creativity.</h3>
        </div>
        <div className="sm:w-1/2 w-screen absolute left-0 mt-24 sm:mt-0 sm:relative">
          <Image
            src={aboutpic}
            alt=""
            // width="700px"
            // height="500px"
            className="sm:rounded-lg relative"
          />
        </div>
      </div>

      <div className="flex justify-start sm:text-2xl sm:mt-32 mt-96">
        <div className="sm:w-1/2 text-justify p-4 sm:pr-8">
          <p className="animate__animated animate__backInLeft">
            So, here's my journey so far...
          </p>
          <br />
          <p className="animate__animated animate__backInRight">
            I studied Computer Science with Business Management at the
            University of Manchester and then did a Master's in Shipping at
            Cardiff University. I worked in a big shipping company in Limassol
            for 6+ years until I started reminiscing my coding days back from
            university. I started experimenting with code again after a big gap
            in my career and I fell in love with Web Development. Several
            personal projects and online courses later, I decided to make a turn
            in my career and become a Web Developer.
          </p>
          <br />
          <p className="animate__animated animate__backInLeft">
            All the years I dedicated to the Shipping Industry, have provided me
            with invaluable experience and skills that can be applied to any
            industry and work environment.
          </p>
        </div>
      </div>
      <div className=" p-4 mt-48 sm:mb-32">
        <h2 className="sm:text-5xl text-2xl mt-8 mb-16 font-semibold">
          Personal Interests.
        </h2>
        <div className="flex justify-between sm:text-3xl text-xl mb-12">
          <h3>
            <button className=" hobby-link" onClick={footballClicked}>
              Football
            </button>
          </h3>
          <h3>
            <button className="hobby-link" onClick={foodClicked}>
              Food
            </button>
          </h3>
          <h3>
            <button className="hobby-link" onClick={travelClicked}>
              Travelling
            </button>
          </h3>
          <h3>
            <button className="hobby-link" onClick={gardenClicked}>
              Gardening
            </button>
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:text-2xl p-4 sm:p-0 hobbyContainer">
          <p className="sm:w-1/4 text-justify hobbyText" key={btnClicked}>
            {btnClicked}
          </p>
          <div className="sm:w-2/3 w-screen sm:mr-12 absolute left-0 sm:relative mt-48 sm:mt-0">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
