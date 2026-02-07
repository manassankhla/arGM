"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll"; // Changed from Autoplay

const services = [
  {
    title: "Architecture Design",
    desc: "Context-driven architectural solutions that balance form and function.",
    image: "/Hero-Page-Images/serviceImage/service1.png",
  },
  {
    title: "Interior Design",
    desc: "Creating spaces that reflect your personality and style.",
    image: "/Hero-Page-Images/serviceImage/service2.png",
  },
  {
    title: "Urban Planning",
    desc: "Sustainable city planning for a better future.",
    image: "/Hero-Page-Images/serviceImage/service3.png",
  },
  {
    title: "Landscape Design",
    desc: "Harmonizing nature with architectural structures.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
  {
    title: "Architecture Design",
    desc: "Context-driven architectural solutions that balance form and function.",
    image: "/Hero-Page-Images/serviceImage/service1.png",
  },
  {
    title: "Interior Design",
    desc: "Creating spaces that reflect your personality and style.",
    image: "/Hero-Page-Images/serviceImage/service2.png",
  },
  {
    title: "Urban Planning",
    desc: "Sustainable city planning for a better future.",
    image: "/Hero-Page-Images/serviceImage/service3.png",
  },
  {
    title: "Landscape Design",
    desc: "Harmonizing nature with architectural structures.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
];

export default function Services() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [
      AutoScroll({
        speed: 1, // continuous speed
        stopOnInteraction: false,
        stopOnMouseEnter: true, // optional: pause on hover
      }),
    ]
  );

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="font-heading italic text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Services
        </h2>
        <p className="font-body text-sm md:text-base lg:text-lg text-gray-500">
          We offer end-to-end architectural and design solutions.
        </p>
      </div>

      {/* Embla Carousel Viewport */}
      <div className="relative max-w-full" ref={emblaRef}>

        {/* Embla Container (this flex container holds all slides) */}
        <div className="flex touch-pan-y gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 md:px-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_auto] min-w-0
                         w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]
                         border border-dashed border-gray-300
                         rounded-[40px] p-4 bg-white select-none
                         transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="rounded-[32px] overflow-hidden mb-6 relative w-full aspect-3/4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-heading text-black italic text-2xl md:text-3xl mb-3 text-center">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-gray-500 leading-relaxed text-center px-4 mb-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
