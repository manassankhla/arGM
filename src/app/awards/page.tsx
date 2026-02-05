import Image from "next/image";
import Container from "@/components/container";
export default function AwardsPage() {

  const awards = [
    { image: "/Blog-Page-Images/blog.jpg", title: "Best Digital Campaign 2024" },
    { image: "/Blog-Page-Images/blog.jpg", title: "Creative Excellence Award" },
    { image: "/Blog-Page-Images/blog.jpg", title: "Top Studio Recognition" },
    { image: "/Blog-Page-Images/blog.jpg", title: "Innovation in Design" },
    { image: "/Blog-Page-Images/blog.jpg", title: "Customer Choice Award" },
    { image: "/Blog-Page-Images/blog.jpg", title: "National Honor" },
  ];

  return (
    
    <main className="bg-white text-black">

      {/* ================= HERO (same like blog) ================= */}
      <section className="relative h-[65vh] flex items-center justify-center text-center">

        <Image
          src="/Blog-Page-Images/blog.jpg"   // same blog image reused
          alt="Awards Hero"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl md:text-7xl font-serif italic tracking-wide mb-6">
            OUR AWARDS
          </h1>

          <p className="text-sm tracking-[3px] uppercase text-gray-700">
            Recognition • Achievements • Milestones
          </p>
        </div>
      </section>

<Container>
      {/* ================= AWARDS GRID ================= */}
      <section className=" mx-auto px-6 py-24">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {awards.map((award, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
            >

              {/* Image */}
              <Image
                src={award.image}
                alt={award.title}
                width={600}
                height={600}
                className="
                  w-full
                  h-[320px]
                  object-cover
                  grayscale
                  transition
                  duration-500
                  group-hover:blur-sm
                  group-hover:grayscale-0
                  group-hover:scale-105
                "
              />

              {/* Hover Text */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-black/50
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                "
              >
                <h3 className="text-white text-xl font-semibold text-center px-6">
                  {award.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </section>
      </Container>
    </main>
  );
}
