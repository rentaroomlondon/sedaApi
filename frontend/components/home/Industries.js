import Icon from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import { Container, SectionHead } from "@/components/shared/ui";
import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-28">
      <Container>
        <Reveal><SectionHead eyebrow="Industries" title="Where our services make the biggest difference."
          text="The same six services, applied to the problems each industry actually has." /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 80}
              className="group grid content-start gap-3 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-aqua-300/15 p-6 sm:p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-35px_rgb(31_111_191/.45)]">
              <span className="grid size-14 place-items-center rounded-2xl bg-white text-brand-600 shadow-[0_10px_24px_-12px_rgb(31_111_191/.5)] transition group-hover:scale-110">
                <Icon name={ind.icon} className="size-7" />
              </span>
              <h3 className="font-display text-xl font-extrabold">{ind.title}</h3>
              <p className="text-ink-500">{ind.text}</p>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {ind.tags.map((t) => <li key={t} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-700 ring-1 ring-ink-100">{t}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
