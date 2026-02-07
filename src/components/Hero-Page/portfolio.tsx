import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import { projects } from "@/data/projects";

export default function Portfolio() {


  return (
    <section className="relative bg-white overflow-hidden py-6 md:py-8 lg:py-10">
      <Container>
        {/* Background slanted shape */}
        {/* <div className="absolute inset-0 z-0">
  <Image
    src="/portfolio/bgLeft.png"
    alt="Portfolio background"
    fill
    className="object-cover"
    priority
  />
</div> */}

        <div className="relative mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading italic text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
              Portfolio
            </h2>
            <p className="font-body text-[18px] text-gray-500 text-sm">
              A curated collection of architectural and interior projects, each
              shaped by clear concepts and thoughtful detailing. Our work
              reflects a balance of space, light, materials, and
              functionality—designed with purpose and precision.
            </p>
          </div>

          {/* Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 4).map((item, index) => (
              <Link href={`/projects/${item.id}`} key={index} className="group block">
                <div className="overflow-hidden rounded-2xl relative w-full h-[420px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 font-heading text-black italic text-xl">
                  {item.title}
                </h3>
                <p className="text-xs tracking-wide text-gray-500 mt-1 uppercase">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10 mb-5">
            <Link
              href="/projects"
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
      </Container>
    </section>
  );
}
