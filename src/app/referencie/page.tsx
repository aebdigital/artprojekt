import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Referencie",
  description: "Realizované projekty ART PROJEKT s.r.o. – rodinné domy, občianske stavby, rekonštrukcie. Viac ako 500 dokončených projektov v Trnavskom kraji a okolí.",
  keywords: ["referencie", "realizované projekty", "rodinné domy", "občianske stavby", "rekonštrukcie", "ART PROJEKT projekty", "architektúra Trnava"],
  alternates: { canonical: "https://artprojekt.sk/referencie" },
  openGraph: {
    title: "Referencie | ART PROJEKT s.r.o.",
    description: "Viac ako 500 dokončených projektov – rodinné domy, občianske stavby, rekonštrukcie.",
    url: "https://artprojekt.sk/referencie",
  },
};

export default function ReferenciePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Referencie ART PROJEKT"
            fill
            className="object-cover object-[center_55%]"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-[95%] mx-auto px-5 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
            Referencie
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">
            Na stránke sa pracuje
          </h2>
        </div>
      </section>
    </>
  );
}
