import { Container } from "@/components/shared/ui";
import { company } from "@/lib/content";

export const metadata = { title: "Terms" };

// TODO: replace with the approved terms of service before launch.
export default function Terms() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold">Terms</h1>
      <p className="mt-6 text-base sm:text-lg text-ink-500">
        Our website terms are being prepared. Project terms are agreed in writing with each client before work starts.
        Questions: <a className="font-bold text-brand-600" href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </Container>
  );
}
