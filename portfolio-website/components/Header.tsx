import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const headerLocation = document.querySelector(".headerLocation");
    const headerCurrentJob = document.querySelector(".headerCurrentJob");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? (headerLocation?.classList.add("hide-element"),
        headerCurrentJob?.classList.add("hide-element"),
        header?.classList.add("is-sticky"))
      : (headerLocation?.classList.remove("hide-element"),
        headerCurrentJob?.classList.remove("hide-element"),
        header?.classList.remove("is-sticky"));
  };

  return (
    <Fade triggerOnce className="z-50 relative">
      <div className="flex flex-row w-full justify-between content-center items-center p-8 header fixed z-50 top-0">
        <div>
          <h1 className=" text-5xl text-slate-800 font-bold fancy-title">
            <Link href="/">
              <div className="fancyTitle flex">
                <div className="titleLetter">G</div>
                <div className="titleLetter">O</div>
                <span>.</span>
              </div>
            </Link>
          </h1>
        </div>

        <div className="flex flex-col headerLocation">
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

        <div className="text-slate-800 text-xl currentWork headerCurrentJob">
          Currently Software Engineer Intern at VasLabs Ltd
        </div>
        <div className="text-slate-800 text-xl font-medium flex flex-row">
          <ul className="flex flex-row">
            <li className="mr-2 hover:text-slate-400 fancy-link">
              <Link href="/">Projects</Link>
            </li>
            <li className="mr-2">|</li>
            <li className="mr-2 hover:text-slate-400 fancy-link">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-2">|</li>
            <li className="mr-2 hover:text-slate-400 fancy-link">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default Header;
