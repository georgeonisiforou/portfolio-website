import React, { useState } from "react";
import aboutpic from "../public/assets/images/aboutpic.jpg";
import Image from "next/image";
import Seo from "../components/Seo";

const INTERESTS = [
  { id: "football", label: "Football" },
  { id: "food", label: "Food" },
  { id: "travel", label: "Travelling" },
  { id: "garden", label: "Gardening" },
] as const;

const COPY: Record<(typeof INTERESTS)[number]["id"], string> = {
  football:
    "I love watching and playing football (even though I am only watching lately). I'm a massive Liverpool FC fan and if I'm not answering your calls or messages, then most probably I'm watching them play.",
  food: "I'm a culinary enthusiast and an amateur cook. I could be a food blogger but I keep the photos to myself. I'm always in the mood for a good juicy smashed burger.",
  travel:
    "I believe that travelling is a cure for the stressed mind and I'm always seeking to explore new places around the world. Covid-19 has slowed me down a little but I will get back on track soon.",
  garden:
    "In the last few years I have been more and more interested in gardening. I guess you can say it's an indication that I'm growing old. I love caring, propagating, experimenting or just simply staring at a beautiful plant. I'm also making my own compost in my backyard. Nothing goes to waste!",
};

export default function About() {
  const [active, setActive] =
    useState<(typeof INTERESTS)[number]["id"]>("football");

  return (
    <div className="mx-auto max-w-content px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32 lg:pt-12">
      <Seo
        title="About"
        description="About George Onisiforou — frontend-focused software engineer with a background in Computer Science and a passion for clean, user-friendly interfaces."
        path="/about"
      />

      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        About
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
        Passionate web developer
      </h1>
      <p className="mt-4 text-lg text-ink-muted sm:text-xl">
        Always seeking and exploring creativity.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="relative order-2 overflow-hidden rounded-3xl border border-slate-200/80 bg-surface-elevated shadow-card ring-1 ring-slate-900/5 lg:order-1">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={aboutpic}
              alt="George in the Scottish Highlands"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="order-1 space-y-6 text-lg leading-relaxed text-ink-muted lg:order-2">
          <p>So, here&apos;s my journey so far...</p>
          <p>
            I studied Computer Science with Business Management at the
            University of Manchester and then did a Master&apos;s in Shipping at
            Cardiff University. I worked for a big shipping company in Limassol
            for 6+ years until I started reminiscing my coding days back from
            university. I started experimenting with code again after a big gap
            in my career and I fell in love with Web Development. Several
            personal projects and online courses later, I decided to make a
            turn in my career and become a Web Developer.
          </p>
          <p>
            All the years I dedicated to the Shipping Industry have provided me
            with invaluable experience and skills that can be applied to any
            industry and work environment.
          </p>
        </div>
      </div>

      <section className="mt-20 border-t border-slate-200/80 pt-16 lg:mt-28 lg:pt-20">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Personal interests
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {INTERESTS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === id
                  ? "border-accent bg-accent-muted text-accent"
                  : "border-slate-200 bg-surface-elevated text-ink-muted hover:border-slate-300 hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {COPY[active]}
        </p>
      </section>
    </div>
  );
}
