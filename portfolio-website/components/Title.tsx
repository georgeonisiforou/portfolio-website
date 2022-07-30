import React from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";

const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between content-center items-center p-8">
      <div className="flex flex-col">
        <h1 className=" text-5xl text-slate-800 font-bold fancy-title">GO.</h1>
      </div>

      <div className="flex flex-col">
        <div className="text-slate-800 text-xl">Based in Limassol</div>
        <div className="text-slate-800 text-xl flex baseLocation">
          <a
            href="https://www.google.com/maps/@34.9753931,33.6807325,8.92z"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cyprus
          </a>
          <GoLocation className="pin" />
        </div>
      </div>

      <div className="text-slate-800 text-xl currentWork">
        Currently Software Engineer Intern at VasLabs Ltd
      </div>
      <div className="text-slate-800 text-xl font-medium flex flex-row">
        <ul className="flex flex-row">
          <li className="mr-2 hover:text-slate-400 fancy-link">
            <Link href="/">Projects</Link>
          </li>
          <li className="mr-2">|</li>
          <li className="mr-2 hover:text-slate-400 fancy-link">
            <Link href="/">About</Link>
          </li>
          <li className="mr-2">|</li>
          <li className="mr-2 hover:text-slate-400 fancy-link">
            <Link href="/">Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
