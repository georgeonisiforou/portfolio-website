import React from "react";
import Link from "next/link";

const Title = () => {
  return (
    <div className="flex flex-row w-full justify-between content-center items-center p-8">
      <div className="flex flex-col">
        <h1 className="text-slate-200 text-5xl font-bold">George Onisiforou</h1>
        <h2 className="self-end text-slate-400 text-2xl">Software Developer</h2>
      </div>

      <div className="flex flex-col">
        <div className="text-slate-300 text-l font-bold">Based in Limassol</div>
        <div className="text-slate-300 text-l font-bold">Cyprus</div>
      </div>

      <div className="text-slate-300 text-l font-bold currentWork">
        Currently Software Engineer Intern at VasLabs Ltd
      </div>
      <div className="text-slate-300 text-xl font-bold flex flex-row">
        <ul className="flex flex-row">
          <li className="mr-2 hover:text-slate-400">
            <Link href="/">Projects</Link>
          </li>
          <li className="mr-2">|</li>
          <li className="mr-2 hover:text-slate-400">
            <Link href="/">About</Link>
          </li>
          <li className="mr-2">|</li>
          <li className="mr-2 hover:text-slate-400">
            <Link href="/">Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Title;
