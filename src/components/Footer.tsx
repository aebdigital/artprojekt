"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  { href: "/sluzby/architektonicke-projekcne-prace", label: "Architektonické a projekčné práce" },
  { href: "/sluzby/inziniering", label: "Inžiniering" },
  { href: "/sluzby/legalizacia-ciernych-stavieb", label: "Legalizácia čiernych stavieb" },
  { href: "/sluzby/rozpoctovanie-stavieb", label: "Rozpočtovanie stavieb" },
  { href: "/sluzby/stavebny-autorsky-dozor", label: "Stavebný a autorský dozor" },
  { href: "/sluzby/3d-rendering-modeling", label: "3D rendering, 3D modeling" },
];

const team = [
  { name: "Ing. Peter Horváth", phone: "0905 516 135", phoneLink: "+421905516135", email: "horvath@artprojekt.sk" },
  { name: "Ing. arch. Zuzana Horváthová", phone: "0908 544 987", phoneLink: "+421908544987", email: "horvathova@artprojekt.sk" },
  { name: "Juraj Horváth", phone: "0907 857 496", phoneLink: "+421907857496", email: "horvathjuraj.art@gmail.com", portfolio: "jurajhorvath.wixsite.com/portfolio" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-[90vw] mx-auto py-12">
        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex items-start">
            <Image
              src="/images/logo2.png"
              alt="ART PROJEKT"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Navigácia */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-2">Navigácia</h4>
            <Link href="/" className="text-white/80 text-sm transition-colors duration-300 hover:text-white">
              Domov
            </Link>
            <Link href="/sluzby/architektonicke-projekcne-prace" className="text-white/80 text-sm transition-colors duration-300 hover:text-white">
              Služby
            </Link>
            <Link href="/referencie" className="text-white/80 text-sm transition-colors duration-300 hover:text-white">
              Referencie
            </Link>
            <Link href="/kontakt" className="text-white/80 text-sm transition-colors duration-300 hover:text-white">
              Kontakt
            </Link>
          </div>

          {/* Služby */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-2">Služby</h4>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-white/80 text-sm transition-colors duration-300 hover:text-white"
              >
                {service.label}
              </Link>
            ))}
          </div>

          {/* ART PROJEKT s.r.o. */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-2">ART PROJEKT s.r.o.</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Dolné Dubové 244<br />
              919 52
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              IČO: 44 311 320<br />
              IČ DPH: SK 2022 65 9672
            </p>
            <a
              href="mailto:artprojekt@artprojekt.sk"
              className="text-white/80 text-sm transition-colors duration-300 hover:text-white"
            >
              artprojekt@artprojekt.sk
            </a>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-2">Kontakt</h4>
            {team.map((person) => (
              <div key={person.name} className="text-white/80 text-sm leading-relaxed">
                {person.name}<br />
                <a
                  href={`tel:${person.phoneLink}`}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {person.phone}
                </a>
                <br />
                <a
                  href={`mailto:${person.email}`}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {person.email}
                </a>
                {person.portfolio && (
                  <>
                    <br />
                    <a
                      href={`https://${person.portfolio}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      {person.portfolio}
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; ART PROJEKT s.r.o. 2025 &nbsp;&nbsp;
            <Link
              href="/ochrana-osobnych-udajov"
              className="text-white/60 transition-colors duration-300 hover:text-white"
            >
              Ochrana osobných údajov
            </Link>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                if (typeof window !== "undefined" && (window as Window & { openCookieSettings?: () => void }).openCookieSettings) {
                  (window as Window & { openCookieSettings?: () => void }).openCookieSettings?.();
                }
              }}
              className="text-white/60 transition-colors duration-300 hover:text-white"
            >
              Cookies
            </button>
          </p>
          <a
            href="https://aebdigital.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 text-sm transition-colors duration-300 hover:text-white group"
          >
            Tvorba stránky – <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">AEB Digital s.r.o.</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
