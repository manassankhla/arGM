import Image from "next/image";
import Container from "../container";

export default function Portfolio() {
  const projects = [
    {
      title: "Elegance and Minimalism",
      location: "MUMBAI, MAHARASHTRA",
      image: "/Hero-Page-Images/portfolio/img1.png",
    },
    {
      title: "Innovation and Creativity",
      location: "BENGALURU, KARNATAKA",
      image: "/Hero-Page-Images/portfolio/img2.png",
    },
    {
      title: "Aqua Vista Tower",
      location: "CHENNAI, TAMIL NADU",
      image: "/Hero-Page-Images/portfolio/img3.png",
    },
    {
      title: "EcoTech Hub",
      location: "HYDERABAD, TELANGANA",
      image: "/Hero-Page-Images/portfolio/img4.png",
    },
  ];

  return (
    <Container>
      <section className="relative bg-white py-15 overflow-hidden">
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

        <div className="relative mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-[74px] text-black italic mb-4">
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
            {projects.map((item, index) => (
              <div key={index} className="group">
                <div className="rounded-[28px] overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={420}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 font-heading text-black italic text-xl">
                  {item.title}
                </h3>
                <p className="text-xs tracking-wide text-gray-500 mt-1">
                  {item.location}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10 mb-5">
            <button
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
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
