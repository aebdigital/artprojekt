"use client";

import { useState } from "react";

export default function MapOverlay() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1!2d17.4833!3d48.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b5f0c8f8f8f8f%3A0x0!2zRG9sbsOpIER1Ym92w6kgMjQ0!5e0!3m2!1ssk!2ssk!4v1635789123456!5m2!1ssk!2ssk"
        width="100%"
        height="400"
        style={{ border: 0, pointerEvents: active ? "auto" : "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ART PROJEKT s.r.o. - Dolné Dubové 244"
        className="w-full"
      />
      {!active && (
        <div
          onClick={() => setActive(true)}
          className="absolute inset-0 cursor-pointer group"
        >
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Kliknite pre interakciu s mapou
          </div>
        </div>
      )}
    </div>
  );
}
