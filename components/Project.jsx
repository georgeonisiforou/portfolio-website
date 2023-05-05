import React from "react";
import Image from "next/image";

export default function Project({ title, description, picture }) {
  return (
    <div className="flex justify-between w-full p-8 mr-8 mb-8 mt-20">
      <div className="titleAndDescriptionContainer w-1/2 pt-12">
        <div className="projectTitle font-black">{title}</div>
        <div className="projectDescription">{description}</div>
      </div>

      <div className="projectPicture w-1/2">
        <img src={picture} alt="" />
      </div>
    </div>
  );
}
