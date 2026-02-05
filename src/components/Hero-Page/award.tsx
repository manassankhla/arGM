"use client";

import Image from "next/image";

export default function Award() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">

      {/* ================= VERTICAL GRID LINES (Desktop only) ================= */}
      <div className="absolute inset-0 hidden lg:flex justify-between px-[8vw] pointer-events-none z-0">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="w-px bg-gray-200" />
        ))}
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ================= LEFT TEXT SECTION ================= */}
          <div className="bg-black text-white p-8 md:p-12 lg:p-16 rounded-3xl lg:rounded-none">

            <h2 className="italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 md:mb-6">
              Awards / Insights
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
              Our work has been recognized for its design clarity, innovation,
              and thoughtful approach to architecture and interiors.
            </p>

          </div>

          {/* ================= RIGHT IMAGES SECTION ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">

            {/* IMAGE 1 */}
            <div className="group">
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/Hero-Page-Images/awards/award1.png"
                  alt="Award 1"
                  width={400}
                  height={520}
                  className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="mt-4 md:mt-6 text-base md:text-lg italic text-gray-900 font-serif">
                Zenith Awards: Excellence in Spatial Design
              </p>
            </div>

            {/* IMAGE 2 */}
            <div className="group">
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/Hero-Page-Images/awards/award2.png"
                  alt="Award 2"
                  width={400}
                  height={520}
                  className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="mt-4 md:mt-6 text-base md:text-lg italic text-gray-900 font-serif">
                Zenith Awards: Excellence in Spatial Design
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
