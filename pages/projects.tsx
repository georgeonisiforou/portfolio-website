import React from "react";
import Link from "next/link";
import { BsFillFileEarmarkPdfFill, BsGithub } from "react-icons/bs";
import Seo from "../components/Seo";

export default function Projects() {
  return (
    <div className="mx-auto max-w-content px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32 lg:pt-12">
      <Seo
        title="Projects"
        description="Selected projects, code samples, and links to George Onisiforou’s work on GitHub."
        path="/projects"
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Portfolio
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted">
        Case studies will live here eventually. For now, browse code on GitHub
        or grab my CV.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <a
          href="https://github.com/georgeonisiforou?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-2xl border border-slate-200/80 bg-surface-elevated p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card sm:p-8"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-2xl text-white transition-transform group-hover:scale-105">
            <BsGithub />
          </span>
          <h2 className="mt-5 font-display text-xl font-bold text-ink">
            GitHub
          </h2>
          <p className="mt-2 flex-1 text-sm text-ink-muted">
            Repositories, experiments, and open-source contributions.
          </p>
          <span className="mt-4 text-sm font-semibold text-accent">
            Open GitHub →
          </span>
        </a>

        <a
          href="/CV/CV.pdf"
          download
          className="group flex flex-col rounded-2xl border border-slate-200/80 bg-surface-elevated p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card sm:p-8"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-2xl text-white transition-transform group-hover:scale-105">
            <BsFillFileEarmarkPdfFill />
          </span>
          <h2 className="mt-5 font-display text-xl font-bold text-ink">
            Résumé
          </h2>
          <p className="mt-2 flex-1 text-sm text-ink-muted">
            PDF download with experience and education.
          </p>
          <span className="mt-4 text-sm font-semibold text-accent">
            Download CV →
          </span>
        </a>
      </div>

      <p className="mt-10 text-center text-sm text-ink-muted">
        Want something built?{" "}
        <Link href="/contact" className="font-semibold text-accent hover:underline">
          Get in touch
        </Link>
        .
      </p>
    </div>
  );
}
