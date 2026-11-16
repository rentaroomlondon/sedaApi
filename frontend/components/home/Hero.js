import Icon from "@/components/shared/Icons";
import { ButtonLink, Check, Container } from "@/components/shared/ui";

function HeroVisual() {
  return (
    <div className="rise relative mx-auto aspect-square w-full max-w-[540px]" style={{ animationDelay: ".25s" }} aria-hidden="true">
      <div className="absolute inset-[10%] rounded-full bg-gradient-brand opacity-25 blur-3xl" />
      <div className="absolute inset-[4%] animate-spin-slow rounded-full border-[1.5px] border-dashed border-brand-400/40" />
      <div className="absolute inset-[16%] animate-spin-slow rounded-full border border-aqua-400/40 [animation-direction:reverse]" />

      {/* main project card */}
      <div className="absolute inset-x-[4%] top-[22%] rounded-3xl border border-white bg-white/95 p-4 sm:inset-x-[12%] sm:top-[20%] sm:p-6 shadow-[0_40px_80px_-30px_rgb(19_34_58/.45)] backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-500">Your project</p>
            <p className="font-display text-lg font-extrabold leading-tight sm:text-xl">AI document assistant</p>
          </div>
          <span className="shrink-0 rounded-full bg-mint-500/12 px-2.5 py-1 text-xs font-extrabold text-mint-500 sm:px-3">On track</span>
        </div>
        <ul className="mt-4 grid gap-2.5 text-[13px] font-semibold sm:mt-5 sm:gap-3 sm:text-sm">
          {[["Scope and quote", "done"], ["Build", "now"], ["Deploy and handover", "next"]].map(([t, s]) => (
            <li key={t} className="flex items-center gap-3">
              <span className={`grid size-7 place-items-center rounded-full ${s === "done" ? "bg-mint-500 text-white" : s === "now" ? "animate-pulse-ring bg-aqua-400 text-white" : "bg-surface-2 text-ink-300"}`}>
                {s === "done" ? <Icon name="check" className="size-4" strokeWidth={3} /> : <span className="size-2 rounded-full bg-current" />}
              </span>
              <span className={s === "next" ? "text-ink-300" : "text-ink-800"}>{t}</span>
              {s === "now" && (
                <span className="ml-auto h-2 w-14 shrink-0 overflow-hidden sm:w-24 rounded-full bg-surface-2">
                  <span className="block h-full w-2/3 rounded-full bg-gradient-brand" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* floating chips */}
      <div className="absolute left-0 top-[2%] flex animate-float items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-4 sm:top-[6%] sm:gap-3 sm:p-3.5 sm:pr-5 shadow-[0_24px_50px_-20px_rgb(19_34_58/.35)]">
        <span className="grid size-8 place-items-center rounded-xl bg-brand-600 sm:size-10 text-white"><Icon name="chip" className="size-5" /></span>
        <div><p className="font-display text-sm font-bold leading-tight sm:text-base">AI automation</p><p className="text-xs text-ink-500">Reports drafted for you</p></div>
      </div>
      <div className="absolute bottom-[14%] right-0 flex animate-float items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-4 sm:bottom-[16%] sm:gap-3 sm:p-3.5 sm:pr-5 shadow-[0_24px_50px_-20px_rgb(19_34_58/.35)] [animation-delay:-2s]">
        <span className="grid size-8 place-items-center rounded-xl bg-aqua-500 sm:size-10 text-white"><Icon name="video" className="size-5" /></span>
        <div><p className="font-display text-sm font-bold leading-tight sm:text-base">Video platform</p><p className="text-xs text-ink-500">Every camera, one screen</p></div>
      </div>
      <div className="absolute bottom-[2%] left-[4%] flex animate-float items-center gap-2 rounded-full bg-brand-600 px-3.5 py-2 text-xs sm:bottom-[4%] sm:left-[8%] sm:px-4 sm:py-2.5 sm:text-sm font-bold text-white shadow-xl [animation-delay:-4s]">
        <Icon name="spark" className="size-4 text-aqua-300" /> Free scope and quote
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-10 py-12 sm:gap-12 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <span className="rise inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.1em] sm:px-3.5 sm:text-xs sm:tracking-[.12em] text-brand-600 shadow-sm">
            <span className="size-1.5 animate-pulse-ring rounded-full bg-aqua-400" /> AI · Video · Software engineering
          </span>
          <h1 className="rise mt-5 font-display text-[2.5rem] font-extrabold leading-[1.05] sm:mt-6 sm:leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl" style={{ animationDelay: ".08s" }}>
            We build the <span className="text-gradient">AI and software</span> your business needs.
          </h1>
          <p className="rise mt-5 max-w-xl text-base text-ink-500 sm:mt-6 sm:text-xl" style={{ animationDelay: ".18s" }}>
            One engineering team for apps, video platforms, signal processing and AI. Choose one service or the whole product, and get a free written scope and quote.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap" style={{ animationDelay: ".28s" }}>
            <ButtonLink href="/order" size="lg" arrow>Order a service</ButtonLink>
            <ButtonLink href="/services" size="lg" variant="outline">Browse services</ButtonLink>
          </div>
          <ul className="rise mt-7 grid gap-x-6 gap-y-2 text-[15px] sm:mt-8 sm:flex sm:flex-wrap font-semibold text-ink-700" style={{ animationDelay: ".38s" }}>
            {["Free scope and quote", "You own the code", "Data hosted where you choose"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check />{t}</li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
