import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "animate.css";

export default function Contact() {
  const [copyText, setCopyText] = useState("Click to copy");

  const copied = () => {
    setCopyText("Email copied");
  };

  return (
    <div className="flex flex-col justify-around h-72 mt-64 sm:mb-64">
      <div className="flex flex-col p-4 sm:flex-row justify-around sm:text-2xl lg:text-5xl">
        <h3 className="">Interested to collaborate / work with me?</h3>
        <h3 className="">Message me at:</h3>
      </div>
      <div className="flex flex-col sm:mt-40">
        <div className="">
          <CopyToClipboard text="georgeon2016@gmail.com">
            <div className="lg:text-6xl sm:text-4xl text-3xl flex flex-col items-center emailContainer">
              <h3 className=" clickToCopy text-2xl ">{copyText}</h3>

              <button onClick={copied} className="email">
                {" "}
                georgeon2016@gmail.com
              </button>
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
