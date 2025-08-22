"use client";
import HoverLinks from "@/app/components/effect/HoverLinks";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#c1121f] flex items-center justify-between md:mx-10 text-white py-4 md:rounded-xl shadow-xl relative z-50">
      {/* header */}
      <div className="flex items-center gap-3 px-5">
        <Image
          src="/aknb_logo.png"
          alt="Logo SMK AK Nusa Bangsa Bogor"
          width={60}
          height={60}
          className="cursor-pointer"
        />
        <h1 className="leading-none">
          <span className="font-bold text-lg ">AK Nusa Bangsa</span> <br />
          <span className="text-xs">Bogor</span>
        </h1>
      </div>

      {/* garis pemisah */}
      <div className="w-px hidden md:block h-12 bg-white opacity-50"></div>

      {/* hamburger button (mobile only) */}
      <button
        className="md:hidden block px-5 text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <ImCross /> : <GiHamburgerMenu />}
      </button>

      {/* menu desktop */}
      <div className="md:flex hidden gap-5 font-bold pr-5">
        <HoverLinks href="/">Beranda</HoverLinks>
        <HoverLinks href="/profilsekolah">Profil Sekolah</HoverLinks>
        <HoverLinks href="/programkeahlian">Program Keahlian</HoverLinks>
        <HoverLinks href="/ekstrakurikuler">Ekstrakurikuler</HoverLinks>
        <HoverLinks href="/beritapengumuman">Berita & Pengumuman</HoverLinks>
        <HoverLinks href="/galeri">Galeri</HoverLinks>
      </div>

      {/* menu mobile */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#990000] flex flex-col items-center gap-4 py-6 font-bold shadow-lg md:hidden z-50">
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
      )}
    </nav>
  );
}
