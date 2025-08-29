"use client";

import HoverLinks from "@/app/components/effect/HoverLinks";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#c1121f]/95 backdrop-blur-md flex items-center justify-between md:mx-10 text-white py-3 px-5 md:rounded-xl shadow-lg transition-all duration-300">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <Image
          src="/aknb_logo.png"
          alt="Logo SMK AK Nusa Bangsa Bogor"
          width={50}
          height={50}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <h1 className="leading-tight">
          <span className="font-bold text-lg tracking-wide">
            AK Nusa Bangsa
          </span>{" "}
          <br />
          <span className="text-xs opacity-90">Bogor</span>
        </h1>
      </div>

      {/* Garis pemisah */}
      <div className="w-px hidden md:block h-10 bg-white/40"></div>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden block text-2xl hover:scale-110 transition-transform duration-300"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <ImCross /> : <GiHamburgerMenu />}
      </button>

      {/* Menu Desktop */}
      <div className="md:flex hidden gap-6 font-semibold text-sm">
        <HoverLinks href="/">Beranda</HoverLinks>
        <HoverLinks href="/profilsekolah">Profil Sekolah</HoverLinks>
        <HoverLinks href="/programkeahlian">Program Keahlian</HoverLinks>
        <HoverLinks href="/ekstrakurikuler">Ekstrakurikuler</HoverLinks>
        <HoverLinks href="/beritapengumuman">Berita & Pengumuman</HoverLinks>
        <HoverLinks href="/galeri">Galeri</HoverLinks>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-full left-0 w-full bg-[#a00000] flex flex-col items-center gap-5 font-semibold text-base shadow-md md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 py-6 opacity-100" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <HoverLinks href="/" onClick={() => setOpen(false)}>
          Beranda
        </HoverLinks>
        <HoverLinks href="/profilsekolah" onClick={() => setOpen(false)}>
          Profil Sekolah
        </HoverLinks>
        <HoverLinks href="/programkeahlian" onClick={() => setOpen(false)}>
          Program Keahlian
        </HoverLinks>
        <HoverLinks href="/ekstrakurikuler" onClick={() => setOpen(false)}>
          Ekstrakurikuler
        </HoverLinks>
        <HoverLinks href="/beritapengumuman" onClick={() => setOpen(false)}>
          Berita & Pengumuman
        </HoverLinks>
        <HoverLinks href="/galeri" onClick={() => setOpen(false)}>
          Galeri
        </HoverLinks>
      </div>
    </nav>
  );
}
