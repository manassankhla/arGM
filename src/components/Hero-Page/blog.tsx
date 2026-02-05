import Image from "next/image";
import Container from "@/components/container";

export default function Blogs() {
  const blogs = [
    {
      title: "The Art of Subtraction: Minimalist Design",
      date: "12/01/2024",
      image: "/Hero-Page-Images/blogs/blog1.png",
    },
    {
      title: "Unleashing Imagination: Creative Architecture",
      date: "11/15/2024",
      image: "/Hero-Page-Images/blogs/blog2.png",
    },
    {
      title: "Building a Greener Future: Sustainable Design",
      date: "10/22/2024",
      image: "/Hero-Page-Images/blogs/blog3.png",
    },
  ];

  return (
    <section className="bg-white py-6 md:py-8 lg:py-10">
      <Container>
        <div className="mx-auto px-6">

          {/* ================= Heading ================= */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="font-heading text-[74px] italic text-5xl mb-5">
              Blogs & Articles
            </h2>

            <p className="text-gray-500 text-[18px] leading-relaxed text-sm">
              Through our blogs and articles, we share insights on architecture,
              interior design, materials, spatial planning, and evolving design
              trends.
            </p>
          </div>



          {/* ================= Blog Cards ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">

            {blogs.map((blog, i) => (
              <div key={i} className="group cursor-pointer">

                {/* Image (FIXED PROPER WAY) */}
                <div className="relative h-[480px] rounded-[32px] overflow-hidden mb-7 shadow-md">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  />

                </div>



                {/* Title */}
                <h3 className="font-heading italic text-xl leading-snug mb-2">
                  {blog.title}
                </h3>



                {/* Date */}
                <p className="text-sm text-gray-400">
                  Published: {blog.date}
                </p>

              </div>
            ))}

          </div>



          {/* ================= Button ================= */}
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

      </Container>
    </section>
  );
}
