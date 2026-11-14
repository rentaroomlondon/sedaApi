import { partners } from "@/lib/content";

export default function PartnerStrip() {
  const marquee = [...partners, ...partners];

  return (
    <section className="border-y border-ink-100 bg-white py-6 sm:py-8">
      <p className="mb-5 text-center text-xs font-extrabold uppercase tracking-[.16em] text-ink-500">Built with technology from</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 sm:gap-16 hover:[animation-play-state:paused]">
          {marquee.map((p, i) => (
            <span key={i} aria-hidden={i >= partners.length} className="whitespace-nowrap font-display text-xl sm:text-2xl font-extrabold text-ink-300 transition hover:text-ink-900">{p.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
