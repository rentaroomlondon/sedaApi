import Reveal from "@/components/shared/Reveal";
import { ButtonLink, Container, SectionHead } from "@/components/shared/ui";
import { partners } from "@/lib/content";

export default function PartnersPreview() {
  return (
    <section className="bg-surface py-16 sm:py-28">
      <Container>
        <Reveal><SectionHead eyebrow="Partners and technology" title={<>Built with the platforms <span className="text-gradient">the world runs on.</span></>}
          text="We work with leading AI, compute and cloud providers, so your product stands on proven technology." /></Reveal>
        <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {partners.map((p) => (
            <div key={p.name} className="grid place-items-center gap-1 rounded-2xl border border-ink-100 bg-white px-3 py-5 text-center sm:px-4 sm:py-7 transition hover:-translate-y-1 hover:border-brand-400">
              <span className="font-display text-base font-extrabold leading-tight text-ink-900 sm:text-xl">{p.name}</span>
              <span className={`text-[11px] font-extrabold uppercase tracking-wider ${p.status === "partner" ? "text-mint-500" : "text-ink-500"}`}>
                {p.status === "partner" ? "Partner" : p.catLabel}
              </span>
            </div>
          ))}
        </Reveal>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/partners" variant="outline">View all partners</ButtonLink>
          <ButtonLink href="/order?type=partner" variant="dark" arrow>Become a partner</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
