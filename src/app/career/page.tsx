"use client";

import Link from "next/link";
import Image from "next/image";

export default function CareerPage() {
  const jobs = [
    {
      role: "Senior Interior Designer",
      type: "Full Time",
      location: "Jodhpur, India",
    },
    {
      role: "Junior Architect",
      type: "Full Time",
      location: "Remote / Hybrid",
    },
    {
      role: "3D Visualizer",
      type: "Contract",
      location: "Remote",
    },
    {
      role: "Project Manager",
      type: "Full Time",
      location: "Noida, India",
    },
  ];

  return (
    <main className="bg-white text-black">

      {/* ================================================= */}
      {/* ================= HERO ========================== */}
      {/* ================================================= */}

      <section className="relative h-[65vh] mb-15 font-heading italic flex items-center justify-center text-center bg-white text-black">
      
              <Image
                src="/Blog-Page-Images/Blog.jpg"
                alt="blog hero"
                fill
                className="object-cover"
              />
      
              <div className="relative z-10 px-6">
                <h1 className="text-6xl text-black md:text-7xl font-serif tracking-wide mb-6">
                  Careers
                </h1>
      
                <p className="text-sm tracking-[3px] uppercase text-gray-200">
                  Stay up to date on tips, tricks & trends
                  <br />
                  for social media & digital marketing
                </p>
              </div>
      
      
            </section>


      {/* ================================================= */}
      {/* =============== OPEN POSITIONS =================== */}
      {/* ================================================= */}

      <section className="px-6 pb-32">

        <div className="mx-auto">

          <h2 className="font-heading italic text-3xl mb-14">
            Open Positions
          </h2>



          {/* Jobs List */}
          <div className="divide-y">

            {jobs.map((job, index) => (
              <Link
                key={index}
                href="/contact"
                className="
                  group
                  flex flex-col md:flex-row
                  justify-between items-start md:items-center
                  py-8
                  hover:pl-3
                  transition-all
                "
              >
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline">
                    {job.role}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {job.type} • {job.location}
                  </p>
                </div>

                <span className="mt-3 md:mt-0 text-sm tracking-wide group-hover:translate-x-2 transition">
                  Apply →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>



      {/* ================================================= */}
      {/* ================= WHY JOIN ====================== */}
      {/* ================================================= */}

      <section className="bg-black text-white py-28 px-6">

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="font-heading italic text-xl mb-3">Creative Freedom</h3>
            <p className="text-gray-400 text-sm">
              Work on meaningful projects that challenge your creativity and skills.
            </p>
          </div>

          <div>
            <h3 className="font-heading italic text-xl mb-3">Growth</h3>
            <p className="text-gray-400 text-sm">
              Learn, experiment, and grow with a team of passionate professionals.
            </p>
          </div>

          <div>
            <h3 className="font-heading italic text-xl mb-3">Impact</h3>
            <p className="text-gray-400 text-sm">
              Design spaces that positively influence lives and communities.
            </p>
          </div>

        </div>

      </section>



      {/* ================================================= */}
      {/* ================= CTA =========================== */}
      {/* ================================================= */}

      <section className="py-24 flex justify-center">

        <Link
          href="/contact"
          className="
            inline-flex items-center
            h-[64px]
            px-[36px] py-[20px]
            gap-2
            rounded-[100px]

            bg-black text-white
            border border-transparent

            hover:bg-white hover:text-black hover:border-black
            transition-all duration-300
            group
          "
        >
          Send Resume

          <span className="group-hover:rotate-45 transition">↗</span>
        </Link>

      </section>

    </main>
  );
}
