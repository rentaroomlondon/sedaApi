import Icon from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import { ButtonLink, Check, Container } from "@/components/shared/ui";
import { services } from "@/lib/content";

export default function ServiceList() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-8">
        {services.map((s, i) => (
          <Reveal key={s.slug} as="article" id={s.slug}
            className="card-glow scroll-mt-28 grid gap-8 rounded-[28px] border border-ink-100 bg-white p-5 sm:gap-10 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="grid content-start gap-5">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl sm:size-16 bg-gradient-brand text-white shadow-[0_14px_30px_-12px_rgb(31_111_191/.6)]">
                  <Icon name={s.icon} className="size-8" />
                </span>
                <span className="font-display text-sm font-extrabold uppercase tracking-widest text-ink-300">Service 0{i + 1}</span>
              </div>
              <h2 className="font-display text-[1.75rem] font-extrabold leading-tight tracking-tight sm:text-4xl">{s.title}</h2>
              <p className="text-base text-ink-500 sm:text-lg">{s.short}</p>
              <p className="rounded-2xl bg-surface px-4 py-3.5 text-ink-700 sm:px-5 sm:py-4"><b className="text-ink-900">Ideal for:</b> {s.ideal}</p>
              <div className="grid gap-3 sm:flex sm:flex-wrap">
                <ButtonLink href={`/order?service=${s.slug}`} arrow>Order {s.title.toLowerCase()}</ButtonLink>
              </div>
            </div>
            <div className="grid content-start gap-6">
              <div>
                <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[.14em] text-ink-500">What we do</h3>
                <ul className="grid gap-3">
                  {s.points.map((p) => <li key={p} className="flex gap-3 font-semibold"><Check className="mt-0.5 size-5 text-mint-500" />{p}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[.14em] text-ink-500">What you receive</h3>
                <ul className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="rounded-xl border border-brand-100 bg-brand-50 px-3.5 py-3 text-sm font-bold text-brand-700">{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
