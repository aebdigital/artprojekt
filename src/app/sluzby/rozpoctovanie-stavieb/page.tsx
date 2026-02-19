import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Rozpočtovanie stavieb - ART PROJEKT s.r.o.",
  description: "Profesionálne rozpočtovanie stavieb - položkové rozpočty, výkaz výmer, odhad nákladov. Spracovanie v programe Kalkulus.",
  keywords: "rozpočtovanie, rozpočet stavby, výkaz výmer, položkový rozpočet, odhad nákladov",
};

export default function RozpoctovaniePage() {
  return (
    <ServicePageLayout
      title="Rozpočtovanie stavieb"
      mainTitle="Presné kalkulácie nákladov"
      description="Rozpočet stavby je súpis položiek stavebných konštrukcií, technológií a materiálov. Slúži pre stanovenie odhadov celkových nákladov na realizáciu stavby."
      heroImageIndex={3}
    >
      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Prečo je rozpočet dôležitý?
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Pre investora je dôležitý pre získanie financií na stavbu (úver...), či ako podklad pre oslovenie subdodávateľov (výkaz výmer) a tiež na sledovanie čerpania rozpočtu počas stavby, či kontrolu dodávateľa.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Vieme Vám vypracovať:
      </h3>

      <p className="text-base leading-[1.6] text-[#555] mb-5">
        <strong>Položkový rozpočet</strong> – detailný zoznam všetkých stavebných prác (HSV - hrubá stavba, PSV – vedľajšie stavebné práce), materiálov a technológií
      </p>

      <p className="text-base leading-[1.6] text-[#555] mb-5">
        <strong>Výkaz výmer</strong> – slúži na určenie presného množstva materiálu a prác
      </p>

      <p className="text-base leading-[1.6] text-[#555] mb-5">
        <strong>Odhad nákladov</strong> – predbežný výpočet založený na rozpočtových ukazovateľoch, ktorý poskytuje rýchly, orientačný obraz o celkovej cene diela
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Profesionálne spracovanie
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-0">
        Rozpočet spracovávame na základe aktuálnych cenníkov v programe Kalkulus.
      </p>
    </ServicePageLayout>
  );
}
