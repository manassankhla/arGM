"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react";

import Container from "@/components/container";

export default function AwardsPage() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedAward, setSelectedAward] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const awards = [
    {
      title: "Zenith Awards 2024",
      desc: "Excellence in Spatial Design and functionality.",
      date: "2024",
      image: "/Hero-Page-Images/awards/award1.png",
      gallery: [
        "/Hero-Page-Images/awards/award1.png",
        "/Hero-Page-Images/awards/award2.png",
      ],
    },
    {
      title: "Global Architecture Prize",
      desc: "Recognized for innovative eco-friendly structures.",
      date: "2023",
      image: "/Hero-Page-Images/awards/award2.png",
      gallery: [
        "/Hero-Page-Images/awards/award2.png",
        "/Hero-Page-Images/awards/award1.png",
      ],
    },
    {
      title: "Best Interior Studio",
      desc: "Awarded for consistent delivery of premium interiors.",
      date: "2024",
      image: "/Hero-Page-Images/awards/award1.png",
      gallery: [
        "/Hero-Page-Images/awards/award1.png",
        "/Hero-Page-Images/awards/award2.png",
      ],
    },
    {
      title: "Cultural Heritage Award",
      desc: "Preservation and restoration of historic sites.",
      date: "2022",
      image: "/Hero-Page-Images/awards/award2.png",
      gallery: [
        "/Hero-Page-Images/awards/award2.png",
        "/Hero-Page-Images/awards/award1.png",
      ],
    },
    {
      title: "Zenith Awards 2024",
      desc: "Excellence in Spatial Design and functionality.",
      date: "2024",
      image: "/Hero-Page-Images/awards/award1.png",
      gallery: [
        "/Hero-Page-Images/awards/award1.png",
        "/Hero-Page-Images/awards/award2.png",
      ],
    },
    {
      title: "Global Architecture Prize",
      desc: "Recognized for innovative eco-friendly structures.",
      date: "2023",
      image: "/Hero-Page-Images/awards/award2.png",
      gallery: [
        "/Hero-Page-Images/awards/award2.png",
        "/Hero-Page-Images/awards/award1.png",
      ],
    },
    {
      title: "Best Interior Studio",
      desc: "Awarded for consistent delivery of premium interiors.",
      date: "2024",
      image: "/Hero-Page-Images/awards/award1.png",
      gallery: [
        "/Hero-Page-Images/awards/award1.png",
        "/Hero-Page-Images/awards/award2.png",
      ],
    },
    {
      title: "Cultural Heritage Award",
      desc: "Preservation and restoration of historic sites.",
      date: "2022",
      image: "/Hero-Page-Images/awards/award2.png",
      gallery: [
        "/Hero-Page-Images/awards/award2.png",
        "/Hero-Page-Images/awards/award1.png",
      ],
    },
  ];

  //Search Filter Logic
  const filteredAwards = awards.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase())
  );

  // Modal handlers
  const openModal = (index: number) => {
    setSelectedAward(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedAward(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAward !== null) {
      const totalImages = awards[selectedAward].gallery.length;
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (selectedAward !== null) {
      const totalImages = awards[selectedAward].gallery.length;
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  return (
    <main className="bg-white text-black min-h-screen">

      {/* ================= Heading ================= */}
      <section className="relative h-[65vh] font-heading italic flex items-center justify-center text-center bg-white text-black">

        <Image
          src="/Blog-Page-Images/Blog.jpg"
          alt="Awards Hero"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl text-black md:text-7xl font-serif tracking-wide mb-6">
            Our Awards
          </h1>

          <p className="text-sm tracking-[3px] uppercase text-gray-200">
            Celebrating Excellence in Design & Innovation
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
                    animate-in fade-in
                    duration-300
                  "
                >
                  <div className="relative">
                    <input
                      type="text"
                      id="search-awards"
                      placeholder="Search awards..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="
                        w-64 md:w-80
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
            xl:grid-cols-3
            gap-6
          "
          >

            {filteredAwards.map((item, index) => (
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

        </section>
      </Container>

      {/* ================= MODAL GALLERY ================= */}
      {selectedAward !== null && (
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
                src={awards[selectedAward].gallery[currentImageIndex]}
                alt={awards[selectedAward].title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Project title and counter */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center z-50">
            <h2 className="font-heading italic text-white text-xl md:text-2xl mb-2 uppercase tracking-wider">
              {awards[selectedAward].title}
            </h2>
            <p className="font-body text-white/80 text-sm">
              {currentImageIndex + 1} / {awards[selectedAward].gallery.length}
            </p>
          </div>
        </div>
      )}

    </main>
  );
}
