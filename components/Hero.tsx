import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgAsterisk } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import mypic from "../public/travel/profile.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-indigo-50/50 via-surface to-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(rgb(148 163 184 / 0.35) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-content px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8 lg:pb-32 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(260px,320px)] lg:items-center lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent shadow-soft backdrop-blur-sm">
              Software developer
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">George</span>
              <span className="block text-slate-800">Onisiforou</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted sm:text-xl">
              Frontend-focused engineer building clear, fast interfaces with
              React.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/contact" passHref>
                <a className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-hover">
                  Get in touch
                  <FiArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                </a>
              </Link>
              <Link href="/projects" passHref>
                <a className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm transition-colors hover:border-slate-400 hover:bg-white">
                  View work
                </a>
              </Link>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-3 shadow-card ring-1 ring-slate-900/[0.04]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={mypic}
                  alt="George Onisiforou"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 18%"
                  priority
                  sizes="(max-width: 1024px) 280px, 320px"
                />
              </div>
            </div>
            <figcaption className="mt-3 flex gap-1 px-1 text-[10px] font-normal leading-relaxed text-slate-400 sm:text-[11px]">
              <CgAsterisk
                className="mt-px h-3 w-3 shrink-0 text-slate-300"
                aria-hidden
              />
              <span>
                This photo is a little outdated. I am a bit more mature now(?)
                and have a couple grey hair.
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-l-2 border-accent/30 pl-6 sm:mt-20 lg:mt-24">
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            I aim for minimal, user-friendly UI. When I&apos;m not shipping
            interfaces, I&apos;m usually out with friends, deep in a YouTube
            rabbit hole, or saying hi to a dog. Maybe a cat too.
          </p>
        </div>
      </div>
    </section>
  );
}
