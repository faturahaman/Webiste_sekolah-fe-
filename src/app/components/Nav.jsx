import HoverLinks from "@/app/components/effect/HoverLinks";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="bg-[#c1121f] flex items-center justify-evenly md:mx-10 text-white py-4 md:rounded-xl shadow-xl">
      {/* header */}
      <div className="flex items-center gap-5">
        <Image
          src="/aknb_logo.png"
          alt="Logo SMK AK Nusa Bangsa Bogor"
          width={80} // wajib ada width & height
          height={80}
          className="max-w-20 cursor-pointer"
        />
        <h1>
          <span className="font-bold text-xl">AK Nusa Bangsa</span> <br />{" "}
          <span className="text-sm">Bogor</span>
        </h1>
      </div>

      {/* garis vertikal */}
      <div className="w-px h-12 bg-white opacity-50"></div>

      {/* link */}
      <div className="md:flex hidden gap-3 font-bold">
        <HoverLinks href="/">Beranda</HoverLinks>
        <HoverLinks href="/profilsekolah">Profil Sekolah</HoverLinks>
        <HoverLinks href="/programkeahlian">
          Program Keahlian
        </HoverLinks>
        <HoverLinks href="/ekstrakurikuler">Ekstrakurikuler</HoverLinks>
        <HoverLinks href="/beritapengumuman">
          Berita & Pengumuman
        </HoverLinks>
        <HoverLinks href="/galeri">Galeri</HoverLinks>
      </div>
    </nav>
  );
}
