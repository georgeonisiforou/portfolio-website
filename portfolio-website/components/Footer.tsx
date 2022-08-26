import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsSpotify } from "react-icons/bs";
import { SiTinder } from "react-icons/si";
import { MdCopyright } from "react-icons/md";
export default function Footer() {
  return (
    <div className="flex justify-between items-center lg:p-8 p-2 font-semibold footer">
      <div className="sm:text-lg text-xs footerCopyright">
        <h4>George Onisiforou</h4>
        <h4>Software Developer</h4>
      </div>
      <div className="flex flex-row sm:text-3xl">
        <div className="sm:m-4 ml-8 github">
          <a
            href="https://github.com/georgeonisiforou?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div className="sm:m-4 ml-4 linkedin">
          <a
            href="https://www.linkedin.com/in/george-onisiforou-mics-7b164051/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="sm:m-4 ml-4 instagram">
          <a
            href="https://www.instagram.com/georgeonis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <div className="sm:m-4 ml-4 spotify">
          <a
            href="https://open.spotify.com/user/onisifg0?si=67e08bd310fe4040"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsSpotify />
          </a>
        </div>
        <div className="sm:m-4 ml-4 mr-8 tinder">
          <a
            href="https://giphy.com/gifs/stoner-sees-isopropyl-xSM46ernAUN3y/fullscreen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTinder />
          </a>
        </div>
      </div>
      <div className="sm:text-lg text-xs footerCopyright">
        <h4>Designed and Developed by</h4>

        <div className="flex sm:flex-row flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <MdCopyright /> 2022
          </div>
          &nbsp;George Onisiforou
        </div>
      </div>
    </div>
  );
}
