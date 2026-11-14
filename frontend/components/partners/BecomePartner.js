import Icon from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import { ButtonLink, Container, SectionHead } from "@/components/shared/ui";
import { partnerTypes } from "@/lib/content";

export default function BecomePartner() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-aqua-400/15 blur-3xl" />
      <Container className="relative">
        <Reveal><SectionHead eyebrow="Become a partner" title="Grow with SEDAAPI."
          text="We welcome partners who share our focus on reliable AI, video and software for the region." /></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {partnerTypes.map((t, i) => (
            <Reveal key={t.title} delay={i * 90} className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name="handshake" /></span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{t.title}</h3>
              <p className="mt-2 text-ink-500">{t.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12"><ButtonLink href="/order?type=partner" size="lg" arrow>Apply to partner</ButtonLink></div>
      </Container>
    </section>
  );
}
