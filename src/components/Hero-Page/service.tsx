import Image from "next/image";

const services = [
  {
    title: "Architecture Design",
    desc: "Context-driven architectural solutions that balance form and function.",
    image: "/Hero-Page-Images/serviceImage/service1.png",
  },
  {
    title: "Interior Design",
    desc: "Thoughtfully crafted interiors focused on comfort and harmony.",
    image: "/Hero-Page-Images/serviceImage/service2.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/Hero-Page-Images/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/Hero-Page-Images/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/Hero-Page-Images/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
  {
    title: "Residential Projects",
    desc: "Tailored solutions shaped around lifestyle and purpose.",
    image: "/Hero-Page-Images/serviceImage/service3.png",
  },
  {
    title: "Execution & Build",
    desc: "Seamless execution with quality and precision.",
    image: "/Hero-Page-Images/serviceImage/service4.png",
  },
  // 👇 add as many as you want
];

export default function Services() {
  return (

    <section className="py-6 md:py-8 lg:py-10 bg-white overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="font-heading italic text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Services</h2>
        <p className="font-body text-sm md:text-base lg:text-lg text-gray-500">
          We offer end-to-end architectural and design solutions.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto
                     px-4 md:px-6
                     snap-x snap-mandatory
                     scrollbar-hide"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0
                         w-72 sm:w-80 md:w-96 lg:w-[460px]
                         snap-center
                         border border-dashed border-gray-300
                         rounded-[28px] p-4 md:p-5 bg-white scrollbar-hide"
            >
              <div className="rounded-[22px] overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={460}
                  height={220}
                  className="object-cover"
                />
              </div>

              <h3 className="font-heading text-black italic text-lg md:text-xl mb-3">
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
