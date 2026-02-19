import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt - ART PROJEKT s.r.o.",
  description: "Kontaktujte ART PROJEKT s.r.o. - odborníci na architektonické a projekčné práce. Dolné Dubové, Slovensko.",
  keywords: "kontakt, ART PROJEKT, architektonické práce, projekčné práce, Dolné Dubové",
};

const team: { name: string; phone: string; phoneLink: string; email: string; portfolio?: string }[] = [
  {
    name: "Ing. Peter Horváth",
    phone: "0905 516 135",
    phoneLink: "+421905516135",
    email: "horvath@artprojekt.sk",
  },
  {
    name: "Ing. arch. Zuzana Horváthová",
    phone: "0908 544 987",
    phoneLink: "+421908544987",
    email: "horvathova@artprojekt.sk",
  },
  {
    name: "Juraj Horváth",
    phone: "0907 857 496",
    phoneLink: "+421907857496",
    email: "horvathjuraj.art@gmail.com",
    portfolio: "jurajhorvath.wixsite.com/portfolio",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="ART PROJEKT kontakt"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-[95%] mx-auto px-5 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
            Kontakt
          </h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-5">
          <div className="mx-auto">
            {/* Contact Info Grid - Company Left, Team Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
              {/* Left Column - Company Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">
                  ART PROJEKT s.r.o.
                </h2>
                <p className="text-base text-[#555] mb-4 leading-relaxed">
                  Dolné Dubové 244,<br />919 52
                </p>
                <p className="mb-4">
                  <a
                    href="mailto:artprojekt@artprojekt.sk"
                    className="text-[#222] font-medium text-lg hover:underline transition-colors duration-300"
                  >
                    artprojekt@artprojekt.sk
                  </a>
                </p>
                <p className="text-base text-[#555] mb-1">
                  <strong>IČO:</strong> 44 311 320
                </p>
                <p className="text-base text-[#555]">
                  <strong>IČ DPH:</strong> SK 2022 65 9672
                </p>
              </div>

              {/* Right Column - Team Members Stacked */}
              <div className="flex flex-col gap-6">
                {team.map((person) => (
                  <div key={person.name} className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[#222]">
                        {person.name}
                      </p>
                      <p className="text-base text-[#555]">
                        <a
                          href={`mailto:${person.email}`}
                          className="hover:text-[#222] transition-colors duration-300"
                        >
                          {person.email}
                        </a>
                      </p>
                      {person.portfolio && (
                        <p className="text-base text-[#555]">
                          <a
                            href={`https://${person.portfolio}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#222] transition-colors duration-300"
                          >
                            {person.portfolio}
                          </a>
                        </p>
                      )}
                    </div>
                    <p className="text-base text-[#555]">
                      <a
                        href={`tel:${person.phoneLink}`}
                        className="hover:text-[#222] transition-colors duration-300 whitespace-nowrap"
                      >
                        {person.phone}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Description */}
            <div className="mb-12">
              <p className="text-base leading-[1.8] text-[#555] mb-4">
                V roku 2003, ešte počas vysokoškolských štúdií, sme založili ateliér, ktorý sa zaoberal výhradne architektonickou činnosťou a projektovaním stavieb. Neskôr sme portfólio svojich služieb rozšírili o inžiniering, rozpočtovanie stavieb, autorský a stavebný dozor.
              </p>
              <p className="text-base leading-[1.8] text-[#555] mb-4">
                Počas viac ako 20-ročnej praxe sme nadobudli bohaté skúsenosti aj v oblasti realizácií stavieb a tiež v spolupráci so samosprávami v projekčných prác pre eurofondy, či štátnu podporu.
              </p>
              <p className="text-base leading-[1.8] text-[#555]">
                V roku 2024 k nám do tímu pribúda mladý šikovný dizajnér, s ktorým spolupracujeme v oblasti tvorby vizualizácií, 3D renderingu, či návrhu interiérov a nábytku.
              </p>
            </div>

            {/* Map Section */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1!2d17.4833!3d48.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b5f0c8f8f8f8f%3A0x0!2zRG9sbsOpIER1Ym92w6kgMjQ0!5e0!3m2!1ssk!2ssk!4v1635789123456!5m2!1ssk!2ssk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ART PROJEKT s.r.o. - Dolné Dubové 244"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
