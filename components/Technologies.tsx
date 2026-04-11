import React from "react";

const STACK = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "Styled Components",
  "Tailwind CSS",
  "Sanity",
  "Framer Motion",
];

export default function Technologies() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Toolkit
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Technologies
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Tools and libraries I use day to day.
        </p>
      </div>
      <ul className="mt-10 flex flex-wrap gap-2 sm:gap-3">
        {STACK.map((name) => (
          <li key={name}>
            <span className="inline-flex rounded-full border border-slate-200 bg-surface-elevated px-4 py-2 text-sm font-medium text-ink shadow-soft transition-colors hover:border-accent/30 hover:bg-accent-muted/40">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
