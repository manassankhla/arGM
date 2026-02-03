import Hero from "@/components/Hero-Page/hero";
import BrandIntro from "@/components/Hero-Page/brandIntro";
import Portfolio from "@/components/Hero-Page/portfolio";
import Service from "@/components/Hero-Page/service";
import Quote from "@/components/Hero-Page/quote";
import Process from "@/components/Hero-Page/process";
import Award from "@/components/Hero-Page/award";
import Blogs from "@/components/Hero-Page/blog";
import Gallery from "@/components/Hero-Page/gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Portfolio />
      <Service />
      <Quote />
      <Process />
      <Award />
      <Blogs />
      <Gallery />
    </>
  );
}
