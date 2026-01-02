"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { href: "/sluzby/architektonicke-projekcne-prace", label: "Architektonické a projekčné práce" },
  { href: "/sluzby/inziniering", label: "Inžiniering" },
  { href: "/sluzby/legalizacia-ciernych-stavieb", label: "Legalizácia čiernych stavieb" },
  { href: "/sluzby/rozpoctovanie-stavieb", label: "Rozpočtovanie stavieb" },
  { href: "/sluzby/stavebny-autorsky-dozor", label: "Stavebný a autorský dozor" },
  { href: "/sluzby/3d-rendering-modeling", label: "3D rendering, 3D modeling" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      setScrollProgress(scrollPercentage);
      setIsScrolled(scrollPosition > window.innerHeight * 0.08);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-[#222222] backdrop-blur-[10px] shadow-[0_2px_20px_rgba(0,0,0,0.1)]" : "bg-[#222222] backdrop-blur-[10px] border-b border-white/30"
      }`}>
        <div className="max-w-[95%] xl:max-w-[1200px] mx-auto px-5 flex justify-between items-center relative min-h-[60px] gap-[15px] xl:gap-[30px]">
          {/* Left Menu */}
          <ul className="hidden md:flex items-center gap-[15px] xl:gap-[30px] flex-1 justify-center order-1">
            <li>
              <Link
                href="/"
                className={`text-white font-medium text-base uppercase tracking-[0.5px] px-[10px] xl:px-[15px] py-[10px] relative transition-all duration-300 whitespace-nowrap hover:after:w-[calc(100%-30px)] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[5px] after:left-[15px] after:bg-current after:transition-all after:duration-300 ${isActive("/") ? "after:w-[calc(100%-30px)]" : ""}`}
              >
                Domov
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/sluzby/architektonicke-projekcne-prace"
                className="text-white font-medium text-base uppercase tracking-[0.5px] px-[10px] xl:px-[15px] py-[10px] flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
              >
                Služby
                <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">▼</span>
              </Link>
              <ul className="absolute top-full left-0 bg-white/95 backdrop-blur-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-lg min-w-[280px] py-[10px] opacity-0 invisible -translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-[1000]">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="block px-5 py-3 text-[#333] text-sm font-medium border-b border-black/5 last:border-b-0 transition-all duration-300 hover:bg-[#333]/5 hover:text-[#333] hover:pl-[25px]"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Logo */}
          <div className="flex items-center flex-shrink-0 order-2 flex-1 md:flex-none justify-center">
            <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
              <Image
                src="/images/logo2.png"
                alt="ART PROJEKT s.r.o."
                width={isScrolled ? 140 : 188}
                height={isScrolled ? 56 : 75}
                className="object-contain transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Right Menu */}
          <ul className="hidden md:flex items-center gap-[15px] xl:gap-[30px] flex-1 justify-center order-3">
            <li>
              <Link
                href="/referencie"
                className={`text-white font-medium text-base uppercase tracking-[0.5px] px-[10px] xl:px-[15px] py-[10px] relative transition-all duration-300 whitespace-nowrap hover:after:w-[calc(100%-30px)] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[5px] after:left-[15px] after:bg-current after:transition-all after:duration-300 ${isActive("/referencie") ? "after:w-[calc(100%-30px)]" : ""}`}
              >
                Referencie
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className={`text-white font-medium text-base uppercase tracking-[0.5px] px-[10px] xl:px-[15px] py-[10px] relative transition-all duration-300 whitespace-nowrap hover:after:w-[calc(100%-30px)] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[5px] after:left-[15px] after:bg-current after:transition-all after:duration-300 ${isActive("/kontakt") ? "after:w-[calc(100%-30px)]" : ""}`}
              >
                Kontakt
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer z-[1001] absolute right-5 top-1/2 -translate-y-1/2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 translate-x-[-6px] translate-y-[6px]" : ""}`} />
            <span className={`w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-x-[-6px] translate-y-[-6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[999] transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-[20px] border-r border-black/10 z-[1000] transition-all duration-300 shadow-[2px_0_10px_rgba(0,0,0,0.1)] ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-[10px_15px] border-b border-black/10 bg-white max-w-[95%] mx-auto">
          <div className="flex items-center gap-[10px]">
            <Image
              src="/images/logo2.png"
              alt="ART PROJEKT"
              width={128}
              height={32}
              className="object-contain"
            />
          </div>
          <button
            className="bg-transparent border-none text-xl text-[#333] cursor-pointer p-0 flex items-center justify-center w-[35px] h-[35px] rounded transition-colors duration-300 hover:bg-black/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="p-[25px] flex flex-col gap-0">
          <li>
            <Link
              href="/"
              className={`block text-[#333] font-bold text-[20.8px] py-[18px] border-b border-black/10 transition-all duration-300 hover:text-[#333] ${isActive("/") ? "text-[#333] font-bold border-b-[3px] border-[#333]" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Domov
            </Link>
          </li>
          <li className="py-[18px] border-b border-black/10">
            <span className="block text-[#333] font-bold text-[20.8px] mb-[10px]">Služby</span>
            <ul className="pl-[15px]">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="block text-[#555] font-medium text-base py-[10px] transition-all duration-300 hover:text-[#333]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              href="/referencie"
              className={`block text-[#333] font-bold text-[20.8px] py-[18px] border-b border-black/10 transition-all duration-300 hover:text-[#333] ${isActive("/referencie") ? "text-[#333] font-bold border-b-[3px] border-[#333]" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referencie
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={`block text-[#333] font-bold text-[20.8px] py-[18px] border-b border-black/10 transition-all duration-300 hover:text-[#333] ${isActive("/kontakt") ? "text-[#333] font-bold border-b-[3px] border-[#333]" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
