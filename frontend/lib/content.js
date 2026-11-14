// All site copy lives here, so text can be changed without touching layout code.

export const company = {
  name: "SEDAAPI",
  email: "info@sedaapi.ai",
  website: "https://www.sedaapi.ai",
  websiteLabel: "www.sedaapi.ai",
  city: "Riyadh, Saudi Arabia",
  taglineAr: "حيث يلتقي الذكاء بالإنسانية",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/#how", label: "How to order", short: "Process" },
  { href: "/#industries", label: "Industries" },
  { href: "/partners", label: "Partners" },
  { href: "/#faq", label: "FAQ" },
];

export const services = [
  {
    slug: "full-stack",
    icon: "code",
    title: "Full stack development",
    short: "Web apps, mobile apps, APIs and admin dashboards, shipped as one product instead of three projects.",
    points: ["Customer portals and internal tools", "REST and live data APIs", "Role based access and audit trails"],
    ideal: "Companies that need a new app, portal or dashboard built properly.",
    deliverables: ["Working web or mobile app", "Admin dashboard", "Documented API", "Deployment and handover"],
  },
  {
    slug: "video",
    icon: "video",
    title: "Video management",
    short: "Platforms that take in camera streams, store them, and let people find and replay the moment that matters.",
    points: ["Camera ingest, live view and recording", "Event search and clip export", "Fleets of cameras across many sites"],
    ideal: "Security teams, facilities and cities running many cameras.",
    deliverables: ["Live video wall", "Recording and playback", "Event search", "Multi-site management"],
  },
  {
    slug: "signal",
    icon: "wave",
    title: "Signal processing",
    short: "We turn noisy sensor, thermal and audio data into clean signals your software can act on.",
    points: ["Filtering, FFT and peak detection", "Thermal and audio analysis", "Combining several sensors into one reading"],
    ideal: "Hardware and device makers who need reliable readings.",
    deliverables: ["Signal pipeline", "Accuracy report", "Calibration tools", "Integration with your app"],
  },
  {
    slug: "ai",
    icon: "chip",
    title: "AI automation",
    short: "Models and workflows that take over repetitive decisions, with a person kept in the loop where it counts.",
    points: ["Computer vision and event detection", "Document, form and medical transcription", "AI assistants, alert routing and report drafting"],
    ideal: "Teams buried in paperwork, calls or manual checks.",
    deliverables: ["Trained or tuned model", "Automated workflow", "Review screen for staff", "Accuracy monitoring"],
  },
  {
    slug: "edge",
    icon: "edge",
    title: "Edge and IoT",
    short: "Run the model next to the sensor so the system keeps working when the network does not.",
    points: ["AI on gateways and small devices", "Device fleets with remote updates", "Sensor data that stays on site"],
    ideal: "Sites with weak internet or strict data rules.",
    deliverables: ["On-device AI", "Fleet management console", "Remote updates", "Offline operation"],
  },
  {
    slug: "cloud",
    icon: "cloud",
    title: "Cloud and operations",
    short: "Deployment, monitoring and data hosting set up where your rules say the data has to live.",
    points: ["Container based releases", "Logs, metrics and alerting", "Hosting in the region you choose"],
    ideal: "Products that must stay online and meet hosting rules.",
    deliverables: ["Automated releases", "Monitoring and alerts", "Backups", "In-region hosting"],
  },
];

export const orderSteps = [
  { title: "Choose a service", text: "Pick one of our six services, several of them, or simply describe your idea." },
  { title: "Send your request", text: "Fill in the short order form. It takes about two minutes." },
  { title: "Get scope and quote", text: "After a technical call we send a written scope, timeline and price.", badge: "Free" },
  { title: "We build and deliver", text: "Short cycles with working software you can try, then deployment and handover." },
];

export const models = [
  {
    title: "Fixed project",
    best: "For a clear goal with a defined scope.",
    price: "Fixed price",
    unit: "per project",
    points: ["Written scope, timeline and price", "Milestones you sign off", "Handover with documentation"],
    cta: "Get a fixed quote",
  },
  {
    title: "Dedicated team",
    best: "For products that keep growing month after month.",
    price: "Monthly",
    unit: "team rate",
    points: ["Engineers across all six services", "Weekly releases and progress demos", "Scale the team up or down"],
    cta: "Build my team",
    popular: true,
  },
  {
    title: "Consulting and review",
    best: "For a second opinion before you build or buy.",
    price: "Per review",
    unit: "short engagement",
    points: ["Architecture and code review", "AI and vendor selection advice", "Clear written recommendations"],
    cta: "Book a review",
  },
];

