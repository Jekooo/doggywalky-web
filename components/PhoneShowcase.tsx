"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDE_DURATION_MS = 4000;

const screens = [
  { id: "accueil", label: "Accueil", src: "/screenshots/accueil.jpg" },
  { id: "balades", label: "Balades", src: "/screenshots/balades.jpg" },
  { id: "evenements", label: "Évènements", src: "/screenshots/evenements.jpg" },
  { id: "profil", label: "Profil", src: "/screenshots/profil.jpg" },
];

export function PhoneShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[1080/2340] max-w-sm mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl"></div>

      {/* Phone frame */}
      <div className="relative bg-text rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-text rounded-b-2xl z-20"></div>

        {/* Screen container */}
        <div className="relative bg-background rounded-[2.2rem] aspect-[1080/2340] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {screens.map((screen) => (
              <div
                key={screen.id}
                className="w-full h-full flex-shrink-0 relative"
              >
                <Image
                  src={screen.src}
                  alt={`Doggy Walky — ${screen.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                  priority={screen.id === "accueil"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            onClick={() => setCurrent(index)}
            aria-label={`Voir ${screen.label}`}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-primary"
                : "w-2 bg-outline-variant hover:bg-text-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
