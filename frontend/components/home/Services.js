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
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-[0_30px_60px_-30px_rgb(19_34_58/.28)] sm:p-8">
              {/* accent line that grows on hover */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-aqua-400 transition-transform duration-500 group-hover:scale-x-100" />

              <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                <Icon name={s.icon} className="size-7" />
              </span>

              <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-ink-900 sm:text-[22px]">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-500">{s.short}</p>

              <ul className="mt-5 grid gap-2.5 border-t border-ink-100 pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] font-medium text-ink-700">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Check className="size-3 text-brand-600" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between gap-3 pt-7">
                <Link href={`/services#${s.slug}`} className="text-sm font-bold text-ink-500 underline-offset-4 transition hover:text-brand-600 hover:underline">
                  View details
                </Link>
                <Link href={`/order?service=${s.slug}`}
                  className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-brand-50 px-4 py-2.5 text-sm font-bold text-brand-700 ring-1 ring-brand-100 transition hover:bg-brand-600 hover:text-white hover:ring-brand-600">
                  Order this
                  <Icon name="arrow" className="size-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
                </Link>
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
