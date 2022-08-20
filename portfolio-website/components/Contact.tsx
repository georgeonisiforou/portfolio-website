import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "animate.css";

export default function Contact() {
  const [copyText, setCopyText] = useState("Click to copy");

  const copied = () => {
    setCopyText("Email copied");
  };

  return (
    <div className="flex flex-col justify-around h-72 mt-64 mb-64">
      <div className="flex flex-row justify-around text-5xl font-semibold">
        <h3 className="">Interested to collaborate / work with me?</h3>
        <h3 className="">Message me at:</h3>
      </div>
      <div className="flex flex-col mt-40">
        <div className="">
          <CopyToClipboard text="georgeon2016@gmail.com">
            <div className="text-6xl flex flex-col items-center font-semibold emailContainer">
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
