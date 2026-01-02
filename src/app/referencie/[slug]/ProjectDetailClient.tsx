"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import { Project } from "@/lib/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = project.images.map(
    (img) => `/images/referencie/${project.folder}/${img}`
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Project Detail Container */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - Project Info */}
        <div className="w-full lg:w-[400px] bg-white p-8 lg:p-12 pt-28 lg:pt-32 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <div className="max-w-[350px] mx-auto lg:mx-0">
            <span className="w-[60px] h-[3px] bg-[#333] block mb-6" />
            <h1 className="text-3xl md:text-4xl font-semibold text-[#222] mb-6 leading-tight">
              {project.title}
            </h1>

            <div className="text-base leading-[1.8] text-[#555] mb-8">
              <p>{project.fullDescription}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <span className="text-sm font-semibold text-[#888] w-[80px]">Rok</span>
                <span className="text-sm text-[#333]">{project.year}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-semibold text-[#888] w-[80px]">Miesto</span>
                <span className="text-sm text-[#333]">{project.location}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-semibold text-[#888] w-[80px]">Klient</span>
                <span className="text-sm text-[#333]">{project.client}</span>
              </div>
            </div>

            <Link
              href="/referencie"
              className="inline-flex items-center gap-2 text-[#333] font-medium text-sm hover:text-[#555] transition-colors duration-300"
            >
              ← Späť na referencie
            </Link>
          </div>
        </div>

        {/* Right Content - Photo Gallery */}
        <div className="flex-1 bg-[#f5f5f5]">
          {/* Main Image - Full width to match grid below */}
          {project.images.length > 0 && (
            <div className="bg-white">
              <div
                className="relative w-full aspect-[16/10] bg-[#f5f5f5] cursor-pointer overflow-hidden group"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={`/images/referencie/${project.folder}/${project.images[0]}`}
                  alt={`${project.title} - hlavný obrázok`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#333]">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Images Grid */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5] cursor-pointer group"
                  onClick={() => openLightbox(index + 1)}
                >
                  <Image
                    src={`/images/referencie/${project.folder}/${image}`}
                    alt={`${project.title} - ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#333]">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt={project.title}
      />
    </div>
  );
}
