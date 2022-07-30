import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsSpotify } from "react-icons/bs";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";

export default function Footer() {
  return (
    <Fade delay={750}>
      <div className="flex justify-between items-center p-8 font-semibold footer">
        <div className="text-lg">
          <h4>George Onisiforou</h4>
          <h4>Software Developer</h4>
        </div>
        <div className="flex text-3xl">
          <div className="m-4 github">
            <a
              href="https://github.com/georgeonisiforou?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
          <div className="m-4 linkedin">
            <a
              href="https://www.linkedin.com/in/george-onisiforou-mics-7b164051/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
          <div className="m-4 instagram">
            <a
              href="https://www.instagram.com/georgeonis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </div>
          <div className="m-4 spotify">
            <a
              href="https://open.spotify.com/user/onisifg0?si=67e08bd310fe4040"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify />
            </a>
          </div>
        </div>
        <div className="text-lg">
          <h4>Designed and Developed by George Onisiforou</h4>
        </div>
      </div>
    </Fade>
  );
}
