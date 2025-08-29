"use client";

import Image from "next/image";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Daftar gambar banner
const bannerImages = [
  "/sekolah.jpg",
  "/471269024_1348898676413282_628383651423106230_n.jpg",
  "/DSC_0169.JPG",
  "/DSC_0008.JPG"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ganti gambar setiap 3 detik (desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Header />
      <Nav />

      {/* Desktop Banner (animasi) */}
      <div className="relative mx-10 mt-5 h-120 overflow-hidden rounded-xl shadow-lg hidden md:block">
        <AnimatePresence>
          <motion.div
            key={bannerImages[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bannerImages[currentIndex]}
              alt="Background sekolah"
              fill
              priority
              className="object-cover"
              style={{
                transform: "scale(1.1)",
                animation: "pan 20s infinite alternate ease-in-out",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gelap (lebih gelap) */}
        <div className="absolute inset-0 bg-black/60"></div> {/* Opacity dinaikkan dari 40% ke 60% */}

        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          {/* Wave 1 */}
          <motion.div
            className="absolute top-0 left-0 w-[200%] h-full flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative w-1/2 h-full">
              <Image src="/wave.svg" alt="Wave" fill className="object-cover opacity-80" />
            </div>
            <div className="relative w-1/2 h-full">
              <Image src="/wave.svg" alt="Wave" fill className="object-cover opacity-80" />
            </div>
          </motion.div>

          {/* Wave 2 */}
          <motion.div
            className="absolute top-0 left-0 w-[200%] h-full flex"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative w-1/2 h-full">
              <Image src="/wave2.svg" alt="Wave 2" fill className="object-cover opacity-75" />
            </div>
            <div className="relative w-1/2 h-full">
              <Image src="/wave2.svg" alt="Wave 2" fill className="object-cover opacity-75" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Hero (statis) */}
      <div className="relative mx-4 mt-5 h-72 rounded-xl shadow-lg block md:hidden">
        <Image
          src={bannerImages[0]}
          alt="Background sekolah"
          fill
          className="object-cover rounded-xl"
          priority
        />
        {/* Overlay gelap mobile */}
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div> {/* Opacity 50% */}
        {/* Teks hero */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-2xl font-bold text-center">Selamat Datang di Sekolah Kami</h1>
          <p className="text-center mt-2 text-sm md:text-base">Mari belajar dan berkembang bersama</p>
        </div>
      </div>

      {/* Keyframes untuk efek pan kiri-kanan */}
      <style jsx global>{`
        @keyframes pan {
          0% { object-position: 0% 50%; }
          100% { object-position: 100% 50%; }
        }
      `}</style>
    </main>
  );
}
  