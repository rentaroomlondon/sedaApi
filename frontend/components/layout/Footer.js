import Link from "next/link";
import { Logo } from "@/components/shared/Icons";
import { ButtonLink, Container } from "@/components/shared/ui";
import { company, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-surface-2 pb-8 pt-14 text-ink-500 sm:pt-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-[.08em] text-ink-900">
              <Logo /> SEDAAPI
            </Link>
            <p className="mt-4 max-w-sm">One engineering team for apps, video, signal processing and AI. Based in {company.city}.</p>
            <p lang="ar" dir="rtl" className="mt-3 inline-block font-arabic text-lg text-brand-600">{company.taglineAr}</p>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-ink-900">Services</h3>
            <ul className="grid gap-2.5">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services#${s.slug}`} className="transition hover:text-brand-600">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-ink-900">Company</h3>
            <ul className="grid gap-2.5">
              <li><Link href="/#how" className="hover:text-brand-600">How to order</Link></li>
              <li><Link href="/#industries" className="hover:text-brand-600">Industries</Link></li>
              <li><Link href="/partners" className="hover:text-brand-600">Partners</Link></li>
              <li><Link href="/#faq" className="hover:text-brand-600">FAQ</Link></li>
              <li><Link href="/order" className="hover:text-brand-600">Order a service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-ink-900">Contact</h3>
            <ul className="grid gap-2.5">
              <li><a href={`mailto:${company.email}`} className="break-all hover:text-brand-600">{company.email}</a></li>
              <li><a href={company.website} rel="noopener" className="hover:text-brand-600">{company.websiteLabel}</a></li>
              <li>{company.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-stretch justify-between gap-5 rounded-3xl border border-ink-100 bg-white p-6 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:p-8">
          <p className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Ready to start your project?</p>
          <ButtonLink href="/order" size="lg" arrow>Order a service</ButtonLink>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-ink-100 pt-6 text-sm">
          <span>© 2026 SEDAAPI. All rights reserved.</span>
          <span className="flex gap-5">
            <Link href="/privacy" className="hover:text-brand-600">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-600">Terms</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
