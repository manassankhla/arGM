import Image from "next/image";

const services = [
  {
    title: "Architecture Design",
    desc: "Context-driven architectural solutions that balance form and function.",
    image: "/serviceImage/service1.png",
  },
  {
    title: "Interior Design",
    desc: "Thoughtfully crafted interiors focused on comfort and harmony.",
    image: "/serviceImage/service2.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/serviceImage/service4.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/serviceImage/service4.png",
  },
   {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/serviceImage/service4.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/serviceImage/service4.png",
  },
   {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/serviceImage/service4.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/serviceImage/service4.png",
  },
  // 👇 add as many as you want
];

export default function Services() {
  return (
    <section className="py-28 bg-white overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="font-heading italic text-black text-[42px] mb-4">Services</h2>
        <p className="text-gray-500 text-sm">
          We offer end-to-end architectural and design solutions.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          className="flex gap-10 overflow-x-auto
                     
                     snap-x snap-mandatory
                     scrollbar-hide"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0
                         w-[320px]
                         snap-center
                         border border-dashed border-gray-300
                         rounded-[28px] p-6 bg-white scrollbar-hide"
            >
              <div className="rounded-[22px] overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={220}
                  className="object-cover"
                />
              </div>

              <h3 className="font-heading text-black italic text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
