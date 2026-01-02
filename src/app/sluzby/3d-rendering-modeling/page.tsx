import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "3D rendering, 3D modeling - ART PROJEKT s.r.o.",
  description: "Profesionálne 3D vizualizácie exteriérov a interiérov, 3D modely pre tlač a prezentáciu produktov.",
  keywords: "3D rendering, 3D modeling, vizualizácie, 3D tlač, architektonické vizualizácie",
};

export default function RenderingPage() {
  return (
    <ServicePageLayout
      title="3D rendering, 3D modeling"
      mainTitle="Vizualizácie a 3D modely"
      description="Spracovávame vizualizácie exteriérov či interiérov stavieb nielen na naše vlastné návrhy, ale aj ako samostatnú službu pre projektantov, či stavebníkov."
      heroImageIndex={5}
      sideImageIndex={1}
    >
      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        3D vizualizácie
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Vytvárame fotorealistické vizualizácie exteriérov a interiérov, ktoré pomáhajú klientom lepšie si predstaviť výsledný projekt ešte pred začatím stavby.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        3D modelovanie
      </h3>
      <p className="text-base leading-[1.6] text-[#555] mb-5">
        Ponúkame vyhotovenie 3D modelov na základe 2D výkresov pre vytvorenie vizualizácií, ale aj 3D modely rôznych produktov pre 3D tlač, či ďalšiu prezentáciu produktov.
      </p>

      <h3 className="text-[1.4rem] md:text-[1.2rem] max-[480px]:text-[1.1rem] font-semibold text-[#222] mb-[15px] leading-[1.3]">
        Služby zahŕňajú:
      </h3>
      <ul className="mb-0 pl-5 list-disc">
        <li className="text-base leading-[1.6] text-[#555] mb-2">Vizualizácie exteriérov stavieb</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">Vizualizácie interiérov</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">3D modely na základe 2D výkresov</li>
        <li className="text-base leading-[1.6] text-[#555] mb-2">3D modely produktov pre 3D tlač</li>
        <li className="text-base leading-[1.6] text-[#555] mb-0">Prezentačné materiály</li>
      </ul>
    </ServicePageLayout>
  );
}
