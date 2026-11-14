"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/shared/Icons";
import { company, formOptions, services } from "@/lib/content";

const stepLabels = {
  project: ["Choose your service", "Your project", "Your details"],
  partner: ["What you offer", "About the partnership", "Your details"],
};

const empty = {
  kind: "project", services: [], model: formOptions.models[0], budget: formOptions.budgets[0],
  timeline: formOptions.timelines[0], industry: formOptions.industries[0], message: "", link: "",
  name: "", company: "", email: "", phone: "", country: formOptions.countries[0], website: "",
};

const field = "w-full min-w-0 rounded-xl border-[1.5px] border-transparent bg-surface px-4 py-3 font-medium text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15";
const label = "grid gap-2 text-sm font-bold text-ink-700";

export default function OrderForm() {
  const [data, setData] = useState(empty);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | fallback

  // Pre-fill from links such as /order?service=video or /order?type=partner
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const next = {};
    const svc = services.find((s) => s.slug === q.get("service"));
    if (svc) next.services = [svc.title];
    if (q.get("service") === "other") next.services = ["Something else"];
    if (q.get("model") && formOptions.models.includes(q.get("model"))) next.model = q.get("model");
    if (q.get("type") === "partner") next.kind = "partner";
    if (Object.keys(next).length) setData((d) => ({ ...d, ...next }));
  }, []);

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const toggle = (s) => setData((d) => ({ ...d, services: d.services.includes(s) ? d.services.filter((x) => x !== s) : [...d.services, s] }));

  function summary() {
    return [
      data.kind === "partner" ? "SEDAAPI partner request" : "SEDAAPI service order", "",
      `Services: ${data.services.join(", ")}`, `Way to work: ${data.model}`, `Budget: ${data.budget}`,
      `Start: ${data.timeline}`, `Industry: ${data.industry}`, `Brief link: ${data.link || "-"}`, "",
      `Name: ${data.name}`, `Company: ${data.company || "-"}`, `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`, `Country: ${data.country}`, "", "Project:", data.message,
    ].join("\n");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (step === 1) {
      if (!data.services.length) return setError("Please choose at least one option.");
      return setStep(2);
    }
    if (step === 2) {
      if (data.message.trim().length < 10) return setError("Please tell us a little more about your project.");
      return setStep(3);
    }
    if (!data.name.trim()) return setError("Please add your name.");
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return setError("Please add a valid work email.");

    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "fallback");
    } catch {
      setStatus("fallback");
    }
  }

  if (status === "sent" || status === "fallback") {
    const sent = status === "sent";
    return (
      <div className="grid justify-items-center gap-4 py-6 text-center" style={{ animation: "rise .5s both" }}>
        <div className="grid size-20 place-items-center rounded-full bg-mint-500/12">
          <svg viewBox="0 0 24 24" className="tick size-10 text-mint-500" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3 className="font-display text-2xl font-extrabold">{sent ? "Thank you, your request is in" : "Your request is ready"}</h3>
        <p className="max-w-md text-ink-500">
          {sent
            ? "Our team will reply to your email with a time for your technical call."
            : <>We could not send it automatically. Please copy it and email it to <b className="text-ink-900">{company.email}</b>.</>}
        </p>
        {!sent && (
          <>
            <pre className="max-h-64 w-full overflow-auto whitespace-pre-wrap rounded-xl bg-surface p-4 text-left text-xs">{summary()}</pre>
            <div className="flex flex-wrap justify-center gap-2">
              <button type="button" onClick={() => navigator.clipboard?.writeText(summary())}
                className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-700">Copy request</button>
              <a href={`mailto:${company.email}?subject=${encodeURIComponent("SEDAAPI service order")}&body=${encodeURIComponent(summary())}`}
                className="rounded-xl border-[1.5px] border-ink-100 px-5 py-2.5 text-sm font-bold">Open email</a>
            </div>
          </>
        )}
        <button type="button" onClick={() => { setStatus("idle"); setStep(1); setData(empty); }}
          className="text-sm font-bold text-brand-600 hover:underline">Send another request</button>
      </div>
    );
  }

  const labels = stepLabels[data.kind];
  return (
    <div>
      <div role="group" aria-label="Type of request" className="mb-6 grid grid-cols-2 gap-2.5">
        {[["project", "Order a service", "Build something with us"], ["partner", "Become a partner", "Vendors and integrators"]].map(([k, t, s]) => (
          <button key={k} type="button" aria-pressed={data.kind === k} onClick={() => setData((d) => ({ ...d, kind: k }))}
            className={`grid gap-0.5 rounded-2xl border-[1.5px] px-3 py-3 text-left sm:px-4 sm:py-3.5 transition ${
              data.kind === k ? "border-brand-500 bg-brand-50 ring-4 ring-brand-500/12" : "border-ink-100 bg-white hover:border-ink-300"}`}>
            <b className="text-sm text-ink-900 sm:text-[15px]">{t}</b>
            <span className="text-xs text-ink-500">{s}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-2" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span key={n} className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
            <span className="absolute inset-0 origin-left bg-gradient-brand transition-transform duration-500" style={{ transform: `scaleX(${n <= step ? 1 : 0})` }} />
          </span>
        ))}
      </div>
      <p className="mb-5 mt-3 text-sm font-bold text-ink-500">Step {step} of 3 · {labels[step - 1]}</p>

      <form onSubmit={onSubmit} noValidate className="grid gap-4">
        {/* honeypot for spam bots */}
        <input type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={set("website")} className="hidden" aria-hidden="true" />

        {step === 1 && (
          <div key="s1" className="grid gap-4" style={{ animation: "slide-in .4s both" }}>
            <fieldset className="grid gap-2.5">
              <legend className="mb-2.5 text-sm font-bold text-ink-700">
                {data.kind === "partner" ? "Which areas does your offering fit?" : "Which services do you need?"} <span className="font-medium text-ink-500">(choose one or more)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {formOptions.services.map((s) => {
                  const on = data.services.includes(s);
                  return (
                    <button key={s} type="button" aria-pressed={on} onClick={() => toggle(s)}
                      className={`inline-flex items-center gap-1.5 rounded-full border-[1.5px] px-3.5 py-2 text-[13px] font-bold transition sm:px-4 sm:py-2.5 sm:text-sm ${
                        on ? "scale-[1.03] border-brand-600 bg-brand-600 text-white" : "border-ink-100 bg-white text-ink-700 hover:border-brand-400"}`}>
                      {on && <Icon name="check" className="size-4" strokeWidth={3} />}{s}
                    </button>
                  );
                })}
              </div>
            </fieldset>
            <label className={label}>How would you like to work?
              <select className={field} value={data.model} onChange={set("model")}>{formOptions.models.map((o) => <option key={o}>{o}</option>)}</select>
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={label}>Budget range
                <select className={field} value={data.budget} onChange={set("budget")}>{formOptions.budgets.map((o) => <option key={o}>{o}</option>)}</select>
              </label>
              <label className={label}>When do you want to start?
                <select className={field} value={data.timeline} onChange={set("timeline")}>{formOptions.timelines.map((o) => <option key={o}>{o}</option>)}</select>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div key="s2" className="grid gap-4" style={{ animation: "slide-in .4s both" }}>
            <label className={label}>{data.kind === "partner" ? "Tell us about your company and offering" : "Describe your project"}
              <textarea className={`${field} min-h-36 resize-y`} value={data.message} onChange={set("message")}
                placeholder="What you want to build, who will use it, and anything already in place" />
            </label>
            <label className={label}>Industry
              <select className={field} value={data.industry} onChange={set("industry")}>{formOptions.industries.map((o) => <option key={o}>{o}</option>)}</select>
            </label>
            <label className={label}><span>Link to a brief or document <span className="font-medium text-ink-500">(optional)</span></span>
              <input className={field} type="url" value={data.link} onChange={set("link")} placeholder="https://drive.google.com/…" />
            </label>
          </div>
        )}

        {step === 3 && (
          <div key="s3" className="grid gap-4" style={{ animation: "slide-in .4s both" }}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={label}>Your name<input className={field} value={data.name} onChange={set("name")} autoComplete="name" /></label>
              <label className={label}>Company<input className={field} value={data.company} onChange={set("company")} autoComplete="organization" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={label}>Work email<input className={field} type="email" value={data.email} onChange={set("email")} autoComplete="email" /></label>
              <label className={label}><span>Phone or WhatsApp <span className="font-medium text-ink-500">(optional)</span></span>
                <input className={field} type="tel" value={data.phone} onChange={set("phone")} autoComplete="tel" /></label>
            </div>
            <label className={label}>Country
              <select className={field} value={data.country} onChange={set("country")}>{formOptions.countries.map((o) => <option key={o}>{o}</option>)}</select>
            </label>
          </div>
        )}

        <p role="alert" className="min-h-5 text-sm font-semibold text-red-600">{error}</p>

        <div className="flex items-center justify-between gap-3">
          <button type="button" onClick={() => { setError(""); setStep((s) => s - 1); }}
            className={`rounded-xl px-3 py-2 font-bold text-ink-700 hover:bg-surface-2 ${step === 1 ? "invisible" : ""}`}>← Back</button>
          <button type="submit" disabled={status === "sending"}
            className="btn-shine group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3.5 sm:px-6 font-bold text-white shadow-[0_14px_34px_-12px_rgb(168_120_24/.65)] transition hover:-translate-y-0.5 disabled:opacity-60">
            {status === "sending" ? "Sending…" : step < 3 ? "Next step" : data.kind === "partner" ? "Send partner request" : "Send my order"}
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
          </button>
        </div>
      </form>
    </div>
  );
}
