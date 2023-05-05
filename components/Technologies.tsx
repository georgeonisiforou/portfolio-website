import React from "react";
import { BiRightArrow } from "react-icons/bi";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Technology from "./Technology";

export default function Technologies() {
  const technologies1 = [
    { name: "HTML5", image: "", id: 1 },
    { name: "CSS", image: "", id: 2 },
    { name: "JavaScript", image: "", id: 3 },
    { name: "Node.js", image: "", id: 4 },
    { name: "React", image: "", id: 5 },
  ];

  const technologies2 = [
    { name: "Next.js", image: "", id: 6 },
    { name: "Git", image: "", id: 7 },
    { name: "GitHub", image: "", id: 8 },
    { name: "TypeScript", image: "", id: 9 },
    { name: "TailwindCSS", image: "", id: 10 },
  ];

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
    <div className="mt-48 technologiesContainer">
      <h3 className="sm:ml-32 sm:m-4  text-5xl mb-8 ml-4">Technologies</h3>
      <div className="flex flex-row justify-center text-center sm:p-16 sm:text-3xl font-light">
        <div className="lg:pr-32">
          <ul>
            {technologies1.map((tech, key) => (
              <Technology tech={tech} key={key} />
            ))}
          </ul>
        </div>
        <div className="lg:pl-32 pl-8">
          <ul>
            {technologies2.map((tech, key) => (
              <Technology tech={tech} key={key} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
