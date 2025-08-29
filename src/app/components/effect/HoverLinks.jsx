"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HoverLinks({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group inline-block px-2 py-1"
    >
      {children}

      {/* underline kiri */}
      <span
        className={`absolute -bottom-1 left-1/2 h-0.5 bg-yellow-300 transition-all duration-500 ease-out ${
          isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
        }`}
      />

      {/* underline kanan */}
      <span
        className={`absolute -bottom-1 right-1/2 h-0.5 bg-yellow-300 transition-all duration-500 ease-out ${
          isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
        }`}
      />
    </Link>
  );
}
