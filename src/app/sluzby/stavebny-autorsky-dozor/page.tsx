import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Stavebný a autorský dozor - ART PROJEKT s.r.o.",
  description: "Profesionálny stavebný a autorský dozor. Kontrola kvality prác, dodržanie projektovej dokumentácie a stavebných noriem.",
  keywords: "stavebný dozor, autorský dozor, kontrola kvality, projektová dokumentácia",
};

export default function StavebnyDozorPage() {
  return (
    <ServicePageLayout
      title="Stavebný a autorský dozor"
      mainTitle="Odborný dozor výstavby"
      description="Stavebný a autorský dozor pomôže predchádzať chybám počas realizácie, včas nájde riešenie, ak z objektívnych dôvodov muselo prísť k zmenám oproti projektovej dokumentácii, čím investorovi v konečnom dôsledku ochráni investície."
      heroImageIndex={4}
      sideImageIndex={0}
    >
      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Stavebný dozor
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Stavebný dozor neriadi stavbu (to je náplň stavbyvedúceho), je zodpovedný za dohľad a kontrolu nad stavebnými prácami. Na stavbe zastupuje záujmy investora. Zabezpečuje dodržiavanie stavebných predpisov, bezpečnostných noriem a súlad stavby s projektovou dokumentáciou.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Referencie stavebného dozoru:
      </h3>
      <ul className="mb-[25px] pl-5 list-disc">
        <li className="text-base leading-[1.6] text-[#555] mb-2">Prístavba ZŠ, Suchá nad Parnou</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Dostavba ZŠ, Bohdanovce nad Trnavou</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Cyklistická komunikácia, Bohdanovce nad Trnavou</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Vodovod a kanalizácia, Suchá nad Parnou</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Rekonštrukcia miestnej komunikácie, Suchá nad Parnou</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Obnova KD - Zvýšenie energetickej efektívnosti kultúrneho domu, Križovany nad Dudváhom</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Komplexná rekonštrukcia bytu, Trnava</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Komplexná výmena stúpačiek ZTI, vykurovania, VZT a plynu bytového domu, Spartakovská ul. v Trnave</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Rodinný dom, Trnava-Oravné</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Rodinný dom, Bučany</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Rodinný dom, Chtelnica</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Rodinný dom, Dolné Dubové</li>
        <li className="text-base leading-[1.6] text-[#555] mb-0">Niekoľko ďalších objektov rodinných domov a polyfunkčných objektov...</li>
      </ul>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Autorský dozor
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-0">
        Autorský dozor je dohľad architekta / projektanta nad realizáciou stavby, ktorý zabezpečuje súlad so schválenou projektovou dokumentáciou. V prípade neočakávaných situácií navrhuje riešenia, aby sa zachovala funkcia a kvalita realizovaného diela. Dohliada na technickú a estetickú kvalitu použitých materiálov a prevedenia detailov.
      </p>
    </ServicePageLayout>
  );
}
