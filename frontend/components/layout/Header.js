"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/Icons";
import { ButtonLink } from "@/components/shared/ui";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="border-b border-ink-100 bg-surface-2 px-4 py-2 text-center text-xs text-ink-700 sm:py-2.5 sm:text-sm">
        <span className="hidden sm:inline">Now taking new projects · Free scope and quote for every request</span>
        <span className="sm:hidden">Free quote on every project</span>
        <Link href="/order" className="ml-1.5 hidden whitespace-nowrap font-bold text-brand-600 hover:text-brand-700 sm:inline">
          Order a service →
        </Link>
      </div>
      <header className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-[border-color,box-shadow] ${
        scrolled ? "border-ink-100 shadow-[0_10px_30px_-22px_rgb(19_34_58/.35)]" : "border-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[74px] sm:gap-6 sm:px-8">
          <Link href="/" className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-[.08em] text-ink-900 sm:gap-2.5 sm:text-xl">
            <span className="transition-transform duration-500 group-hover:-rotate-12"><Logo /></span>
            SEDAAPI
          </Link>

          <nav aria-label="Main" className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = item.href === pathname;
              return (
                <Link key={item.href} href={item.href}
                  className={`rounded-xl px-3.5 py-2 text-[15px] font-semibold transition ${
                    active ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-surface-2 hover:text-ink-900"}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ButtonLink href="/order" size="sm" arrow className="hidden lg:inline-flex">Order a service</ButtonLink>

          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative ml-auto size-10 shrink-0 rounded-full transition-colors duration-300 lg:hidden ${
              open ? "bg-ink-900" : "bg-surface-2 hover:bg-ink-100"}`}>
            <span aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                open ? "w-[18px] -translate-y-1/2 rotate-45 bg-white" : "w-[18px] -translate-y-[4px] bg-ink-900"}`} />
            <span aria-hidden="true"
              className={`absolute top-1/2 h-[2px] rounded-full transition-all duration-300 ${
                open ? "left-1/2 w-[18px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" : "left-[11px] w-[11px] translate-y-[3px] bg-ink-900"}`} />
          </button>
        </div>

        <div id="mobile-nav" className={`overflow-hidden border-t border-ink-100 bg-white transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[calc(100dvh-4rem)] overflow-y-auto" : "max-h-0 border-transparent"}`}>
          <nav aria-label="Mobile" className="grid gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-base font-semibold hover:bg-surface-2 ${
                  item.href === pathname ? "bg-brand-50 text-brand-700" : "text-ink-800"}`}>
                {item.short ?? item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
