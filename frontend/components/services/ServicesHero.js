import Icon from "@/components/shared/Icons";
import { Container, Eyebrow } from "@/components/shared/ui";
import { services } from "@/lib/content";

export default function ServicesHero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid justify-items-center gap-5 py-14 text-center sm:py-24">
        <span className="rise"><Eyebrow>Our services</Eyebrow></span>
        <h1 className="rise max-w-4xl font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl" style={{ animationDelay: ".08s" }}>
          Everything you need to build, <span className="text-gradient">from one team.</span>
        </h1>
        <p className="rise max-w-2xl text-base text-ink-500 sm:text-xl" style={{ animationDelay: ".16s" }}>
          Pick one service or combine several. Every order starts with a free written scope and quote.
        </p>
        <nav aria-label="Jump to service" className="rise mt-4 flex flex-wrap justify-center gap-2" style={{ animationDelay: ".24s" }}>
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3.5 py-2 text-[13px] font-bold text-ink-700 sm:px-4 sm:text-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600">
              <Icon name={s.icon} className="size-4" /> {s.title}
            </a>
          ))}
        </nav>
      </Container>
    </section>
  );
}
