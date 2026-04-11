import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsSpotify } from "react-icons/bs";
import { SiTinder } from "react-icons/si";

const social = [
  {
    href: "https://github.com/georgeonisiforou?tab=repositories",
    label: "GitHub",
    Icon: BsGithub,
    hover: "hover:text-[#4c00a7]",
  },
  {
    href: "https://www.linkedin.com/in/george-onisiforou-mics-7b164051/",
    label: "LinkedIn",
    Icon: BsLinkedin,
    hover: "hover:text-[#0c60b8]",
  },
  {
    href: "https://www.instagram.com/georgeonis/",
    label: "Instagram",
    Icon: BsInstagram,
    hover: "hover:text-[#f0028f]",
  },
  {
    href: "https://open.spotify.com/user/onisifg0?si=67e08bd310fe4040",
    label: "Spotify",
    Icon: BsSpotify,
    hover: "hover:text-[#1ccc5a]",
  },
  {
    href: "https://giphy.com/gifs/stoner-sees-isopropyl-xSM46ernAUN3y/fullscreen",
    label: "Tinder (joke)",
    Icon: SiTinder,
    hover: "hover:text-[#fd4857]",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-surface-elevated">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold text-ink">George Onisiforou</p>
          <p className="mt-1 text-sm text-ink-muted">Software developer</p>
        </div>

        <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
          {social.map(({ href, label, Icon, hover }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xl text-ink-muted transition-all hover:-translate-y-0.5 hover:shadow-soft ${hover}`}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-ink-muted sm:text-right">
          © {year} George Onisiforou
          <span className="mt-1 block text-xs text-ink-subtle">
            Designed &amp; built by me
          </span>
        </p>
      </div>
    </footer>
  );
}
