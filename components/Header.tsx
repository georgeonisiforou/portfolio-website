import React, { useEffect, useId, useState } from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const mobileMenuId = useId();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY >= 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <div className="z-50 relative ">
      <div
        className={`flex flex-row w-full justify-between content-center items-center p-8 header z-50 top-0${
          isSticky ? " is-sticky" : ""
        }`}
      >
        <div>
          <h1 className=" text-2xl sm:text-5xl text-slate-800 fancy-title">
            <Link href="/">
              <div className="fancyTitle flex">
                <div className="titleLetter">G</div>
                <div className="titleLetter">O</div>
                <span>.</span>
              </div>
            </Link>
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="toggleMenu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls={mobileMenuId}
        >
          <FiMenu />
        </button>

        <div
          className={`flex flex-col headerLocation invisible lg:visible${
            isSticky ? " hide-element" : ""
          }`}
        >
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

        <div
          className={`text-slate-800 text-sm lg:text-xl currentWork headerCurrentJob invisible lg:visible${
            isSticky ? " hide-element" : ""
          }`}
        >
          Currently Software Engineer at Amdocs
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
      <div
        id={mobileMenuId}
        className={`mobileMenu z-30 text-slate-100${
          isMenuOpen ? " showMenu" : ""
        }`}
        role="dialog"
        aria-modal="true"
      >
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
        <button
          type="button"
          className="text-5xl absolute top-8 right-8"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <IoMdCloseCircle />
        </button>
        <div className="mobMenuItem">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </div>
        <div className="mobMenuItem">
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </div>
        <div className="mobMenuItem">
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </div>
        <div className="mobMenuItem">
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
