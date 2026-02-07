"use client";

import Image from "next/image";

export default function TeamPage() {
  /* ================= Employees Array ================= */
  const employees = [
    { image: "/Team-Page-Images/founderfake.jpg", name: "Aman Sharma" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Riya Mehta" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Karan Singh" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Neha Verma" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Rahul Jain" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Priya Joshi" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Dev Patel" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Sneha Rao" },
 
  ];



  return (
    <>
      {/*Hero Section*/}
      <section className="relative h-[65vh] font-heading italic flex items-center justify-center text-center bg-white text-black">
        <Image
          src="/universalHeroImage.jpg"
          alt="blog hero"
          fill
          className="object-cover"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-6xl text-white md:text-7xl font-heading italic tracking-wide mb-6">
            THE TEAM
          </h1>
        
        </div>
      </section>

      <section className="relative min-h-screen bg-[#f3f3f3] py-24 px-6">
        <div className="relative max-w-7xl mx-auto">

          {/* ================= NEW: Vision/Hierarchy Intro Section ================= */}
          {/* ================= NEW: Vision/Hierarchy Intro Section ================= */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Our Vision</h3>

            <div className="text-gray-700 leading-relaxed text-lg space-y-6">
              {/* Para 1: Full Width */}
              <p>
                The most basic structures often carry the most weight. Rows and columns may look like a grid of cells, but they carry the logic of the dataset. Every table is built on this foundation.
              </p>

              {/* Para 2 + Image: Side by Side */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="flex-1">
                  If your dataset is a table of customer orders, each row holds everything about a single order: who placed it, when it was placed, and how much it cost.The most basic structures often carry the most weight. Rows and columns may look like a grid of cells, but they carry the logic of the dataset. Every table is built on this foundation.The most basic structures often carry the most weight. Rows and columns may look like a grid of cells, but they carry the logic of the dataset. Every table is built on this foundation. Rows and columns may look like a grid of cells, but they carry the logic of the dataset. Every table is built on this foundation.
                </p>
                <div className="relative w-[250px] mr-10 md:w-[250px] h-[250px] rounded-xl overflow-hidden shrink-0 shadow-sm">
                  {/* Decorative Image */}
                  <Image
                    src="/Blog-Page-Images/Blog.jpg"
                    alt="Team Vision Abstract"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Para 3: Full Width */}
              <p>
                Rows and columns may look like a grid of cells, but they carry the logic of the dataset. Every table is built on this foundation. Each row is a single entry: a record of a transaction, an employee, a product, a moment in time.
              </p>
            </div>
          </div>


          {/* Heading */}
          <h1 className="text-4xl font-heading italic font-semibold mb-16 text-center">
            Founders
          </h1>

          {/* ================= Founders Grid (Side by Side) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32 max-w-5xl mx-auto">

            {/* Founder 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src="/Team-Page-Images/founderfake.jpg"
                  alt="Founder Name"
                  fill
                  className="object-cover hover:scale-105 transition duration-500 grayscale hover:grayscale-0"
                />
              </div>
              <h2 className="text-2xl font-bold font-heading italic">Founder_Name</h2>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">CEO</p>
              <p className="font-body text-gray-600 leading-relaxed max-w-sm">
                Strategic Branding & Impact brand identity sirf ek logo nahi, balki ek vishwas hai.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src="/Team-Page-Images/founderfake.jpg"
                  alt="Co-Founder Name"
                  fill
                  className="object-cover hover:scale-105 transition duration-500 grayscale hover:grayscale-0"
                />
              </div>
              <h2 className="text-2xl font-bold font-heading italic">Co Founder_Name</h2>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">CEO</p>
              <p className="font-body text-gray-600 leading-relaxed max-w-sm">
                Strategic Branding & Impact brand identity sirf ek logo nahi, balki ek vishwas hai.
              </p>
            </div>

          </div>

          {/* ================= Employees Grid Section ================= */}
          <div id="team-grid" className="scroll-mt-24">
            <h3 className="text-2xl font-heading italic font-light mb-12 text-center">The Collective</h3>

            {/* Grid: 4 Columns */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {employees.map((emp, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative h-[280px] w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={emp.image}
                      alt={emp.name}
                      fill
                      className="
                        object-cover
                        grayscale
                        group-hover:grayscale-0
                        group-hover:scale-105
                        transition
                        duration-500
                        "
                    />
                  </div>

                  <p className="text-lg font-heading italic text-gray-800 font-medium">
                    {emp.name}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Architect</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
