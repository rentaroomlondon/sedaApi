import Link from "next/link";
import Icon from "./Icons";

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[.12em] text-brand-600">
      <span className="size-1.5 rounded-full bg-brand-600" />
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 grid max-w-3xl justify-items-center gap-4 text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-ink-900 text-balance sm:text-5xl sm:leading-[1.05]">
        {title}
      </h2>
      {text && <p className="max-w-[62ch] text-base text-ink-500 sm:text-lg">{text}</p>}
    </div>
  );
}

const variants = {
  primary: "btn-shine bg-gradient-brand text-white shadow-[0_14px_34px_-12px_rgb(31_111_191/.55)] hover:shadow-[0_18px_40px_-12px_rgb(31_111_191/.65)]",
  dark: "bg-brand-600 text-white shadow-[0_14px_30px_-14px_rgb(31_111_191/.55)] hover:bg-brand-700",
  outline: "border-[1.5px] border-ink-100 bg-white text-ink-900 hover:border-brand-600 hover:text-brand-700",
};
const sizes = { sm: "px-4 py-2.5 text-sm rounded-xl", md: "px-6 py-3.5 text-[15px] rounded-xl", lg: "px-6 py-3.5 text-base rounded-2xl sm:px-7 sm:py-4" };

export function ButtonLink({ href, variant = "primary", size = "md", arrow = false, className = "", children, ...rest }) {
  return (
    <Link href={href} {...rest}
      className={`group inline-flex items-center justify-center gap-2 text-center font-bold sm:whitespace-nowrap transition duration-200 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {arrow && <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />}
    </Link>
  );
}

export function Check({ className = "size-[18px] text-mint-500" }) {
  return <Icon name="check" className={`shrink-0 ${className}`} strokeWidth={2.6} />;
}

export function CtaBand() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-surface-2 px-5 py-10 text-center sm:px-14 sm:py-14">
          <div className="pointer-events-none absolute -left-24 -top-32 size-96 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 size-[28rem] rounded-full bg-aqua-400/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-2xl justify-items-center gap-5">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-5xl">
              Ready to start your <span className="text-gradient">project?</span>
            </h2>
            <p className="text-base text-ink-500 sm:text-lg">Tell us what you need. Your scope and quote are free, with no obligation.</p>
            <div className="mt-2 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <ButtonLink href="/order" size="lg" arrow>Order a service</ButtonLink>
              <ButtonLink href="/services" size="lg" variant="outline">See all services</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
