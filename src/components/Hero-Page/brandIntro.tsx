import Container from "../container";
import Image from "next/image";
import Link from "next/link";

export default function BrandIntroduction() {
  return (

    <section id="brand-intro" className="relative bg-white pt-24 pb-6 md:py-8 lg:py-10 overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background Logo */}
      <Container>
        <div className="absolute top-20 left-30 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[460px] opacity-80 pointer-events-none select-none z-0 transform -translate-x-1/4 -translate-y-1/4">
          <Image
            src="/brandLogoGray.png"
            alt="Brand Logo"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>


        <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">

          {/* LEFT CONTENT */}
          <div className="relative">


            <h2 className="font-heading text-black italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6">
              Brand Introduction
            </h2>

            <p className="font-body text-black text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-5 leading-relaxed md:leading-loose">
              Architecture, for us, is not just about buildings — it is about
              emotions, experiences, and the stories people live within spaces.
            </p>

            <p className="font-body text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed">
              ARGM – Architecture Beyond Boundaries was founded on the belief that
              meaningful design emerges when creativity meets context, and form
              follows purpose. Every project begins with listening — to the site,
              to the client, and to the lifestyle the space is meant to support.
              ARGM – Architecture Beyond Boundaries was founded on the belief that
              meaningful design emerges when creativity meets context, and form
              follows purpose. Every project begins with listening — to the site,
              to the client, and to the lifestyle the space is meant to support.
            </p>
            {/* Button */}
            <div className="flex justify-start md:justify-left mt-6 md:mt-10 mb-5">
              <Link
                href="/about"
                className="
      inline-flex items-center
      h-[64px]
      px-[36px] py-[20px]
      gap-2
      rounded-[100px]
      bg-black text-white
      border border-black
      text-sm
      transition-all duration-300
      hover:bg-white hover:text-black
      group
    "
              >
                Explore More
                {/* Arrow */}
                <span className="transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </Link>
            </div>
          </div>
          {/* RIGHT IMAGE STACK */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[550px] aspect-4/5 mx-auto mt-10 md:mt-0">

            {/* MAIN LEFT IMAGE (TALL) */}
            <div className="absolute left-0 top-[10%] w-[65%] h-[65%] z-10 rounded-[32px] overflow-hidden shadow-md">
              <Image
                src="/Hero-Page-Images/introImage/introMain.png"
                alt="Interior design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* TOP RIGHT IMAGE (SQUARE) */}
            <div className="absolute top-0 right-0 w-[40%] aspect-square z-0 rounded-[24px] overflow-hidden shadow-lg">
              <Image
                src="/Hero-Page-Images/introImage/introTop.png"
                alt="Chair design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* BOTTOM RIGHT IMAGE (WIDE WITH WHITE BORDER) */}
            <div className="absolute bottom-[15%] -right-[5%] w-[60%] h-[30%] z-20 bg-white p-2 rounded-[28px] shadow-xl">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                <Image
                  src="/Hero-Page-Images/introImage/introBottom.png"
                  alt="Table design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>

          </div>


        </div>
      </Container>

    </section>

  );
}
