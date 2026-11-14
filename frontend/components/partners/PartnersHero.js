import { Container, Eyebrow } from "@/components/shared/ui";

export default function PartnersHero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid justify-items-center gap-5 py-14 text-center sm:py-24">
        <span className="rise"><Eyebrow>Partners and technology</Eyebrow></span>
        <h1 className="rise max-w-4xl font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl" style={{ animationDelay: ".08s" }}>
          Built with the platforms <span className="text-gradient">the world runs on.</span>
        </h1>
        <p className="rise max-w-2xl text-base text-ink-500 sm:text-xl" style={{ animationDelay: ".16s" }}>
          We work with leading AI, compute and cloud providers, so your product stands on proven technology and we can pick the right tool for each job.
        </p>
      </Container>
    </section>
  );
}
