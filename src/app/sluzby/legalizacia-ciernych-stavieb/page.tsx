import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Legalizácia čiernych stavieb",
  description: "Legalizácia čiernych stavieb podľa nového stavebného zákona – preskúmanie spôsobilosti stavby na užívanie, termín do 31.03.2029. ART PROJEKT s.r.o., Dolné Dubové, okres Trnava.",
  keywords: ["legalizácia čiernych stavieb", "čierne stavby", "preskúmanie spôsobilosti stavby", "dodatočné stavebné povolenie", "nový stavebný zákon", "legalizácia stavby Trnava"],
  alternates: { canonical: "https://artprojekt.sk/sluzby/legalizacia-ciernych-stavieb" },
  openGraph: {
    title: "Legalizácia čiernych stavieb | ART PROJEKT s.r.o.",
    description: "Pomôžeme vám zlegalizovať stavbu podľa nového stavebného zákona. Preskúmanie spôsobilosti stavby na užívanie – termín do 31.03.2029.",
    url: "https://artprojekt.sk/sluzby/legalizacia-ciernych-stavieb",
  },
};

export default function LegalizaciaPage() {
  return (
    <ServicePageLayout
      title="Legalizácia čiernych stavieb"
      mainTitle="Preskúmanie spôsobilosti stavby na užívanie"
      description="Pomôžeme Vám zosúladiť existujúce stavby podľa nového stavebného zákona."
      heroImageIndex={2}
    >
      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Nový právny inštitút
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Podľa nového stavebného zákona vznikol nový právny inštitút Preskúmanie spôsobilosti stavby na užívanie. Existujúce stavby, ktoré boli postavené bez stavebného povolenia, či ohlásenia drobnej stavby, alebo boli postavené v nesúlade s týmito povoleniami v časovom rozmedzí od 01.01.1990 – 31.03.2024, je potrebné do 31.03.2029 zlegalizovať.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Čo pre Vás zabezpečíme:
      </h3>
      <ul className="mb-[25px] pl-5 list-disc">
        <li className="text-base leading-[1.6] text-[#555] mb-2">Zameranie existujúcej stavby</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Vypracovanie projektovej dokumentácie skutočného vyhotovenia</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Zabezpečenie jednotlivých dokladov a čiastkových dokumentácií</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Prípravu Žiadosti o preskúmanie spôsobilosti stavby</li>
        <li className="text-base leading-[1.6] text-[#555] mb-0">Komunikáciu s príslušnými úradmi</li>
      </ul>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Dôležitý termín
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-0">
        Nezabudnite, že stavby je potrebné zlegalizovať do 31.03.2029. Neváhajte nás kontaktovať včas, aby sme mali dostatok času na vybavenie všetkých potrebných dokumentov.
      </p>
    </ServicePageLayout>
  );
}
