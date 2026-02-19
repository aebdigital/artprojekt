"use client";

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

const heroImages = [
  "/images/referencie/1-Bohunka-750x450.jpg",
  "/images/referencie/10-750x450.jpg",
  "/images/referencie/JB-parkovisko-2-750x450.jpg",
  "/images/referencie/RD-Cervenik-1-750x450.jpg",
  "/images/referencie/RD-Sokolovce-1-750x450.jpg",
  "/images/referencie/RD-TT-bazen-2-750x450.jpg",
  "/images/referencie/oravne-1-750x450.jpg",
];

interface ServicePageLayoutProps {
  title: string;
  mainTitle: string;
  description: string;
  children: React.ReactNode;
  heroImageIndex?: number;
}

export default function ServicePageLayout({
  title,
  mainTitle,
  description,
  children,
  heroImageIndex = 0,
}: ServicePageLayoutProps) {
  const pathname = usePathname();
  const heroImage = heroImages[heroImageIndex % heroImages.length];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt={title}
            fill
            className="object-cover object-[center_55%]"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-[95%] mx-auto px-5 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
            {title}
          </h1>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="bg-white py-[60px] md:py-[40px]">
        <div className="max-w-[95%] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr] gap-[30px] lg:gap-[60px] items-start">
            {/* Sidebar Navigation */}
            <aside className="lg:sticky lg:top-[100px] order-first">
              <nav className="flex flex-col max-[480px]:flex-col md:flex-row md:flex-wrap lg:flex-col gap-0 border-l-2 max-[480px]:border-l-2 md:border-l-0 md:border-b-2 lg:border-l-2 lg:border-b-0 border-[#e0e0e0] md:pb-[10px] lg:pb-0">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`py-[15px] px-5 md:py-[10px] md:px-[15px] lg:py-[15px] lg:px-5 text-[#555] no-underline text-[0.95rem] md:text-[0.85rem] lg:text-[0.95rem] font-medium transition-all duration-300 border-l-2 md:border-l-0 md:border-b-2 lg:border-l-2 lg:border-b-0 border-transparent -ml-[2px] md:ml-0 md:-mb-[12px] lg:-ml-[2px] lg:mb-0 hover:text-[#222] hover:bg-[#f8f8f8] hover:border-l-[#888] md:hover:border-l-transparent md:hover:border-b-[#222] lg:hover:border-l-[#888] lg:hover:border-b-transparent ${
                      pathname === service.href
                        ? "text-[#222] font-semibold border-l-[#222] md:border-l-transparent md:border-b-[#222] lg:border-l-[#222] lg:border-b-transparent bg-[#f5f5f5]"
                        : ""
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div>
              {/* Text Content */}
              <div className="flex flex-col">
                <span className="w-[60px] h-[3px] bg-[#333] block mb-5" />
                <h2 className="text-[2.5rem] md:text-[2rem] max-[480px]:text-[1.8rem] font-semibold mb-5 text-[#222] tracking-[0.5px] leading-[1.2]">
                  {mainTitle}
                </h2>
                <p className="text-[1.1rem] md:text-base leading-[1.6] text-[#555] mb-[30px]">
                  {description}
                </p>

                {/* Service Details */}
                <div className="flex flex-col">
                  {children}

                  <p className="mt-[30px] pt-5 border-t border-[#e0e0e0] text-base leading-[1.6] text-[#555]">
                    V prípade záujmu o bližšie informácie či cenovú ponuku nás{" "}
                    <Link href="/kontakt" className="text-[#222] font-semibold underline transition-colors duration-300 hover:text-[#555]">
                      kontaktujte
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
