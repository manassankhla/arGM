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
                <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20 px-6 text-center text-white max-w-4xl">
                    <h1 className="font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        ARGM Architecture Beyond Boundaries
                    </h1>

                    <p className="mt-4 font-body text-sm sm:text-base text-gray-200">
                        Where Vision Meets Form. Crafting signature architectural and spatial
                        experiences that blend context, creativity, and human connection.
                    </p>
                </div>

               {/* SCROLL ICON — FIGMA PERFECT */}
<div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-50">
  <div className="relative translate-y-[-50%]">
    <div
      className="w-12 h-16 rounded-full bg-black text-white
                 flex items-center justify-center
                 border border-white/60 shadow-lg animate-bounce">
      ↓
    </div>
  </div>
</div>



            </div>
        </section>
    );
}