export const industries = [
  {
    icon: "heart",
    title: "Healthcare",
    text: "AI that listens and reads, so clinicians spend more time with patients and less on paperwork.",
    tags: ["Medical transcription", "Report summaries", "Remote monitoring"],
  },
  {
    icon: "city",
    title: "Smart buildings and cities",
    text: "Camera and sensor networks that spot events across many sites and alert the right team.",
    tags: ["Video platforms", "Event detection", "Sensor networks"],
  },
  {
    icon: "shield",
    title: "Security and safety",
    text: "Systems that raise the right alert fast and keep a clear record of what happened.",
    tags: ["Live monitoring", "Alert routing", "Incident search"],
  },
  {
    icon: "chart",
    title: "Business operations",
    text: "Portals, dashboards and document automation that remove manual work from daily processes.",
    tags: ["Customer portals", "Document AI", "Dashboards"],
  },
];

// status: "partner" = confirmed partnership. "platform" = technology we build on.
// Confirm every "partner" entry before publishing.
export const partners = [
  { name: "NVIDIA", cat: "compute", catLabel: "AI and compute", status: "partner", featured: true,
    text: "GPU computing and edge AI platforms for training models and running them on site, from data centre to small devices." },
  { name: "Microsoft Azure", cat: "cloud", catLabel: "Cloud", status: "platform", text: "Cloud hosting, AI services and identity for enterprise systems." },
  { name: "AWS", cat: "cloud", catLabel: "Cloud", status: "platform", text: "Scalable hosting, storage and managed AI services." },
  { name: "Google Cloud", cat: "cloud", catLabel: "Cloud", status: "platform", text: "Data, analytics and AI infrastructure, including Middle East regions." },
  { name: "OpenAI", cat: "models", catLabel: "AI models", status: "platform", text: "Language and speech models for assistants and transcription." },
  { name: "Anthropic", cat: "models", catLabel: "AI models", status: "platform", text: "Claude models for long documents and safe enterprise assistants." },
  { name: "Google Gemini", cat: "models", catLabel: "AI models", status: "platform", text: "Models that work across text, images, audio and video." },
  { name: "Meta Llama", cat: "models", catLabel: "AI models", status: "platform", text: "Open models we can host privately when data must not leave." },
];

export const why = [
  { big: "1", title: "One team, one contract", text: "No juggling three vendors. One team is responsible for the whole system working together." },
  { big: "0", title: "Surprises in the price", text: "You get a written scope and price before work starts. Changes are agreed in writing first." },
  { big: "100%", title: "Your code, your data", text: "You own the code we write for you, and your data is hosted in the region you choose." },
];

export const faqs = [
  { q: "How do I order a service?", a: "Open the order page, choose what you need and send the short form. We reply to set up a technical call, then send you a written scope, timeline and price. Nothing starts until you agree." },
  { q: "Is the scope and quote really free?", a: "Yes. The technical call, written scope and quote are free and come with no obligation." },
  { q: "Can you take one service, or only a whole product?", a: "Either. Many clients start with one service, such as a video platform or an AI workflow, and add more once it is running." },
  { q: "Can you work with our existing code and cameras?", a: "Yes. We start by reviewing what you already have, then extend it rather than rebuild it, unless rebuilding is clearly cheaper." },
  { q: "Which AI providers do you work with?", a: "NVIDIA for compute, and leading model providers including OpenAI, Anthropic, Google and open models such as Llama. We choose per project, and can host open models privately when data must stay with you." },
  { q: "Where will our data be hosted?", a: "In the region you choose, including inside Saudi Arabia where your rules require it." },
  { q: "Do you handle sensitive data such as health records?", a: "Yes. We build with encryption, role based access and audit trails from the start, and design around the data protection rules that apply to you." },
  { q: "Who owns the code?", a: "You own the code we write for you once it is paid for. This is stated in the contract." },
];

export const formOptions = {
  services: [...services.map((s) => s.title), "Something else"],
  models: ["Not sure yet", ...models.map((m) => m.title)],
  budgets: ["Not sure yet", "Under SAR 40k", "SAR 40k – 200k", "SAR 200k – 500k", "Over SAR 500k"],
  timelines: ["As soon as possible", "Within 1 month", "In 1 – 3 months", "Later this year"],
  industries: ["Healthcare", "Smart buildings and cities", "Security and safety", "Business operations", "Government", "Other"],
  countries: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman", "Pakistan", "Other"],
};

export const partnerBenefits = [
  { icon: "shield", title: "Proven building blocks", text: "We build on platforms with long-term support, so what we deliver keeps working for years." },
  { icon: "chip", title: "The right model for the job", text: "We compare AI providers for each project and choose on accuracy, cost and privacy, with no lock-in." },
  { icon: "globe", title: "Hosting where your rules say", text: "Our cloud partners run regional data centres, so your data can stay in the country it belongs to." },
];

export const partnerTypes = [
  { title: "Technology vendors", text: "Hardware, cameras, sensors, AI models and platforms we can build on for clients." },
  { title: "Resellers", text: "Companies that want to offer our services to their own customers." },
  { title: "System integrators", text: "Teams that need engineering capacity for apps, video or AI inside larger projects." },
];
