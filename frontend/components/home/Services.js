import Link from "next/link";
import Icon from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import { ButtonLink, Check, Container, SectionHead } from "@/components/shared/ui";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface py-16 sm:py-28">
      <Container>
        <Reveal><SectionHead eyebrow="Our services" title={<>Six services. <span className="text-gradient">One team.</span></>}
          text="Hire us for one service or for the whole product. The people who build your backend also tune your video pipeline, so nothing gets lost between vendors." /></Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}
              className="card-glow group relative flex flex-col overflow-hidden rounded-[28px] border border-ink-100 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_40px_70px_-35px_rgb(42_34_22/.45)]">
              {/* illustrated header band */}
              <div className="relative h-32 overflow-hidden rounded-t-[28px] bg-gradient-to-br from-brand-50 via-white to-aqua-300/25 p-6 sm:h-36 sm:p-7">
                <div className="dot-grid pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute -right-10 -top-14 size-48 rounded-full bg-aqua-400/15 blur-2xl transition duration-500 group-hover:bg-brand-500/20" />
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-5 right-5 font-display text-[6.5rem] font-extrabold leading-none text-brand-100 transition duration-500 group-hover:-translate-y-1 group-hover:text-brand-100/70">
                  0{i + 1}
                </span>
                <span className="relative grid size-16 place-items-center rounded-2xl bg-gradient-brand text-white shadow-[0_14px_30px_-12px_rgb(168_120_24/.6)] transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon name={s.icon} className="size-8" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6 pt-5 sm:p-7 sm:pt-6">
                <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">{s.title}</h3>
                <p className="text-ink-500">{s.short}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-[13px] font-semibold text-ink-700 ring-1 ring-ink-100">
                      <Check className="size-3.5 text-mint-500" />{p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                  <Link href={`/services#${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-500 transition hover:text-brand-600">
                    View details
                  </Link>
                  <ButtonLink href={`/order?service=${s.slug}`} size="sm" arrow>Order this</ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="relative mt-6 flex flex-col items-stretch justify-between gap-5 overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-surface-2 p-6 sm:flex-row sm:flex-wrap sm:items-center sm:p-8 sm:px-10">
          <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full bg-aqua-400/20 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-xl font-extrabold text-ink-900 sm:text-2xl">Need something that is not on this list?</h3>
            <p className="mt-1 text-ink-500">Tell us what you are building and we will say plainly whether we are the right team.</p>
          </div>
          <ButtonLink href="/order?service=other" arrow className="relative">Ask us</ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
