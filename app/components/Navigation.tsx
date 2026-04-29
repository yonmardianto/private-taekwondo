"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./shared/Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Manfaat", href: "#benefits" },
    { label: "Kelas", href: "#classes" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transform group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/pbti-logo.png"
                alt="Logo Taekwondo Indonesia"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-gray-900 leading-none">
                PRIVATE
              </span>
              <span className="text-xs font-bold text-primary tracking-[0.2em] leading-none mt-1">
                TAEKWONDO
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="text-sm px-6 py-2.5 rounded-full">
              Daftar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-lg font-bold text-gray-900 hover:bg-primary/5 hover:text-primary rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-4">
              <Button href="#contact" className="w-full py-4 text-center justify-center rounded-2xl">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
