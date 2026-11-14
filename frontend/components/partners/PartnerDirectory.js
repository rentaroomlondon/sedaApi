import Icon from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import PartnerGrid from "@/components/partners/PartnerGrid";
import { Container } from "@/components/shared/ui";
import { partnerBenefits } from "@/lib/content";

export default function PartnerDirectory() {
  return (
    <section className="pb-16 pt-4 sm:pb-24">
      <Container>
        <PartnerGrid />
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {partnerBenefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 90} className="rounded-3xl border border-ink-100 bg-surface p-6 sm:p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-white text-brand-600 shadow-sm"><Icon name={b.icon} /></span>
              <h3 className="mt-4 font-display text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-ink-500">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
