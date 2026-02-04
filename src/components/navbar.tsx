import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./navbarMenu";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 h-16">

      <Link
        href="/"
        className="
          absolute 
          left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2
          transition-transform duration-300 ease-out
          hover:scale-110
          cursor-pointer
        "
      >
        <Image
          src="/brandLogo.png"
          alt="ARGM Logo"
          width={110}
          height={70}
          priority
          className="object-contain"
        />
      </Link>

      <NavbarMenu />

    </nav>
  );
}
