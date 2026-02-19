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
  metadataBase: new URL("https://artprojekt.sk"),
  title: {
    default: "ART PROJEKT s.r.o. | Architektonické a projekčné práce | Dolné Dubové",
    template: "%s | ART PROJEKT s.r.o.",
  },
  description: "ART PROJEKT s.r.o. – architektonické a projekčné práce, inžiniering, stavebný a autorský dozor, rozpočtovanie stavieb, 3D vizualizácie. Viac ako 20 rokov skúseností a 500+ dokončených projektov. Dolné Dubové, okres Trnava.",
  keywords: [
    "architektonické práce",
    "projekčné práce",
    "projektová dokumentácia",
    "inžiniering",
    "stavebný dozor",
    "autorský dozor",
    "rozpočtovanie stavieb",
    "legalizácia stavieb",
    "3D vizualizácie",
    "3D rendering",
    "rodinné domy",
    "občianske stavby",
    "ART PROJEKT",
    "Dolné Dubové",
    "Trnava",
    "architekt Trnava",
    "projektant Trnava",
    "Slovensko",
  ],
  authors: [{ name: "ART PROJEKT s.r.o.", url: "https://artprojekt.sk" }],
  creator: "ART PROJEKT s.r.o.",
  publisher: "ART PROJEKT s.r.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://artprojekt.sk",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://artprojekt.sk",
    siteName: "ART PROJEKT s.r.o.",
    title: "ART PROJEKT s.r.o. | Architektonické a projekčné práce",
    description: "Architektonické a projekčné práce, inžiniering, stavebný dozor, rozpočtovanie stavieb a 3D vizualizácie. Viac ako 20 rokov skúseností v oblasti projektovania stavieb.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "ART PROJEKT s.r.o. - Architektonické a projekčné práce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ART PROJEKT s.r.o. | Architektonické a projekčné práce",
    description: "Architektonické a projekčné práce, inžiniering, stavebný dozor. Viac ako 20 rokov skúseností a 500+ projektov.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "SK-TA",
    "geo.placename": "Dolné Dubové",
    "geo.position": "48.4333;17.4833",
    "ICBM": "48.4333, 17.4833",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    name: "ART PROJEKT s.r.o.",
    url: "https://artprojekt.sk",
    logo: "https://artprojekt.sk/images/logo.png",
    image: "https://artprojekt.sk/images/hero-bg.jpg",
    description: "Architektonické a projekčné práce, inžiniering, stavebný a autorský dozor, rozpočtovanie stavieb a 3D vizualizácie. Viac ako 20 rokov skúseností.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dolné Dubové 244",
      addressLocality: "Dolné Dubové",
      postalCode: "919 52",
      addressRegion: "Trnavský kraj",
      addressCountry: "SK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.4333,
      longitude: 17.4833,
    },
    telephone: "+421905516135",
    email: "artprojekt@artprojekt.sk",
    foundingDate: "2003",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 5,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Trnavský kraj",
      },
      {
        "@type": "Country",
        name: "Slovensko",
      },
    ],
    serviceType: [
      "Architektonické práce",
      "Projekčné práce",
      "Inžiniering",
      "Stavebný dozor",
      "Autorský dozor",
      "Rozpočtovanie stavieb",
      "Legalizácia čiernych stavieb",
      "3D vizualizácie",
      "3D rendering",
      "3D modelovanie",
    ],
    sameAs: [],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  };

  return (
    <html lang="sk">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
