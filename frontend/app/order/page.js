import OrderIntro from "@/components/order/OrderIntro";
import OrderFormCard from "@/components/order/OrderFormCard";
import { Container } from "@/components/shared/ui";

export const instant = true;

export const metadata = {
  title: "Order a service",
  description: "Tell SEDAAPI what you want to build. Free technical call, written scope and quote.",
};

export default function OrderPage() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid items-start gap-10 py-12 sm:gap-12 sm:py-20 lg:grid-cols-[.9fr_1.1fr]">
        <OrderIntro />
        <OrderFormCard />
      </Container>
    </section>
  );
}
