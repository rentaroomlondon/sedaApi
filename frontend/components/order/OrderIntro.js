import Icon from "@/components/shared/Icons";
import { Check, Eyebrow } from "@/components/shared/ui";
import { company } from "@/lib/content";

const contacts = [
  { icon: "mail", label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: "globe", label: "Website", value: company.websiteLabel, href: company.website },
  { icon: "pin", label: "Office", value: company.city },
];

export default function OrderIntro() {
  return (
    <div className="lg:sticky lg:top-28">
      <span className="rise"><Eyebrow>Order a service</Eyebrow></span>
      <h1 className="rise mt-5 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl" style={{ animationDelay: ".08s" }}>
        Tell us what you want to <span className="text-gradient">build.</span>
      </h1>
      <p className="rise mt-5 max-w-lg text-base text-ink-500 sm:text-lg" style={{ animationDelay: ".16s" }}>
        Send the form and we will reply with a time for a technical call. Your scope and quote are free.
      </p>

      <ul className="rise mt-8 grid gap-3" style={{ animationDelay: ".24s" }}>
        {contacts.map((c) => {
          const inner = (
            <>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><Icon name={c.icon} className="size-5" /></span>
              <span className="min-w-0"><span className="block text-xs font-semibold text-ink-500">{c.label}</span><span className="break-all font-bold">{c.value}</span></span>
            </>
          );
          const cls = "flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition hover:translate-x-1 hover:border-brand-400";
          return <li key={c.label}>{c.href ? <a href={c.href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>}</li>;
        })}
      </ul>

      <ul className="rise mt-8 grid gap-2.5 font-semibold text-ink-700" style={{ animationDelay: ".32s" }}>
        {["A reply from an engineer, not a sales script", "A written scope before any commitment", "A plain answer if we are not the right team"].map((t) => (
          <li key={t} className="flex gap-2.5"><Check className="mt-0.5 size-5 text-mint-500" />{t}</li>
        ))}
      </ul>
    </div>
  );
}
