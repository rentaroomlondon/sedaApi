import Reveal from "@/components/shared/Reveal";
import { Container, SectionHead } from "@/components/shared/ui";
import { why } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-28">
      <div className="pointer-events-none absolute -left-40 -top-40 size-[36rem] rounded-full bg-brand-600/[.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 size-[34rem] rounded-full bg-aqua-400/15 blur-3xl" />
      <Container className="relative">
        <Reveal><SectionHead eyebrow="Why SEDAAPI" title="Most products fail in the gaps between teams."
          text="We keep the app, the video and the signal under one roof, so the whole system works the day it ships." /></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 90} className="rounded-3xl border border-ink-100 bg-white p-6 transition sm:p-8 hover:-translate-y-1 hover:border-brand-100 hover:shadow-[0_30px_60px_-35px_rgb(168_120_24/.35)]">
              <span className="text-gradient font-display text-4xl font-extrabold sm:text-5xl">{w.big}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{w.title}</h3>
              <p className="mt-2 text-ink-500">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
