"use client";

import Image from "next/image";

type Section = {
  title: string;
  description: string | string[];
  image: string;
};

export default function StorySections() {
  const sections: Section[] = [
    {
      title: "Concept",
      description: [
        "We focused on creating a clean architectural vision.",
        "Balancing functionality with modern aesthetics.",
        "Integrating natural light for spatial depth.",
        "We focused on creating a clean architectural vision.",
        "Balancing functionality with modern aesthetics.",
        "Integrating natural light for spatial depth.",
      ],
      image: "/gallery/gallery1.png",
    },
    {
      title: "Challenge",
      description: [
        "We focused on creating a clean architectural vision.",
        "Balancing functionality with modern aesthetics.",
        "Integrating natural light for spatial depth.",
        "We focused on creating a clean architectural vision.",
        "Balancing functionality with modern aesthetics.",
        "Integrating natural light for spatial depth.",
      ],
      image: "/gallery/gallery2.png",
    },
    {
      title: "Solution",
      description: [
        "We focused on creating a clean architectural vision.",
        "Balancing functionality with modern aesthetics.",
        "Integrating natural light for spatial depth.",
        "We focused on creating a clean architectural vision.",
        "Balancing functionality with modern aesthetics.",
        "Integrating natural light for spatial depth.",
      ],
      image: "/gallery/gallery3.png",
    },
  ];

  return (
    <section className="w-full py-20 space-y-28">
      {sections.map((item, index) => {
        const reverse = index % 2 === 1; // 🔥 alternate

        return (
          <div
            key={index}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* TEXT */}
            <div
              className={`
                ${reverse ? "lg:order-2" : "lg:order-1"}
              `}
            >
              <h2 className="text-3xl lg:text-5xl font-heading italic mb-6">
                {item.title}
              </h2>

              <div className="text-gray-600 leading-[40px] text-lg">
                {Array.isArray(item.description) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>

            {/* IMAGE */}
            <div
              className={`
                relative h-[320px] lg:h-[420px]
                rounded-2xl overflow-hidden shadow-xl
                ${reverse ? "lg:order-1" : "lg:order-2"}
              `}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
