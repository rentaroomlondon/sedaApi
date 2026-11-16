import { Bricolage_Grotesque, Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company } from "@/lib/content";
import "./globals.css";

const heading = Bricolage_Grotesque({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700", "800"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });
const arabic = IBM_Plex_Sans_Arabic({ variable: "--font-ar", subsets: ["arabic"], weight: ["600"] });

export const metadata = {
  title: {
    default: `${company.name} · AI, Video and Software Engineering`,
    template: `%s · ${company.name}`,
  },
  description:
    "SEDAAPI builds AI, video and software products end to end: full stack development, video management, signal processing, AI automation, edge and IoT, cloud and operations. Riyadh, Saudi Arabia.",
  openGraph: {
    title: `${company.name} · AI, Video and Software Engineering`,
    description: "One engineering team for apps, video, signal processing and AI. Free scope and quote.",
    type: "website",
  },
};

export const viewport = { themeColor: "#1f6fbf" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${arabic.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
