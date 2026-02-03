import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      image: "/Blog-Page-Images/blog.jpg",
      title:
        "What Your Analytics are Trying to Tell You About Your Business ACTUAL Results",
      desc:
        "As a business owner, you have access to tons of analytical data about your business...",
      category: "Analytics",
    },
    {
      image: "/Blog-Page-Images/blog.jpg",
      title:
        "Common Copywriting Mistakes that are Making Your Ideal Customers Click Away",
      desc:
        "Copywriting is an art, not a science. And, what works sometimes for words...",
      category: "Copywriting",
    },
    {
      image: "/Blog-Page-Images/blog.jpg",
      title:
        "5 IG Stories Strategies to Boost Your Social Media Engagement",
      desc:
        "Want to increase your audience engagement on social media? In the changing landscape...",
      category: "Social Media",
    },
  ];

  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] font-heading italic flex items-center justify-center text-center bg-white text-black">

        <Image
          src="/Blog-Page-Images/blog.jpg"
          alt="blog hero"
          fill
          className="object-cover opacity-40 rounded-b-4xl"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl md:text-7xl font-serif tracking-wide mb-6">
            THE BLOG
          </h1>

          <p className="text-sm tracking-[3px] uppercase text-gray-200">
            Stay up to date on tips, tricks & trends
            <br />
            for social media & digital marketing
          </p>
        </div>
      </section>

      {/* ================= CATEGORY NAV ================= */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-10 text-sm tracking-wide uppercase text-gray-600">

          <span className="italic text-black font-medium">
            Browse the blog :
          </span>

          <button>Social Media</button>
          <button>Wellness</button>
          <button>Business</button>
          <button>Copywriting</button>

        </div>
      </section>

      {/* ================= FEATURED POST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="relative h-[420px]">
            <Image
              src="/Blog-Page-Images/blog.jpg"
              alt="featured"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="bg-[#f5f5f5] p-10">
            <h2 className="text-3xl font-serif mb-6 leading-snug">
              DREADING TAX SEASON? THESE STRATEGIES WILL HELP YOU PREPARE EARLY
            </h2>

            <p className="text-gray-600 mb-8">
              Tax season can be a stressful time for business owners,
              especially if you're not prepared. Filing taxes can feel like a
              daunting task, and if you don’t plan ahead...
            </p>

            <button className="border px-6 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition">
              READ POST
            </button>
          </div>

        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-12">

          {posts.map((post, index) => (
            <div key={index} className="group">

              <div className="relative h-[280px] mb-6 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition duration-300"
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                {post.category}
              </p>

              <h3 className="font-serif text-xl mb-4 leading-snug">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                {post.desc}
              </p>

              <button className="text-sm underline underline-offset-4">
                Read More →
              </button>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
