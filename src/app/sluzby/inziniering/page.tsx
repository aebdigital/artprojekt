import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Inžiniering - ART PROJEKT s.r.o.",
  description: "Profesionálne inžinierske služby - predprojektová príprava, konzultácie so stavebným úradom, koordinácia projektových prác.",
  keywords: "inžiniering, stavebné povolenie, konzultácie, kolaudácia, stavebný zámer",
};

export default function InzinieringPage() {
  return (
    <ServicePageLayout
      title="Inžiniering"
      mainTitle="Komplexné inžinierske služby"
      description="Zabezpečíme predprojektovú prípravu, vybavenie stavebného zámeru, koordináciu projektových prác a následné kolaudačné rozhodnutie."
      heroImageIndex={1}
    >
      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Čo zahŕňa inžiniering?
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Inžiniering zahŕňa predprojektovú prípravu, konzultácie so stavebným úradom, správcami sietí a dotknutými orgánmi, či subjektami v konaní o Stavebnom zámere. Zabezpečuje vedenie a koordináciu projektových prác potrebných pre konanie o Stavebnom zámere, realizáciu stavby, príp. až po udelenie Kolaudačného rozhodnutia.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Naše služby zahŕňajú:
      </h3>
      <ul className="mb-[25px] pl-5 list-disc">
        <li className="text-base leading-[1.6] text-[#555] mb-2">Predprojektovú prípravu</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Konzultácie so stavebným úradom</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Komunikáciu so správcami sietí</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Jednanie s dotknutými orgánmi</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Vedenie a koordináciu projektových prác</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Vybavenie stavebného zámeru</li>
        <li className="text-base leading-[1.6] text-[#555] mb-0">Vybavenie kolaudačného rozhodnutia</li>
      </ul>
    </ServicePageLayout>
  );
}
