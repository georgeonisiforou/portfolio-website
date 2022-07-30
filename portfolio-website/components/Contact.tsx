import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  return (
    <div className="flex flex-col justify-around h-72 mt-20 mb-20">
      <div className="flex flex-row justify-around text-3xl">
        <h3 className="">Interested to collaborate / work with me?</h3>
        <h3 className="">Message me at:</h3>
      </div>
      <CopyToClipboard text="georgeon2016@gmail.com">
        <div
          id="email"
          className="text-6xl flex place-content-center font-semibold email hover:text-slate-400"
        >
          georgeon2016@gmail.com
        </div>
      </CopyToClipboard>
    </div>
  );
}
