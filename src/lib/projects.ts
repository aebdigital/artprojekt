export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  year: string;
  location: string;
  client: string;
  folder: string;
  images: string[];
  thumbnail: string;
}

export const projects: Project[] = [
  {
    slug: "rd-trnava-bazen",
    title: "RD Trnava – bazén v Átriu",
    description: "Moderný rodinný dom s bazénom v átriu v Trnave.",
    fullDescription: "Jedinečný projekt rodinného domu s integrovaným bazénom v átriu, ktorý spája moderné bývanie s relaxáciou. Átrium s bazénom vytvára súkromný priestor pre oddych a zároveň prináša svetlo do interiéru.",
    year: "2023",
    location: "Trnava",
    client: "súkromná osoba",
    folder: "RD Trnava - bazen v Atriu",
    images: [
      "RD-TT-bazen-1.jpg",
      "RD-TT-bazen-2.jpg",
      "RD-TT-bazen-3.jpg",
      "RD-TT-bazen-4.jpg",
      "RD-TT-bazen-5.jpg",
    ],
    thumbnail: "/images/referencie/RD-TT-bazen-2-750x450.jpg",
  },
  {
    slug: "rd-cervenik",
    title: "RD Červeník",
    description: "Rodinný dom v obci Červeník navrhnutý s dôrazom na moderné bývanie.",
    fullDescription: "Rodinný dom v obci Červeník navrhnutý s dôrazom na moderné bývanie a funkčnosť priestorov. Projekt spája súčasné architektonické trendy s tradičnými prvkami, vytvárajúc harmonické riešenie pre mladú rodinu. Dôraz bol kladený na maximálne využitie prirodzeného svetla a spojenie interiéru s exteriérom.",
    year: "2021",
    location: "Červeník",
    client: "súkromná osoba",
    folder: "RD Cervenik",
    images: [
      "RD-Cervenik-1.jpg",
      "RD-Cervenik-2.jpg",
      "RD-Cervenik-3.jpg",
      "RD-Cervenik-4.jpg",
      "RD-Cervenik-5.jpg",
      "RD-Cervenik-6.jpg",
      "RD-Cervenik-7.jpg",
    ],
    thumbnail: "/images/referencie/RD-Cervenik-1-750x450.jpg",
  },
  {
    slug: "rd-sokolovce",
    title: "RD Sokolovce",
    description: "Moderný rodinný dom v obci Sokolovce s dôrazom na energetickú efektívnosť.",
    fullDescription: "Moderný rodinný dom v obci Sokolovce navrhnutý s dôrazom na energetickú efektívnosť a súčasný dizajn. Projekt predstavuje harmonickú kombináciu modernej architektúry s praktickými riešeniami pre komfortné bývanie. Osobitná pozornosť bola venovaná orientácii domu a maximálnemu využitiu denného svetla.",
    year: "2022",
    location: "Sokolovce",
    client: "súkromná osoba",
    folder: "RD Sokolovce",
    images: [
      "RD-Sokolovce-1.jpg",
      "RD-Sokolovce-2.jpg",
      "RD-Sokolovce-3.jpg",
      "RD-Sokolovce-4.jpg",
      "RD-Sokolovce-5.jpg",
    ],
    thumbnail: "/images/referencie/RD-Sokolovce-1-750x450.jpg",
  },
  {
    slug: "rd-lovcice-altan",
    title: "RD Lovčice – altán vo svahu",
    description: "Náročný projekt altánu situovaného vo svahu s krásnym výhľadom.",
    fullDescription: "Náročný projekt altánu situovaného vo svahu s krásnym výhľadom na okolité vinohradnícke krajiny. Projekt rieši komplikovaný sklonitý terén inovatívnym spôsobom, pričom maximálne využíva prírodné danosti lokality. Altán poskytuje ideálne miesto na relaxáciu s panoramatickým výhľadom na vinohrady a okolie Lovčíc.",
    year: "2019",
    location: "Lovčice",
    client: "súkromná osoba",
    folder: "RD Lovcice - altan vo svahu",
    images: [
      "RD-Lovcice-1.jpg",
      "RD-Lovcice-2.jpg",
      "RD-Lovcice-3.jpg",
      "RD-Lovcice-4.jpg",
      "RD-Lovcice-5.jpg",
      "RD-Lovcice-podorys.jpg",
      "RD-Lovcice-rezy.jpg",
    ],
    thumbnail: "/images/referencie/oravne-1-750x450.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
