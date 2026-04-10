import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TypeAnimation } from "react-type-animation";

export default function ContactPage() {
  const [copyText, setCopyText] = useState("Click to copy");

  const copied = () => {
    setCopyText("Email copied");
  };

  return (
    <div className="contactContainer bg-slate-800 text-slate-100">
      <div className="flex sm:justify-start sm:items-center lg:pl-16 pt-40 mt-32 uppercase">
        <div className="contactText">
          <span>Message me to</span>{" "}
          <TypeAnimation
            sequence={[
              "work together",
              1600,
              "discuss a project",
              1600,
              "grab a coffee",
              1600,
              "have lunch",
              1600,
              "recommend a burger",
              1600,
            ]}
            wrapper="span"
            className="contactType"
            speed={55}
            deletionSpeed={70}
            repeat={Infinity}
            cursor
          />
        </div>
      </div>

      <div className="flex p-8 ml-8 mb-4 mt-32">
        <CopyToClipboard text="georgeon2016@gmail.com">
          <div className="lg:text-6xl sm:text-4xl text-2xl flex flex-col items-center emailContainer">
            <h3 className="clickToCopy text-2xl">{copyText}</h3>
            <button
              type="button"
              onClick={copied}
              className="email email--underline-white"
            >
              georgeon2016@gmail.com
            </button>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}

