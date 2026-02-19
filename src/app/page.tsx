import Link from "next/link";
import Image from "next/image";

const services = [
  {
    href: "/sluzby/architektonicke-projekcne-prace",
    title: "Architektonické a projekčné práce",
    description: "Na základe Vašich požiadaviek Vám vypracujeme urbanistickú štúdiu, architektonickú štúdiu, projektovú dokumentáciu a 3D vizualizáce.",
  },
  {
    href: "/sluzby/inziniering",
    title: "Inžiniering",
    description: "Zabezpečíme predprojektovú prípravu, vybavýme stavebný zámer, či legalizáciu stavby, kolaudáciu až po udelenie súpisného čísla.",
  },
  {
    href: "/sluzby/legalizacia-ciernych-stavieb",
    title: "Legalizácia čiernych stavieb",
    description: "Pomôžeme Vám dodatočne zlegalizovať Vašu stavbu, vybavíme žiadosť o preskúmanie spôsobilosti stavby na užívanie.",
  },
  {
    href: "/sluzby/rozpoctovanie-stavieb",
    title: "Rozpočtovanie stavieb",
    description: "Vyhotovujeme položkové rozpočty stavieb vrátane materiálových a pracovných nákladov.",
  },
  {
    href: "/sluzby/stavebny-autorsky-dozor",
    title: "Stavebný a autorský dozor",
    description: "Poskytujeme dozor počas výstavby a garantujeme dodržanie projektovej dokumentácie a stavebných noriem.",
  },
  {
    href: "/sluzby/3d-rendering-modeling",
    title: "3D rendering, 3D modeling",
    description: "Ponúkame priestorové vizualizácie interiérov i exteriérov stavieb. Vyhotovujeme produktové vizualizície, tvorbu 3D modelov aj pre 3D tlač.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Services Grid with unified background */}
      <section className="relative min-h-[90vh] pt-[80px]">
        {/* Unified Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="ART PROJEKT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto md:grid-rows-3 lg:grid-rows-2 min-h-[calc(90vh-80px)]">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="relative overflow-hidden flex items-end no-underline text-white border border-white/10 group min-h-[250px] md:min-h-0 transition-all duration-300 hover:bg-black/30"
            >
              {/* Hover Arrow */}
              <div className="absolute top-5 right-5 z-[3] opacity-0 translate-x-2 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-[3] p-[30px] max-[480px]:p-5 w-full transition-transform duration-300 group-hover:-translate-y-[10px]">
                <h2 className="text-[1.4rem] max-[480px]:text-[1.2rem] font-semibold mb-[10px] leading-[1.3]">
                  {service.title}
                </h2>
                <p className="text-[0.95rem] max-[480px]:text-[0.85rem] leading-[1.5] m-0 opacity-90">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Bar with Referencie and Stats */}
      <section className="bg-[#222] py-5">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-[30px]">
          {/* Left - Referencie Button */}
          <div className="flex items-center">
            <Link
              href="/referencie"
              className="inline-flex items-center gap-3 bg-white text-[#222] px-[35px] py-[15px] text-base font-semibold no-underline uppercase tracking-[1px] transition-all duration-300 hover:bg-[#f5f5f5] hover:translate-x-[5px]"
            >
              Referencie
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="flex flex-col sm:flex-row gap-5 max-[480px]:gap-5 md:gap-[60px]">
            <div className="text-center md:text-right text-white">
              <div className="text-[2.5rem] max-[480px]:text-[2rem] font-bold leading-none flex items-baseline justify-center md:justify-end">
                500<span className="text-[1.5rem] ml-[2px]">+</span>
              </div>
              <div className="text-[0.9rem] opacity-80 mt-[5px]">dokončených projektov</div>
            </div>
            <div className="text-center md:text-right text-white">
              <div className="text-[2.5rem] max-[480px]:text-[2rem] font-bold leading-none flex items-baseline justify-center md:justify-end">
                20<span className="text-[1.5rem] ml-[2px]">+</span>
              </div>
              <div className="text-[0.9rem] opacity-80 mt-[5px]">rokov skúseností</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
