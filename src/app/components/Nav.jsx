import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="bg-[#c1121f] flex items-center justify-around mx-15 text-white py-4 rounded-xl shadow-xl">
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
      <div className="flex gap-5">
        <Link href="/">Beranda</Link>
        <Link href="/profilsekolah">Profil Sekolah</Link>
        <Link href="/programkeahlian">Program Keahlian</Link>
        <Link href="/ekstrakurikuler">Ekstrakurikuler</Link>
        <Link href="/beritapengumuman">Berita & Pengumuman</Link>
        <Link href="/galeri">Galeri</Link>
      </div>
    </nav>
  );
}
