"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import Container from "@/components/container";

// import Container from "@/components/Container";

export default function CareerPage() {

  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [pdfJob, setPdfJob] = useState<any>(null);
  const router = useRouter();

  const jobs = [
    {
      role: "Senior Interior Designer",
      type: "Full Time",
      location: "Jodhpur, India",
      pdf: "/pdfs/adj.pdf",
    },
    {
      role: "Junior Architect",
      type: "Full Time",
      location: "Remote / Hybrid",
      pdf: "/pdfs/adj.pdf",
    },
    {
      role: "3D Visualizer",
      type: "Contract",
      location: "Remote",
      pdf: "/pdfs/adj.pdf",
    },
    {
      role: "Project Manager",
      type: "Full Time",
      location: "Noida, India",
      pdf: "/pdfs/adj.pdf",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.role.toLowerCase().includes(search.toLowerCase()) ||
    job.type.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

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
          <h1 className="text-6xl text-black md:text-7xl font-heading italic tracking-wide mb-6">
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
      <Container>
        <section className="px-6 pb-32">

          <div className="mx-auto">

            <div className="flex justify-between items-end mb-14">
              <h2 className="font-heading italic text-3xl">
                Open Positions
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
                        placeholder="Search jobs..."
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

            {/* Jobs List */}
            <div className="divide-y border-t border-gray-200">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="
                  group
                  flex flex-col md:flex-row
                  justify-between items-start md:items-center
                  py-8
                  hover:pl-4
                  transition-all duration-300
                  cursor-default
                "
                  >
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-heading italic mb-2 text-black">
                        {job.role}
                      </h3>

                      <p className="font-body text-sm text-gray-500 uppercase tracking-widest mb-4">
                        {job.type} • {job.location}
                      </p>

                      <div className="flex gap-4">
                        {/* View Details Button */}
                        <button
                          onClick={() => setPdfJob(job)}
                          className="
                        text-xs uppercase tracking-widest border-b border-black pb-0.5
                        text-black hover:text-gray-600 hover:border-gray-600 transition
                      "
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="
                    px-6 py-3 rounded-full bg-black text-white text-sm font-medium tracking-wide
                    hover:bg-gray-800 transition-transform transform group-hover:translate-x-2
                  "
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              ) : (
                <p className="py-8 text-center text-gray-500 italic">No jobs match your search.</p>
              )}
            </div>
          </div>
        </section>

        {/* ================= MODAL ================= */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div
              className="
              bg-white w-full max-w-lg rounded-2xl p-8 md:p-10 shadow-2xl
              relative animate-in fade-in zoom-in duration-300
            "
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition p-2"
              >
                ✕
              </button>

              <h3 className="font-heading italic text-3xl mb-1">Apply</h3>
              <p className="text-gray-500 text-sm mb-6">
                for <span className="font-semibold text-black">{selectedJob.role}</span>
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Application Sent!");
                  setSelectedJob(null);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Resume / Portfolio
                  </label>
                  <input
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="
                    w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-xs file:font-semibold file:uppercase file:tracking-widest
                    file:bg-gray-100 file:text-black
                    hover:file:bg-gray-200
                    cursor-pointer
                  "
                  />
                </div>

                <button
                  type="submit"
                  className="
                  w-full bg-black text-white rounded-full py-4 mt-4
                  font-medium tracking-wide uppercase text-sm
                  hover:bg-gray-800 transition-colors
                "
                >
                  Information Sent
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ================= PDF MODAL ================= */}
        {pdfJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8">
            <div
              className="
              bg-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl
              relative animate-in fade-in zoom-in duration-300 flex flex-col
            "
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h3 className="font-heading italic text-xl md:text-2xl">
                  {pdfJob.role} <span className="text-gray-400 not-italic text-sm ml-2">Job Details</span>
                </h3>
                <button
                  onClick={() => setPdfJob(null)}
                  className="text-gray-400 hover:text-black transition p-2 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* PDF Viewer (Using Iframe) */}
              <div className="flex-1 bg-gray-100 flex items-center justify-center relative">
                <iframe
                  src={pdfJob.pdf || "/dummy-job-details.pdf"}
                  className="w-full h-full"
                  title="Job PDF"
                />
                {/* Fallback link if PDF doesn't load/exist */}
                <div className="absolute pointer-events-none text-gray-400 text-sm">
                  (PDF Preview: {pdfJob.pdf || "No source"})
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>


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

        <button
          onClick={() => setSelectedJob({ role: "General Application" })}
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
        </button>

      </section>

    </main>
  );
}
