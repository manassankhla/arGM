"use client";

import Image from "next/image";

export default function Award() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* ================= VERTICAL GRID LINES ================= */}
      <div className="absolute inset-0 flex justify-between px-[8vw] pointer-events-none z-0">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="w-px bg-gray-200" />
        ))}
      </div>



      {/* ================= BLACK STRIP (FULL WIDTH BACKGROUND) ================= */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[240px] bg-black z-0" />



      {/* ================= LEFT TEXT (CENTERED INSIDE STRIP) ================= */}
      <div className="relative z-20 pl-[8vw] h-[240px] flex flex-col justify-center max-w-xl text-white">

        <h2 className="italic text-6xl font-light mb-6">
          Awards / Insights
        </h2>

        <p className="text-gray-300 text-sm leading-relaxed">
          Our work has been recognized for its design clarity, innovation,
          and thoughtful approach to architecture and interiors.
        </p>

      </div>



      {/* ================= RIGHT IMAGES (ABOVE STRIP) ================= */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-160px] flex gap-12 z-50">

        {/* IMAGE 1 */}
        <div className="w-[360px] shrink-0">
          <div className="rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="/Hero-Page-Images/awards/award1.png"
              alt="Award 1"
              width={400}
              height={520}
              className="object-cover"
            />
          </div>

          <p className="mt-6 text-lg italic text-gray-900">
            Zenith Awards: Excellence in Spatial Design
          </p>
        </div>


        {/* IMAGE 2 (auto half cut because parent moved) */}
        <div className="w-[360px] shrink-0">
          <div className="rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="/Hero-Page-Images/awards/award2.png"
              alt="Award 2"
              width={400}
              height={520}
              className="object-cover"
            />
          </div>

          <p className="mt-6 text-lg italic text-gray-900">
            Zenith Awards: Excellence in Spatial Design
          </p>
        </div>
        

      </div>
      
      

    </section>
  );
}
