import OrderForm from "@/components/order/OrderForm";

export default function OrderFormCard() {
  return (
    <div className="rise relative overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_40px_90px_-40px_rgb(19_34_58/.45)] ring-1 ring-ink-100 sm:p-10" style={{ animationDelay: ".2s" }}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-brand" />
      <h2 className="font-display text-2xl font-extrabold">Order a service</h2>
      <p className="mb-6 mt-1 text-ink-500">Three short steps. About two minutes.</p>
      <OrderForm />
    </div>
  );
}
