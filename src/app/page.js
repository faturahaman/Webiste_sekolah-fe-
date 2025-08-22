import Image from "next/image";
import Nav from "@/app/components/Nav"
import Header from "@/app/components/Header"

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="md:relative hidden md:block w-full h-screen -mt-5">
        <Image src="/sekolah.jpg" alt="Background sekolah" fill priority className="object-cover rounded-xl" />

        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/40"></div>

        <Image src="/wave.svg" alt="Efek wave" fill priority className="object-cover opacity-80" />
      </div>
    </main>
  );
}
