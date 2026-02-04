import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Residential Care Project in Paris",
      desc: "Luxury living spaces crafted with modern design principles.",
      date: "2024",
      image: "/Project-Page-Images/project1.jpg",
    },
    {
      title: "Concert Hall in New York",
      desc: "Acoustic excellence with bold architectural expression.",
      date: "2023",
      image: "/Project-Page-Images/project2.jpg",
    },
    {
      title: "Modern Hotel in London",
      desc: "Minimal interiors with warm hospitality experience.",
      date: "2024",
      image: "/Project-Page-Images/project3.jpg",
    },
    {
      title: "Luxury Villa in Dubai",
      desc: "Private residence blending comfort and elegance.",
      date: "2022",
      image: "/Project-Page-Images/project4.jpg",
    },
    {
      title: "Corporate Office Interior",
      desc: "Workspaces that inspire creativity and productivity.",
      date: "2023",
      image: "/Project-Page-Images/project5.jpg",
    },
    {
      title: "Modern Hotel in London",
      desc: "Minimal interiors with warm hospitality experience.",
      date: "2024",
      image: "/Project-Page-Images/project6.jpg",
    },
    {
      title: "Luxury Villa in Dubai",
      desc: "Private residence blending comfort and elegance.",
      date: "2022",
      image: "/Project-Page-Images/project7.jpg",
    },
    {
      title: "Corporate Office Interior",
      desc: "Workspaces that inspire creativity and productivity.",
      date: "2023",
      image: "/Project-Page-Images/project8.jpg",
    },
  ];

  return (
    <main className="bg-white text-black min-h-screen">

      {/* ================= Heading ================= */}
      <section className="relative h-[65vh] mb-15 font-heading italic flex items-center justify-center text-center bg-white text-black">
      
              <Image
                src="/Blog-Page-Images/Blog.jpg"
                alt="blog hero"
                fill
                className="object-cover"
              />
      
              <div className="relative z-10 px-6">
                <h1 className="text-6xl text-black md:text-7xl font-serif tracking-wide mb-6">
                  Our Projects
                </h1>
      
                <p className="text-sm tracking-[3px] uppercase text-gray-200">
                  Stay up to date on tips, tricks & trends
                  <br />
                  for social media & digital marketing
                </p>
              </div>
      
      
            </section>



      {/* ================= GRID (NO SCROLL) ================= */}
      <section className="px-6 pb-24">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
        >

          {projects.map((item, index) => (
            <div
              key={index}
              className="
                relative
                h-[520px]
                rounded-2xl
                overflow-hidden
                group
                cursor-pointer
                bg-cover bg-center
              "
              style={{ backgroundImage: `url(${item.image})` }}
            >

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition duration-500" />



              {/* Content on image */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">

                <p className="text-xs tracking-widest uppercase text-gray-300 mb-2">
                  {item.date}
                </p>

                <h3 className="font-heading text-white italic text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300">
                  {item.desc}
                </p>

              </div>



              {/* Zoom effect */}
              <div className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition duration-700 -z-10"
                   style={{ backgroundImage: `url(${item.image})` }} />

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
