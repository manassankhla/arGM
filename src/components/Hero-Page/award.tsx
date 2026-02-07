"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Award() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const awards = [
    { image: "/Hero-Page-Images/awards/award1.png", title: "Zenith Awards: Excellence in Spatial Design" },
    { image: "/Hero-Page-Images/awards/award2.png", title: "Zenith Awards: Excellence in Spatial Design" },
    { image: "/Hero-Page-Images/awards/award1.png", title: "Zenith Awards: Excellence in Spatial Design" },
    { image: "/Hero-Page-Images/awards/award2.png", title: "Zenith Awards: Excellence in Spatial Design" },
  ];

  /* ================= BOUNCE SCROLL (LEFT ↔ RIGHT) ================= */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frame: number;
    let direction = 1; // 1 → right, -1 → left
    const speed = 0.8;

    const animate = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;

      el.scrollLeft += speed * direction;

      // reach right → go left
      if (el.scrollLeft >= maxScroll) {
        el.scrollLeft = maxScroll;
        direction = -1;
      }

      // reach left → go right
      if (el.scrollLeft <= 0) {
        el.scrollLeft = 0;
        direction = 1;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="
        relative py-20 lg:py-28 overflow-hidden
        bg-black lg:bg-white   /* mobile full black */
      "
    >
      {/* ================= DESKTOP BLACK STRIP ================= */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[100%] h-[300px] bg-black" />

      {/* ================= CONTENT ================= */}
      <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        {/* ================= TEXT ================= */}
        <div className="w-full lg:w-[40%] px-6 lg:pl-24 text-white text-center lg:text-left">
          <h2 className="font-heading italic text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            Awards / Insights
          </h2>

          <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
            Our work has been recognized for its design clarity,
            innovation, and thoughtful approach to architecture
            and interiors.
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div
          ref={scrollRef}
          className="
            w-full
            lg:w-[600px]   /* 1 FULL + 1 HALF card */
            overflow-hidden
            ml-auto        /* touch right */
            pl-0 lg:pl-10
          "
        >
          <div className="flex gap-8 w-max">

            {awards.map((award, index) => (
              <div
                key={index}
                className="shrink-0 w-[85vw] sm:w-[380px]"
              >
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={400}
                    height={520}
                    className="object-cover w-full h-[460px]"
                  />
                </div>

                <p className="italic mt-5 text-white lg:text-black text-center lg:text-left">
                  {award.title}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
