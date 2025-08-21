import Link from "next/link";

export default function HoverLinks({ href, children }) {
  return (
    <Link href={href} className="relative group inline-block px-2 py-1">
      {children}
      <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-3/6"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-3/6"></span>
    </Link>
  );
}
