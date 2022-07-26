import React from "react";
import Image from "next/image";
import mypic from "../assets/images/profilepic.jpg";

export default function Hero() {
  return (
    <div className="flex justify-between items-center">
      <div className="left-40 relative top-16">
        <Image
          src={mypic}
          alt=""
          width="650px"
          height="480px"
          className="rounded-lg"
        />
      </div>
      <div className="right-20 text-lg max-w-sm relative">
        <h3>
          Newly born Web Developer with a strong lean on the frontend side. I
          try to create minimalistic user-friendly interfaces. Dark mode
          advocate.
        </h3>
        <h3 className="mt-12">
          When I'm not working on a visual interface, I'm probably out eating
          with friends.
        </h3>
        <h3 className="mt-2">Or petting a dog.</h3>
        <h3>Maybe a cat also.</h3>
      </div>
    </div>
  );
}
