"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Gallery() {
  const images = [
    { src: "/Hero-Page-Images/gallery/gallery1.png", tall: false }, //1
    { src: "/Hero-Page-Images/gallery/gallery2.png", tall: true }, //2
    { src: "/Hero-Page-Images/gallery/gallery3.png", tall: false }, //3
    { src: "/Hero-Page-Images/gallery/gallery4.png", tall: true }, //4
    { src: "/Hero-Page-Images/gallery/gallery5.png", tall: true }, //5
    { src: "/Hero-Page-Images/gallery/gallery6.png", tall: false }, //6
    { src: "/Hero-Page-Images/gallery/gallery7.png", tall: false }, //7
    { src: "/Hero-Page-Images/gallery/gallery8.png", tall: false }, //8
    { src: "/Hero-Page-Images/gallery/gallery2.png", tall: false }, //9
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-6 md:py-8 lg:py-10">
      <Container>
        {/* ===== BACKGROUND IMAGE PLACEHOLDER ===== */}
        {/* YAHAN TUM APNI POLYGON IMAGE LAGANA */}
        <div className="absolute inset-0 -z-10">
          {/* <Image
          src="/gallery/gallery-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        /> */}
        </div>

        <div className=" mx-auto">
          {/* ===== Heading ===== */}
          <div className="text-center mx-auto mb-20">
            <h2 className="font-heading italic text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
              Gallery
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed">
              Our gallery captures the essence of ARGM’s design language — minimal,
              refined, and purposeful. Each image reflects our attention to
              proportion, light, and experiential quality.
            </p>
          </div>

          {/* ===== GALLERY GRID ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img.src)}
                className={`relative rounded-[28px] overflow-hidden cursor-pointer ${img.tall ? "row-span-2 h-[520px]" : "h-[250px]"
                  }`}
              >
                <Image
                  src={img.src}
                  alt="Gallery Image"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>


      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
          >
            {/* Using a simple X character if lucide X isn't imported, but cleaner to import it. Will add import in next step if needed or assume standard svg */}
            <span className="text-white text-2xl font-light">✕</span>
          </button>

          <div
            className="relative w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
