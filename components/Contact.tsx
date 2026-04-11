import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const [copyText, setCopyText] = useState("Copy email");

  const copied = () => {
    setCopyText("Copied");
    setTimeout(() => setCopyText("Copy email"), 2500);
  };

  return (
    <section className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-ink px-6 py-12 text-white shadow-card sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Open to collaborations, frontend roles, and interesting product
            work. Drop me a line — I usually reply within a day or two.
          </p>

          <CopyToClipboard text="georgeon2016@gmail.com" onCopy={copied}>
            <button
              type="button"
              className="group mt-10 inline-flex w-full max-w-full flex-col items-start rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-left transition-colors hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {copyText}
              </span>
              <span className="mt-1 break-all font-mono text-base font-medium text-white sm:text-lg">
                georgeon2016@gmail.com
              </span>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </section>
  );
}
