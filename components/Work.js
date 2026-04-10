import React from "react";
import { motion } from "framer-motion";

export default function Work({
  company,
  position,
  period,
  description,
  highlights = [],
  skills = [],
  imageUrl,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 bg-slate-900">
      <div className="relative aspect-[16/9]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="max-w-[92%]">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
              {company}
            </h3>
            <p className="text-base sm:text-lg text-slate-100/90 mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
              {position}
            </p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-100/90">{period}</p>
          </div>
        </div>
      </div>

      <div className="p-5 text-slate-100">
        <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        {highlights?.length ? (
          <ul className="mt-4 space-y-2 text-slate-200 text-sm sm:text-base list-disc pl-5">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {skills?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-100 ring-1 ring-white/10"
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
