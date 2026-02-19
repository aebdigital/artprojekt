import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov - ART PROJEKT s.r.o.",
  description: "Informácie o ochrane osobných údajov spoločnosti ART PROJEKT s.r.o.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Ochrana osobných údajov"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-[95%] mx-auto px-5 text-center">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Ochrana osobných údajov
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-[#222] mb-6">
              Zásady ochrany osobných údajov
            </h2>

            <p className="text-base leading-[1.8] text-[#555] mb-6">
              Spoločnosť ART PROJEKT s.r.o., so sídlom Dolné Dubové 244, 919 52, IČO: 44 311 320 (ďalej len &quot;prevádzkovateľ&quot;) spracúva osobné údaje v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov (GDPR) a zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
            </p>

            <h3 className="text-xl font-semibold text-[#222] mb-4 mt-8">
              Aké osobné údaje spracúvame?
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[#555]">
              <li>Meno a priezvisko</li>
              <li>Kontaktné údaje (email, telefónne číslo)</li>
              <li>Adresa</li>
              <li>Údaje potrebné pre vypracovanie projektovej dokumentácie</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#222] mb-4 mt-8">
              Na aký účel spracúvame osobné údaje?
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[#555]">
              <li>Poskytovanie architektonických a projekčných služieb</li>
              <li>Komunikácia s klientami</li>
              <li>Plnenie zmluvných povinností</li>
              <li>Dodržiavanie zákonných povinností</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#222] mb-4 mt-8">
              Ako dlho uchovávame osobné údaje?
            </h3>
            <p className="text-base leading-[1.8] text-[#555] mb-6">
              Osobné údaje uchovávame počas doby nevyhnutnej na dosiahnutie účelu, na ktorý boli zhromaždené, a v súlade s platnými právnymi predpismi.
            </p>

            <h3 className="text-xl font-semibold text-[#222] mb-4 mt-8">
              Vaše práva
            </h3>
            <p className="text-base leading-[1.8] text-[#555] mb-4">
              Máte právo:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[#555]">
              <li>Požiadať o prístup k svojim osobným údajom</li>
              <li>Požiadať o opravu nesprávnych údajov</li>
              <li>Požiadať o vymazanie údajov</li>
              <li>Namietať proti spracúvaniu</li>
              <li>Požiadať o prenos údajov</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#222] mb-4 mt-8">
              Kontakt
            </h3>
            <p className="text-base leading-[1.8] text-[#555]">
              V prípade akýchkoľvek otázok týkajúcich sa ochrany osobných údajov nás kontaktujte na adrese{" "}
              <a href="mailto:artprojekt@artprojekt.sk" className="text-[#222] font-medium hover:underline">
                artprojekt@artprojekt.sk
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
