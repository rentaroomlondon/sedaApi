import Reveal from "@/components/shared/Reveal";
import { ButtonLink, Container, SectionHead } from "@/components/shared/ui";
import { orderSteps } from "@/lib/content";

export default function HowToOrder() {
  return (
    <section id="how" className="py-16 sm:py-28">
      <Container>
        <Reveal><SectionHead eyebrow="How to order" title={<>From idea to a <span className="text-gradient">running system</span> in four steps.</>}
          text="No long contracts up front. You see a written scope and price before anything starts." /></Reveal>
        <Reveal className="relative grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-9 hidden h-[3px] overflow-hidden rounded-full bg-ink-100 lg:block">
            <div className="line-fill h-full bg-gradient-brand" />
          </div>
          {orderSteps.map((s, i) => (
            <div key={s.title} className="relative grid justify-items-center gap-3 text-center">
              <span className="relative z-10 grid size-16 place-items-center sm:size-[72px] rounded-full bg-gradient-brand font-display text-2xl font-extrabold text-white shadow-[0_14px_30px_-12px_rgb(168_120_24/.6)] ring-8 ring-white">{i + 1}</span>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="max-w-[30ch] text-ink-500">{s.text}</p>
              {s.badge && <span className="rounded-full bg-mint-500/12 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-mint-500">{s.badge}</span>}
            </div>
          ))}
        </Reveal>
        <div className="mt-10 text-center sm:mt-14"><ButtonLink href="/order" size="lg" arrow>Start step 1 now</ButtonLink></div>
      </Container>
    </section>
  );
}
