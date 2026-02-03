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
    <Container>
    <section className="bg-white py-28">
      <div className="mx-auto px-6">

        {/* ===== Heading ===== */}
        <div className="text-center mx-auto mb-20">
          <h2 className="font-heading italic text-4xl mb-4">
            Blogs & Articles
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Through our blogs and articles, we share insights on architecture,
            interior design, materials, spatial planning, and evolving design trends.
          </p>
        </div>

        {/* ===== Blog Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {blogs.map((blog, i) => (
            <div key={i} className="group">

              {/* Image */}
              <div className="relative rounded-[28px] overflow-hidden mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-[360px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading italic text-lg mb-2">
                {blog.title}
              </h3>

              {/* Date */}
              <p className="text-xs text-gray-400">
                Published: {blog.date}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Button ===== */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Explore More
            <span className="text-lg">↗</span>
          </button>
        </div>

      </div>
    </section>
    </Container>
  );
}
