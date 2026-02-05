"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

//shadcn search button import
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import Container from "@/components/container";

export default function ProjectsPage() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);


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

  //Search Filter Logic
  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white text-black min-h-screen">

      {/* ================= Heading ================= */}
      <section className="relative h-[65vh] font-heading italic flex items-center justify-center text-center bg-white text-black">

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
      <Container>
        {/* ================= SEARCH SECTION ================= */}
        <section className="px-6 py-6">
          <div className="flex justify-end">

            {/* Expandable Search */}
            <div className="relative">

              {/* Search Icon Button - Only visible when closed */}
              {!isSearchOpen && (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="
                    w-12 h-12 
                    rounded-full 
                    bg-black 
                    text-white 
                    flex items-center justify-center
                    hover:bg-gray-800
                    transition-all duration-300
                    shadow-lg
                    hover:shadow-xl
                    hover:scale-110
                  "
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Expanded Search Input */}
              {isSearchOpen && (
                <div
                  className="
                    flex items-center gap-2
                    animate-in slide-in-from-right
                    duration-300
                  "
                >
                  <div className="relative">
                    <Input
                      id="search-projects"
                      placeholder="Search projects..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="
                        w-64 md:w-80
                        pr-10
                        border-2 border-black
                        focus:ring-2 focus:ring-black
                        rounded-full
                      "
                      autoFocus
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearch(""); // Clear search when closing
                    }}
                    className="
                      w-10 h-10
                      rounded-full
                      bg-gray-200
                      hover:bg-gray-300
                      flex items-center justify-center
                      transition-all duration-200
                    "
                    aria-label="Close search"
                  >
                    <span className="text-xl font-light">×</span>
                  </button>
                </div>
              )}

            </div>
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

            {filteredProjects.map((item, index) => (
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
      </Container>

    </main>
  );
}
