import React, { useEffect, useId, useState } from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const mobileMenuId = useId();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY >= 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
          isSticky
            ? "border-b border-slate-200/80 bg-white/80 shadow-soft backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 lg:h-[4.5rem]">
          <Link href="/" passHref>
            <a className="font-display text-xl font-bold tracking-tight text-ink transition-colors hover:text-accent sm:text-2xl">
              GO<span className="text-accent">.</span>
            </a>
          </Link>

          <div
            className={`hidden items-center gap-8 text-sm text-ink-muted lg:flex ${
              isSticky ? "opacity-100" : "opacity-100"
            }`}
          >
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-wider text-ink-subtle">
                Location
              </span>
              <a
                href="https://www.google.com/maps/@34.9753931,33.6807325,8.92z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent"
              >
                Limassol, Cyprus
                <GoLocation className="text-accent" aria-hidden />
              </a>
            </div>
            <div className="h-8 w-px bg-slate-200" aria-hidden />
            <div className="max-w-[14rem] leading-tight">
              <span className="text-xs font-medium uppercase tracking-wider text-ink-subtle">
                Now
              </span>
              <p className="font-medium text-ink">Software Engineer at Amdocs</p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-slate-100 hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-slate-100 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        id={mobileMenuId}
        className={`fixed inset-0 z-40 lg:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-card transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <p className="font-display text-lg font-bold text-ink">Menu</p>
              <p className="text-xs text-ink-muted">George Onisiforou</p>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted hover:bg-slate-50 hover:text-ink"
              aria-label="Close menu"
            >
              <IoClose className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile main">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-slate-50"
            >
              Home
            </Link>
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-slate-100 p-5 text-sm text-ink-muted">
            <p>Limassol, Cyprus</p>
            <p className="mt-1">Amdocs — Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
