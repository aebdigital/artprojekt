import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Architektonické a projekčné práce - ART PROJEKT s.r.o.",
  description: "Profesionálne architektonické a projekčné práce. Urbanistické štúdie, architektonické štúdie a projektová dokumentácia.",
  keywords: "architektonické práce, projekčné práce, urbanistické štúdie, projektová dokumentácia",
};

export default function ArchitektonickeProjektePage() {
  return (
    <ServicePageLayout
      title="Architektonické a projekčné práce"
      mainTitle="Komplexné architektonické riešenia"
      description="Na základe Vašich požiadaviek Vám vypracujeme urbanistickú a architektonickú štúdiu, projektovú dokumentáciu a 3D vizualizácie."
      heroImageIndex={0}
      sideImageIndex={3}
    >
      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Urbanistická štúdia
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Rieši čiastkové problémy v území – krajinnoekologické (parky...), mestotvorné (verejný priestor, ulice, námestia...), územnoplánovacie – nové obytné či priemyselné štvrte...) Spravidla slúži na podrobnejšie spracovanie, alebo overenie územného plánu. Je podkladom pre územné rozhodovanie a môže slúžiť ako podklad k Stavebnému zámeru.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Architektonická štúdia
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Predchádza projektovej dokumentácii. Vychádza z požiadaviek a predstáv investora o funkcii a estetike objektu, pričom pretavuje základný ideový koncept architekta do podoby hmotovo-dispozičného návrhu. Zohľadňuje pritom orientáciu na svetové strany, umiestnenie na pozemok, špecifické okolnosti (napr. ak je objekt kult. pamiatka), aktuálne architektonické trendy a moderné technológie a materiály. Výstupom sú spravidla dispozičné návrhy a vizualizácie objektu s najbližším okolím.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Projektová dokumentácia
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-0">
        Nadväzuje na architektonickú, resp. urbanistickú štúdiu, ktoré dopracováva pre konanie o Stavebnom zámere, realizáciu stavby, či kolaudáciu (dokumentácia skutočného vyhotovenia). Pozostáva z projektovej dokumentácie stavebnej časti a projektových dokumentácií jednotlivých profesií (statika, vykurovanie, elektroinštalácia, požiarna ochrana atď.). Spravidla spracovávame a odovzdáme dokumentáciu ako komplex všetkých potrebných profesií, ale ak má investor vlastných projektantov, spolupracujeme a koordinujeme projekt priamo s nimi.
      </p>
    </ServicePageLayout>
  );
}
