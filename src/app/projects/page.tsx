"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react";

import Container from "@/components/container";
import { projects } from "@/data/projects";

export default function ProjectsPage() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);




  //Search Filter Logic
  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase())
  );

  // Modal handlers - keeping these but we'll also add navigation to the individual page
  const openModal = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const totalImages = projects[selectedProject].gallery.length;
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const totalImages = projects[selectedProject].gallery.length;
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  return (
    <main className="bg-white text-black min-h-screen">

      {/* ================= Heading ================= */}
      <section className="relative h-[65vh] mb-16 font-heading italic flex items-center justify-center text-center bg-white text-black">

        <Image
          src="/universalHeroImage.jpg"
          alt="blog hero"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl text-white md:text-7xl font-heading italic tracking-wide mb-6">
            Our Projects
          </h1>

        </div>


      </section>
      <Container>
        {/* ================= GRID (NO SCROLL) ================= */}
        <section className="px-6 pb-32">

          <div className="mx-auto">
            <div className="flex justify-between items-end mb-14">
              <h2 className="font-heading italic text-3xl">
                All Projects
              </h2>

              {/* ================= SEARCH ================= */}
              <div className="relative">
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

                {isSearchOpen && (
                  <div className="flex items-center gap-2 animate-in fade-in duration-300">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                          w-48 md:w-64
                          px-4 py-2
                          pr-10
                          border-2 border-black
                          focus:ring-2 focus:ring-black
                          focus:outline-none
                          rounded-full
                        "
                        autoFocus
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>

                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearch("");
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

            <div
              className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-3
            gap-6
          "
            >

              {filteredProjects.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
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

          </div>
        </section>
      </Container>

      {/* ================= MODAL GALLERY ================= */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Image container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={projects[selectedProject].gallery[currentImageIndex]}
                alt={projects[selectedProject].title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Project title and counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-50 pointer-events-none">
            <h2 className="font-heading italic text-white text-xl md:text-2xl uppercase tracking-wider">
              {projects[selectedProject].title}
            </h2>
            <p className="font-body text-white/80 text-sm">
              {currentImageIndex + 1} / {projects[selectedProject].gallery.length}
            </p>
          </div>

          {/* View More Button (Bottom Right) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/projects/${projects[selectedProject].id}`);
            }}
            className="
              absolute bottom-8 right-8 z-50
              group
              flex items-center gap-2
              bg-white text-black
              px-6 py-3
              rounded-full
              font-medium
              hover:bg-gray-200
              transition-all
              shadow-xl
            "
          >
            <span>View More</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      )}

    </main>
  );
}
