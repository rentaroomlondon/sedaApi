import Reveal from "@/components/shared/Reveal";
import { ButtonLink, Check, Container, SectionHead } from "@/components/shared/ui";
import { models } from "@/lib/content";

export default function WorkModels() {
  return (
    <section id="models" className="bg-surface py-16 sm:py-28">
      <Container>
        <Reveal><SectionHead eyebrow="Ways to work with us" title="Choose how you want to work."
          text="Every option starts with a free scope. Final prices depend on the project and are confirmed in writing." /></Reveal>
        <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {models.map((m, i) => (
            <Reveal key={m.title} delay={i * 90}
              className={`relative flex flex-col gap-5 rounded-3xl border p-6 sm:p-8 transition duration-300 hover:-translate-y-1.5 ${
                m.popular ? "border-2 border-brand-600 bg-brand-50 text-ink-900 shadow-[0_30px_60px_-35px_rgb(31_111_191/.45)] lg:scale-[1.04]" : "border-ink-100 bg-white hover:shadow-[0_30px_60px_-35px_rgb(19_34_58/.4)]"}`}>
              {m.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-brand px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white">Most popular</span>}
              <div>
                <h3 className="font-display text-2xl font-extrabold">{m.title}</h3>
                <p className={`mt-1 ${"text-ink-500"}`}>{m.best}</p>
              </div>
              <p className="font-display text-3xl font-extrabold">{m.price} <span className={`font-sans text-sm font-semibold ${"text-ink-500"}`}>/ {m.unit}</span></p>
              <ul className="grid gap-3">
                {m.points.map((p) => <li key={p} className="flex gap-2.5 font-medium"><Check className={`mt-0.5 size-[18px] ${m.popular ? "text-brand-600" : "text-mint-500"}`} />{p}</li>)}
              </ul>
              <ButtonLink href={`/order?model=${encodeURIComponent(m.title)}`} variant={m.popular ? "primary" : "outline"} arrow={m.popular} className="mt-auto">{m.cta}</ButtonLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
