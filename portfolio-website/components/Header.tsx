import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [toggle, handleToggle] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const header = document.querySelector(".header");
    const headerLocation = document.querySelector(".headerLocation");
    const headerCurrentJob = document.querySelector(".headerCurrentJob");
    const scrollTop = window.scrollY;
    scrollTop >= 80
      ? (headerLocation?.classList.add("hide-element"),
        headerCurrentJob?.classList.add("hide-element"),
        header?.classList.add("is-sticky"))
      : (headerLocation?.classList.remove("hide-element"),
        headerCurrentJob?.classList.remove("hide-element"),
        header?.classList.remove("is-sticky"));
  };

  const openMenu = () => {
    const menu = document.querySelector(".mobileMenu");
    handleToggle(!toggle);
    toggle
      ? menu?.classList.add("showMenu")
      : menu?.classList.remove("showMenu");
  };

  return (
    <div className="z-50 relative">
      <div className="flex flex-row w-full justify-between content-center items-center p-8 header z-50 top-0">
        <div>
          <h1 className=" text-2xl sm:text-5xl text-slate-800 font-bold fancy-title">
            <Link href="/">
              <div className="fancyTitle flex">
                <div className="titleLetter">G</div>
                <div className="titleLetter">O</div>
                <span>.</span>
              </div>
            </Link>
          </h1>
        </div>

        <button onClick={openMenu} className="toggleMenu">
          <FiMenu />
        </button>

        <div className="flex flex-col headerLocation invisible lg:visible ">
          <div className="text-slate-800 text-sm lg:text-xl">
            Based in Limassol
          </div>
          <div className="text-slate-800 text-sm lg:text-xl flex baseLocation">
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

        <div className="text-slate-800 text-sm lg:text-xl currentWork headerCurrentJob invisible lg:visible ">
          Currently open to work / collaborate
        </div>
        <div className="text-slate-800 sm:  text-xl font-medium flex flex-row navBar">
          <ul className="flex flex-row">
            <li className="mr-2 hover:text-slate-400 fancy-link">
              <Link href="/projects">Projects</Link>
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
      <div className="mobileMenu z-30  text-slate-100">
        <div className="uppercase font-bold text-lg absolute top-8 left-8">
          George Onisiforou
          <br />
          <div className="text-sm text-slate-300 font-normal">
            Software Developer
          </div>
        </div>
        <div className="absolute top-24 left-8 text-xs">
          Based in Limassol
          <br />
          Cyprus
        </div>
        <button className="text-5xl absolute top-8 right-8" onClick={openMenu}>
          <IoMdCloseCircle />
        </button>
        <div className="mobMenuItem">
          <Link href="/">
            <a href="" onClick={openMenu}>
              Home
            </a>
          </Link>
        </div>
        <div className="mobMenuItem">
          <Link href="/projects">
            <a href="" onClick={openMenu}>
              Projects
            </a>
          </Link>
        </div>
        <div className="mobMenuItem">
          <Link href="/about">
            <a href="" onClick={openMenu}>
              About
            </a>
          </Link>
        </div>
        <div className="mobMenuItem">
          <Link href="/contact">
            <a href="" onClick={openMenu}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
