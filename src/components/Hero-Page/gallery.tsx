import Image from "next/image";
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
            <h2 className="font-heading italic text-[74px] mb-4">
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
                className={`relative rounded-[28px] overflow-hidden ${img.tall ? "row-span-2 h-[520px]" : "h-[250px]"
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
    </section>
  );
}
