import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-around text-sm py-4">
        {/* contact */}
        <div className="flex gap-3">
          <Link
            className="hover:text-red-500 transition-all flex items-center gap-2"
            href="https://api.whatsapp.com/send/?phone=%2B6281210950042&text&type=phone_number&app_absent=0"
          >
            <FaSquareWhatsapp />
            0812-1095-0042
          </Link>
          <div className="flex items-center gap-2 ">
            <MdEmail />
            <p>smkaknusabangsa@gmail.com</p>
          </div>
        </div>

        {/* sosial */}
        <div className="flex gap-2 text-lg">
          <Link
            href="https://www.instagram.com/smkaknusabangsa/"
            className="hover:text-red-500 transition-all"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href="https://www.tiktok.com/@smkaknusabangsa"
            className="hover:text-red-500 transition-all"
          >
            <FaTiktok />
          </Link>
          <Link
            href="https://youtube.com/@smkaknusabangsabogor2819?si=rkCEwWEQ3YoXyrwm"
            className="hover:text-red-500 transition-all"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.facebook.com/smkaknusabangsa/"
            className="hover:text-red-500 transition-all"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://x.com/Smkaknusabangsa"
            className="hover:text-red-500 transition-all"
          >
            <FaSquareXTwitter />
          </Link>
        </div>
      </header>
    </>
  );
}
