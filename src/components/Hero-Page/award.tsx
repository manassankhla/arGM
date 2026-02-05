"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Award() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const awards = [
    {
      image: "/Hero-Page-Images/awards/award1.png",
      title: "Zenith Awards: Excellence in Spatial Design",
    },
    {
      image: "/Hero-Page-Images/awards/award2.png",
      title: "Zenith Awards: Excellence in Spatial Design",
    },
    {
      image: "/Hero-Page-Images/awards/award1.png",
      title: "Zenith Awards: Excellence in Spatial Design",
    },
    {
      image: "/Hero-Page-Images/awards/award2.png",
      title: "Zenith Awards: Excellence in Spatial Design",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startAutoScroll = () => {
      if (isPaused) return;

      scrollInterval = setInterval(() => {
        if (scrollContainer && !isPaused) {
          const cardWidth = 360 + 24; // card width + gap
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

          // If we've reached the end, reset to start
          if (scrollContainer.scrollLeft >= maxScroll - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
          }
        }
      }, 3000); // Scroll every 3 seconds
    };

    startAutoScroll();

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      isPaused = false;
      startAutoScroll();
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-6 md:py-8 lg:py-10 overflow-hidden bg-white">
      <div className="relative">
        {/* Full Width Black Background */}
        <div className="bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

            {/* ================= LEFT TEXT SECTION ================= */}
            <div className="text-white p-8 md:p-12 lg:p-16 xl:p-20 lg:min-h-[400px] flex flex-col justify-center">
              <div className="max-w-xl lg:ml-auto lg:mr-8">
                <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6">
                  Awards / Insights
                </h2>

                <p className="font-body text-gray-300 text-sm md:text-base leading-relaxed">
                  Our work has been recognized for its design clarity, innovation,
                  and thoughtful approach to architecture and interiors.
                </p>
              </div>
            </div>

            {/* ================= RIGHT SCROLLING AWARDS SECTION ================= */}
            <div className="relative px-4 md:px-6 lg:px-8 py-8 lg:py-12">
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {awards.map((award, index) => (
                  <div key={index} className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] group">
                    <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={award.image}
                        alt={award.title}
                        width={400}
                        height={520}
                        className="object-cover w-full h-[360px] sm:h-[420px] md:h-[480px] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <p className="font-heading italic mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-white">
                      {award.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gradient fade on edges */}
              <div className="hidden lg:block absolute top-0 right-0 w-20 h-full bg-linear-to-l from-black to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
    
  );
}
