import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Referencie - ART PROJEKT s.r.o.",
  description: "Naše realizované projekty - rodinné domy, občianske stavby, rekonštrukcie. Viac ako 500 dokončených projektov.",
  keywords: "referencie, projekty, rodinné domy, architektonické práce, ART PROJEKT",
};

export default function ReferenciePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/referencie/1-Bohunka-750x450.jpg"
            alt="Referencie ART PROJEKT"
            fill
            className="object-cover"
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
