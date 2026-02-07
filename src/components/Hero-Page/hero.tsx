"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[100svh] w-full">

            {/* WHITE BASE (BACKGROUND FOR TRIANGLE) */}
            <div className="absolute inset-0 bg-white"></div>

            {/* HERO IMAGE WITH TRIANGLE CUT */}
            <div className="relative h-full w-full overflow-hidden
      [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]
      sm:[clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">

                <Image
                    src="/Hero-Page-Images/hero.png"
                    alt="Architecture"
                    fill
                    priority
                    className="object-cover"
                />

                {/* TEXT */}
                <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20 px-6 text-center text-white w-full max-w-4xl lg:max-w-full">
                    <h1 className="font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-normal lg:whitespace-nowrap">
                        ARGM Architecture Beyond Boundaries
                    </h1>

                    <p className="mt-4 font-body text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                        Where Vision Meets Form. Crafting signature architectural and spatial
                        experiences that blend context, creativity, and human connection.
                    </p>
                </div>



            </div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-50">
                <button
                    onClick={() => {
                        const element = document.getElementById('brand-intro');
                        element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="relative translate-y-[50%] group cursor-pointer"
                    aria-label="Scroll to Brand Introduction"
                >
                    <div
                        className="w-[60px] h-[80px] rounded-full bg-black
                                     flex items-center justify-center
                                     border-[3px] border-white shadow-2xl
                                     transition-transform duration-300 ease-out
                                     group-hover:scale-105 group-hover:-translate-y-1">
                        <span className="text-white animate-bounce">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14" />
                                <path d="M19 12l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>
                </button>
            </div>
        </section>
    );
}
