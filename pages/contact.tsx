import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const [copyText, setCopyText] = useState("Click to copy");

  const copied = () => {
    setCopyText("Email copied");
  };

  return (
    <div className=" contactContainer bg-slate-800 text-slate-100">
      <div className="flex sm:justify-start sm:items-center lg:pl-16 pt-40  mt-32 uppercase">
        <div className="contactText">
          <span>Message me to</span>
          <div className="message">
            <div className="word1">work together</div>
            <div className="word2">discuss a project</div>
            <div className="word3">grab a coffee</div>
            <div className="word4">have lunch</div>
            <div className="word5">recommend a burger</div>
          </div>
        </div>
      </div>
      <div className="flex p-8 ml-8 mb-4 mt-32">
        <div className="">
          <CopyToClipboard text="georgeon2016@gmail.com">
            <div className="lg:text-6xl sm:text-4xl text-2xl flex flex-col items-center  emailContainer">
              <h3 className=" clickToCopy text-2xl ">{copyText}</h3>

              <button onClick={copied} className="email after:bg-slate-100">
                georgeon2016@gmail.com
              </button>
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
