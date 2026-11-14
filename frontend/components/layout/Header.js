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
        <span className="hidden sm:inline">Now taking new projects · </span>Free scope and quote for every request
        <Link href="/order" className="ml-1.5 whitespace-nowrap font-bold text-brand-600 hover:text-brand-700">Order a service →</Link>
      </div>
      <header className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-[border-color,box-shadow] ${
        scrolled ? "border-ink-100 shadow-[0_10px_30px_-22px_rgb(42_34_22/.35)]" : "border-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:h-[74px] sm:px-8">
          <Link href="/" className="group flex items-center gap-2.5 font-display text-xl font-extrabold tracking-[.08em] text-ink-900">
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
            className="ml-auto grid size-11 place-items-center rounded-xl border border-ink-100 bg-white lg:hidden">
            <span className="relative block h-0.5 w-5 bg-ink-900 transition before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-5 before:bg-ink-900 before:transition after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-5 after:bg-ink-900 after:transition"
              style={open ? { background: "transparent" } : undefined}>
              <span className="sr-only">Menu</span>
            </span>
          </button>
        </div>

        <div id="mobile-nav" className={`overflow-hidden border-t border-ink-100 bg-white transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[calc(100dvh-4rem)] overflow-y-auto" : "max-h-0 border-transparent"}`}>
          <nav aria-label="Mobile" className="grid gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-semibold text-ink-800 hover:bg-surface-2">
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/order" size="lg" arrow className="mt-2">Order a service</ButtonLink>
          </nav>
        </div>
      </header>
    </>
  );
}
