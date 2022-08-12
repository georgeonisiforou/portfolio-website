import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const [copyText, setCopyText] = useState("Click to copy");

  const copied = () => {
    setCopyText("Copied!");
  };

  return (
    <div className="flex flex-col justify-around h-72 mt-20 mb-20">
      <div className="flex flex-row justify-around text-3xl">
        <h3 className="">Interested to collaborate / work with me?</h3>
        <h3 className="">Message me at:</h3>
      </div>
      <div className="flex flex-col">
        <div className="">
          <CopyToClipboard text="georgeon2016@gmail.com">
            <div className="text-6xl flex flex-col items-center font-semibold email  hover:text-slate-400">
              <button onClick={copied}> georgeon2016@gmail.com</button>
              <h3 className=" clickToCopy text-2xl">{copyText}</h3>
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
