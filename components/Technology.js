import React from "react";
import { BiRightArrow } from "react-icons/bi";

export default function Technology({ tech }) {
  return (
    <div>
      <li className="p-2" key={tech.id}>
        <div className="flex items-center">
          <BiRightArrow className="mr-2" />
          {tech.name}
        </div>
      </li>
    </div>
  );
}
