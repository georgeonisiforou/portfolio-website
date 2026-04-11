import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TypeAnimation } from "react-type-animation";

export default function ContactPage() {
  const [copyText, setCopyText] = useState("Copy email");

  const copied = () => {
    setCopyText("Copied");
    setTimeout(() => setCopyText("Copy email"), 2500);
  };

  return (
    <div className="mx-auto max-w-content px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Say hello
        </h1>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-2 text-xl text-ink-muted sm:text-2xl">
          <span>Message me to</span>
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
            className="font-semibold text-accent"
            speed={55}
            deletionSpeed={70}
            repeat={Infinity}
            cursor
          />
        </p>
      </div>

      <div className="mt-14 max-w-2xl rounded-3xl border border-slate-200/80 bg-surface-elevated p-8 shadow-soft sm:p-10">
        <p className="text-sm font-medium text-ink-muted">Email</p>
        <CopyToClipboard text="georgeon2016@gmail.com" onCopy={copied}>
          <button
            type="button"
            className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-left transition-colors hover:border-accent/40 hover:bg-accent-muted/30 sm:px-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {copyText}
            </span>
            <span className="mt-1 block break-all font-mono text-lg font-medium text-ink">
              georgeon2016@gmail.com
            </span>
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
