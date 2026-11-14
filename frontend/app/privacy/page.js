import { Container } from "@/components/shared/ui";
import { company } from "@/lib/content";

export const metadata = { title: "Privacy" };

// TODO: replace with the approved privacy policy before launch.
export default function Privacy() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold">Privacy</h1>
      <p className="mt-6 text-base sm:text-lg text-ink-500">
        Our full privacy policy is being prepared. Information you send through our order form is used only to reply to your request.
        For any privacy question, email <a className="font-bold text-brand-600" href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </Container>
  );
}
