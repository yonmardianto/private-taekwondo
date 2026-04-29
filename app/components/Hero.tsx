"use client";

import Image from "next/image";
import Button from "./shared/Button";
import { HERO_CONTENT } from "@/lib/data";

export default function Hero() {
  const scrollToClasses = () => {
    const classesSection = document.getElementById("classes");
    classesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Taekwondo Background"
          fill
          priority
          className="object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
          {HERO_CONTENT.headline}
        </h1>
        <p className="text-xl md:text-3xl mb-12 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
          {HERO_CONTENT.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={scrollToClasses} className="text-lg px-10 py-5 rounded-full bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-2xl">
            {HERO_CONTENT.ctaText}
          </Button>
          <Button href="#about" variant="outline" className="text-lg px-10 py-5 rounded-full border-white text-white hover:bg-white hover:text-black transition-all transform hover:scale-105">
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>


    </section>
  );
}
