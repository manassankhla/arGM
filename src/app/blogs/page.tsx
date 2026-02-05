"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";





export default function BlogPage() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const posts = [
    {
      id: "1",
      image: "/Blog-Page-Images/Blog.jpg",
      title:
        "What Your Analytics are Trying to Tell You About Your Business ACTUAL Results",
      desc:
        "As a business owner, you have access to tons of analytical data about your business...",
      category: "Analytics",
    },
    {
      id: "2",
      image: "/Blog-Page-Images/Blog.jpg",
      title:
        "Common Copywriting Mistakes that are Making Your Ideal Customers Click Away",
      desc:
        "Copywriting is an art, not a science. And, what works sometimes for words...",
      category: "Copywriting",
    },
    {
      id: "3",
      image: "/Blog-Page-Images/Blog.jpg",
      title:
        "5 IG Stories Strategies to Boost Your Social Media Engagement",
      desc:
        "Want to increase your audience engagement on social media? In the changing landscape...",
      category: "Social Media",
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] font-heading italic flex items-center justify-center text-center bg-white text-black">

        <Image
          src="/Blog-Page-Images/Blog.jpg"
          alt="blog hero"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl text-black md:text-7xl font-heading italic tracking-wide mb-6">
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
      <Container>
        <section className="py-12">
          <div className="flex font-heading italic flex-wrap items-center justify-center gap-10 text-sm tracking-wide uppercase text-gray-600">

            <span className="italic text-black font-medium">
              Browse the blog :
            </span>

            <button>Social Media</button>
            <button>Wellness</button>
            <button>Business</button>
            <button>Copywriting</button>

            {/* ================= SEARCH & CONTENT ================= */}
            <section className="py-6">
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
                          id="search-blogs"
                          placeholder="Search blogs..."
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


          </div>
        </section>


        {/* ================= FEATURED POST ================= */}
        {/* Only show featured post when NOT searching */}
        {!search && (
          <section>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="relative h-[420px]">
                <Image
                  src="/Blog-Page-Images/blog.jpg"
                  alt="featured"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="bg-[#f5f5f5] py-16 p-10 rounded-lg">
                <h2 className="text-3xl font-heading italic mb-6 leading-snug">
                  DREADING TAX SEASON? THESE STRATEGIES WILL HELP YOU PREPARE EARLY
                </h2>

                <p className="text-gray-600 mb-8 font-body">
                  Tax season can be a stressful time for business owners,
                  especially if you're not prepared. Filing taxes can feel like a
                  daunting task, and if you don't plan ahead...
                </p>

                <Link href="/blogs/1" className="inline-block border px-6 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition">
                  READ POST
                </Link>
              </div>

            </div>
          </section>
        )}

        {/* ================= BLOG GRID ================= */}

        <section className="pb-24 pt-8">

          <div className="grid md:grid-cols-3 gap-12">

            {filteredPosts.map((post, index) => (
              <Link key={index} href={`/blogs/${post.id}`} className="group block">

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

                <h3 className="font-heading italic text-xl mb-4 leading-snug">
                  {post.title}
                </h3>

                <p className="font-body text-gray-600 text-sm mb-6">
                  {post.desc}
                </p>

                <span className="text-sm underline underline-offset-4">
                  Read More →
                </span>
              </Link>
            ))}

          </div>
        </section>
      </Container>

    </main>

  );
}
