import Image from "next/image";
import FirstSection from "@/components/About-Page/firstSection";
import Founders from "@/components/About-Page/founders";
import ThirdSection from "@/components/About-Page/thirdSection";

export default function AboutPage() {
  return (

    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] font-heading italic flex items-center justify-center text-center bg-white text-black">

        <Image
          src="/universalHeroImage.jpg"
          alt="blog hero"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl text-white md:text-7xl font-heading italic tracking-wide mb-6">
            About Us
          </h1>

        </div>


      </section>
      <FirstSection />
      <Founders />
      <ThirdSection />


    </main>
  );
}
