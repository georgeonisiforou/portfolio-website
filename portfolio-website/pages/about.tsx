import React, { useEffect, useState } from "react";
import { useRef } from "react";
import aboutpic from "../assets/images/aboutpic.jpg";
import Image from "next/image";

export default function About() {
  const footballHobby =
    "I love watching and playing football (even though I am only watching lately). I'm a massive Liverpool FC fan and if I'm not answering to your calls or messages, then most probably I'm watching them play.";

  const foodHobby =
    "I'm a culinary enthusiast and an amateur cook. I could be a food blogger but I keep the photos to myself. A good smashed burger always makes me happy.";

  const travelHobby =
    "I believe that travelling is a cure for the stressed mind and I'm always seeking to explore new places around the world. Covid-19 has slowed me down a little but I will get back on track soon.";

  const gardenHobby =
    "In the last few years I have been more and more interested in gardening. I guess you can say it's an indication that I'm growing old. I love caring, propagating, experimenting and just staring at a beautiful plant. I'm also making my own compost in my backyard. Nothing goes to waste!";

  const hobbyText = useRef(footballHobby);
  const hobbyImage = useRef(null);

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
    <div className="p-16">
      <div className="mb-32 w-1/3">
        <h1 className=" text-8xl text-slate-800 font-medium fancy-title">
          Passionate Web Developer
        </h1>
      </div>
      <div className="flex justify-between m-8">
        <div className="text-2xl mt-8">
          <h3>Always seeking and exploring creativity.</h3>
        </div>
        <div className="w-1/2">
          <Image
            src={aboutpic}
            alt=""
            width="700px"
            height="500px"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-start text-2xl mt-32">
        <div className="w-1/2 text-justify p-4 pr-8">
          <p>So, here's my journey so far... </p>
          <br />
          <p>
            I studied Computer Science with Business Management at University of
            Manchester and then did a Master's in Shipping at Cardiff
            University. I worked in a big shipping company in Limassol for 6+
            years until I started reminiscing my coding days back in university.
            I started experimenting with code again after a big gap in my career
            and I fell in love with Web Development. Several personal projects
            and online courses after, I decided to make a turn in my career and
            become a Web Developer.
          </p>
          <br />
          <p>
            All the years I dedicated to the Shipping Industry, have provided me
            with invaluable experience and skills that can be applied to any
            industry and work environment.
          </p>
        </div>
      </div>
      <div className=" p-4 mt-48 mb-32">
        <h2 className="text-5xl mt-8 mb-16">Personal Interests.</h2>
        <div className="flex justify-between text-3xl mb-12">
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
        <div className="flex justify-between items-center text-xl hobbyContainer">
          <div className="w-1/2 m-8">
            <Image
              ref={hobbyImage.current}
              src={aboutpic}
              className="rounded-md"
            ></Image>
          </div>

          <p className="w-1/2 p-8 text-justify hobbyText" key={btnClicked}>
            {btnClicked}
          </p>
        </div>
      </div>
    </div>
  );
}
