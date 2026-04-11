import React from "react";

const accentBars = [
  "from-violet-500 to-indigo-600",
  "from-indigo-500 to-sky-500",
  "from-emerald-500 to-teal-600",
];

export default function Work({
  company,
  position,
  period,
  description,
  highlights = [],
  skills = [],
  accentIndex = 0,
}) {
  const bar = accentBars[accentIndex % accentBars.length];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-surface-elevated shadow-soft transition-shadow duration-300 hover:shadow-card">
      <div className={`h-1.5 bg-gradient-to-r ${bar}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-5">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
              {company}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent sm:text-base">
              {position}
            </p>
          </div>
          <time className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            {period}
          </time>
        </div>

        <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-muted sm:text-base">
          {description}
        </p>

        {highlights?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-ink-muted sm:text-base">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {skills?.length ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-ink sm:text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
