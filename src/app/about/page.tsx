import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#3c2f1b] min-h-screen py-20">

      {/* ================= MAIN HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

        {/* ================= LEFT TEXT ================= */}
        <div className="space-y-6">

          <p className="text-gray-600 text-lg">Hey. I'm Solt,</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            A UI/UX <br />
            <span className="italic font-light">& Brand</span> <br />
            Designer
          </h1>

          <p className="text-gray-500 text-sm max-w-sm">
            Transforming ideas into stunning visuals — UI/UX and brand design
            that captivates, engages, and delivers results.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition">
            CONTACT ME →
          </button>
        </div>



        {/* ================= CENTER IMAGE ================= */}
        <div className="flex justify-center">
          <div className="relative w-92 h-182 md:w-96 md:h-96 rounded-b-[200px] overflow-hidden">
            <Image
              src="/About-Page-Images/AboutUcut.jpg"   // apni image daalna
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>



        {/* ================= RIGHT STATS ================= */}
        <div className="space-y-8 text-center md:text-right">

          <div>
            <h2 className="text-3xl font-semibold">15+</h2>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">280+</h2>
            <p className="text-gray-500 text-sm">Projects Delivered</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">*99%</h2>
            <p className="text-gray-500 text-sm">Client Satisfaction</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">50</h2>
            <p className="text-gray-500 text-sm">Clients worldwide</p>
          </div>

        </div>

      </div>



      {/* ================= FEATURES SECTION ================= */}
      <div className="mt-20 border-t pt-12">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

          {/* CARD 1 */}
          <div>
            <h3 className="font-semibold mb-2">USER-CENTERED DESIGN</h3>
            <p className="text-gray-500 text-sm">
              Intuitive and engaging experiences tailored for your audience.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <h3 className="font-semibold mb-2">BRAND IDENTITY & STRATEGY</h3>
            <p className="text-gray-500 text-sm">
              Strong visual storytelling that makes your brand unforgettable.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <h3 className="font-semibold mb-2">RESPONSIVE & MODERN UI</h3>
            <p className="text-gray-500 text-sm">
              Pixel-perfect designs optimized for all devices.
            </p>
          </div>

          {/* CARD 4 */}
          <div>
            <h3 className="font-semibold mb-2">SEAMLESS PROTOTYPING</h3>
            <p className="text-gray-500 text-sm">
              Innovative mockups to bring ideas to life before development.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
