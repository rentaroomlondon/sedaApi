"use client";

import { useState } from "react";
import { partners } from "@/lib/content";

const filters = [
  { id: "all", label: "All" },
  { id: "compute", label: "AI and compute" },
  { id: "cloud", label: "Cloud" },
  { id: "models", label: "AI models" },
];

export default function PartnerGrid() {
  const [active, setActive] = useState("all");
  const shown = partners.filter((p) => active === "all" || p.cat === active);

  return (
    <div>
      <div role="group" aria-label="Filter partners" className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
        {filters.map((f) => (
          <button key={f.id} type="button" aria-pressed={active === f.id} onClick={() => setActive(f.id)}
            className={`shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-4 py-2.5 text-sm font-bold transition sm:px-5 ${
              active === f.id ? "border-brand-600 bg-brand-600 text-white" : "border-ink-100 bg-white text-ink-700 hover:border-brand-600 hover:text-brand-700"}`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <article key={`${active}-${p.name}`} style={{ animation: `rise .5s ${i * 50}ms cubic-bezier(.2,.7,.2,1) both` }}
            className={`relative grid content-start gap-3 rounded-3xl border p-5 transition sm:p-6 duration-300 hover:-translate-y-1 ${
              p.featured && active === "all"
                ? "overflow-hidden border-brand-100 bg-gradient-to-br from-brand-50 via-white to-surface-2 sm:col-span-2"
                : "border-ink-100 bg-white hover:shadow-[0_20px_50px_-28px_rgb(19_34_58/.25)]"}`}>
            {p.featured && active === "all" && (
              <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-aqua-400/20 blur-3xl" />
            )}
            <div className="relative flex items-start justify-between gap-3">
              <span className={`text-xs font-extrabold uppercase tracking-[.12em] ${p.featured && active === "all" ? "text-brand-600" : "text-ink-500"}`}>{p.catLabel}</span>
              <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${
                p.status === "partner" ? "bg-mint-500/15 text-mint-500" : "bg-surface-2 text-ink-700"}`}>
                {p.status === "partner" ? "Partner" : "We build on"}
              </span>
            </div>
            <h3 className={`relative font-display font-extrabold tracking-tight ${p.featured && active === "all" ? "text-3xl text-ink-900 sm:text-4xl" : "text-2xl text-ink-900"}`}>
              {p.name}
            </h3>
            <p className={`relative ${p.featured && active === "all" ? "max-w-xl text-ink-700" : "text-ink-500"}`}>{p.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
