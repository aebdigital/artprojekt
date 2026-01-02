import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ART PROJEKT s.r.o. - Architektonické a projekčné práce | Dolné Dubové",
  description: "ART PROJEKT s.r.o. - Architektonické a projekčné práce, inžiniering, stavebný dozor. Komplexné služby od návrhu po realizáciu.",
  keywords: "architektonické práce, projektovanie, stavby na kľúč, ART PROJEKT, Dolné Dubové",
  authors: [{ name: "ART PROJEKT s.r.o." }],
  openGraph: {
    type: "website",
    url: "https://artprojekt.sk/",
    title: "ART PROJEKT s.r.o. - Architektonické a projekčné práce",
    description: "Odborníci na architektonické a projekčné práce. Komplexné služby od návrhu po realizáciu.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
