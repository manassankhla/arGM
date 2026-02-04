"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function NavbarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HAMBURGER BUTTON ================= */}
      <button
        aria-label="Open Menu"
        onClick={() => setOpen(true)}
        className={`
          absolute text-black right-6 top-1/2 -translate-y-1/2
          z-50 cursor-pointer transition-all duration-300
          ${open ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <Image src="/hamburgerLogo.svg" alt="menu" width={32} height={22} />
      </button>



      {/* ================= OVERLAY MENU ================= */}
      <div
        className={`
          fixed inset-0 z-40 text-white
          overflow-y-auto
          transition-all duration-500 ease-in-out
          ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >

        {/* ================= BACKGROUND (PERFECT RESPONSIVE) ================= */}
        {/* Mobile → contain (full visible) | Desktop → cover */}
        <div
          className="
            fixed inset-0 -z-10
            bg-[url('/hamburger.jpg')]
            bg-no-repeat
            bg-contain bg-center
            md:bg-cover md:bg-center
          "
        />

        {/* Dark overlay */}
        <div className="fixed inset-0 -z-10 bg-black/80 md:bg-black/60 backdrop-blur-sm" />



        {/* ================= CONTENT ================= */}
        <div className="relative min-h-screen flex flex-col md:flex-row py-20">

          {/* ================= LEFT MENU ================= */}
<div className="w-full md:w-1/2 flex items-center justify-start px-8 md:px-20">

  <div className="text-left space-y-5 text-2xl md:text-3xl text-yellow-600 font-light tracking-wide">

    {[
      { name: "About Us", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Team Page", path: "/team" },
      { name: "Career", path: "/career" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Awards & Events", path: "/awards" },
      { name: "Blogs", path: "/blogs" },
      { name: "Contact Us", path: "/contact" },
    ].map((item) => (
      <Link
        key={item.name}
        href={item.path}
        onClick={() => setOpen(false)}
        className="block cursor-pointer hover:text-white transition"
      >
        {item.name}
      </Link>
    ))}

  </div>
</div>




          {/* ================= CENTER DIVIDER (DESKTOP ONLY) ================= */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-1/2 bg-white/40" />
          </div>



          {/* ================= RIGHT CONTACT ================= */}
          <div className="w-full md:w-1/2 flex items-center px-8 md:px-20 mt-16 md:mt-0">

            <div className="max-w-md space-y-4 text-gray-200">

              <h2 className="text-xl text-yellow-600 tracking-widest">
                CONTACT US
              </h2>

              <p>
                Head Office:{" "}
                <span className="text-yellow-600 hover:text-white cursor-pointer">
                  G-178, Sector 44, Noida (NCR)
                </span>
              </p>

              <p>
                Phone:{" "}
                <span className="text-yellow-600 hover:text-white cursor-pointer">
                  0120-4371060
                </span>
              </p>



              {/* ================= EMAIL ================= */}
              <div className="pt-6 space-y-6">

                <h2 className="text-yellow-600 text-xl tracking-widest">
                  EMAIL
                </h2>

                <div className="grid grid-cols-[140px_15px_1fr] gap-y-3">

                  <span>Design Services</span>
                  <span>:</span>
                  <span className="text-yellow-600 hover:text-white cursor-pointer">
                    manas@gmail.com
                  </span>

                  <span>Career</span>
                  <span>:</span>
                  <span className="text-yellow-600 hover:text-white cursor-pointer">
                    manas@gmail.com
                  </span>

                  <span>Media & Press</span>
                  <span>:</span>
                  <span className="text-yellow-600 hover:text-white cursor-pointer">
                    manas@gmail.com
                  </span>

                </div>
              </div>

            </div>
          </div>



          {/* ================= CLOSE BUTTON ================= */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-8 text-4xl"
          >
            ✕
          </button>

        </div>
      </div>
    </>
  );
}
