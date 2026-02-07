"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState } from "react";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3000, // auto scroll every 3s
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // fallback
  if (!images || images.length === 0) {
    return (
      <div className="text-center text-white/50 py-12">
        No images available
      </div>
    );
  }

  return (
    <>
      <div className="relative group">
        {/* ===== Slider Wrapper ===== */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="
                min-w-full
                sm:min-w-[50%]
                lg:min-w-[33.33%]
                px-3
                cursor-pointer
              "
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                  <Image
                    src={img}
                    alt={`Design ${idx}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Left Arrow ===== */}
        <button
          onClick={scrollPrev}
          className="
          absolute left-2 top-1/2 -translate-y-1/2
          bg-white/20 backdrop-blur-md
          p-2 rounded-full
          opacity-0 group-hover:opacity-100
          transition
        "
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* ===== Right Arrow ===== */}
        <button
          onClick={scrollNext}
          className="
          absolute right-2 top-1/2 -translate-y-1/2
          bg-white text-black
          p-2 rounded-full
          opacity-0 group-hover:opacity-100
          transition
        "
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ===== Lightbox Modal ===== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
          >
            <Image
              src={selectedImage}
              alt="Full View"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
