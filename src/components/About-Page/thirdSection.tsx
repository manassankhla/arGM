import Link from "next/link";
import Container from "../container";

export default function Founders() {
  const cards = [
    {
      title: "About Us",
      image: "/About-Page-Images/team.jpg",
      link: "/about",
    },
    {
      title: "Our Team",
      image: "/About-Page-Images/team.jpg",
      link: "/team",
    },
    {
      title: "Awards",
      image: "/About-Page-Images/team.jpg",
      link: "/awards",
    },
  ];

  return (
    <section className="py-20">
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {cards.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="relative group overflow-hidden rounded-2xl h-[520px] cursor-pointer"
            >

              {/* Background image */}
              <div
                className="
                  absolute inset-0
                  bg-cover bg-center
                  transition-transform duration-500
                  group-hover:scale-110
                "
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

              {/* Text */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-heading italic tracking-wide">
                  {item.title}
                </h2>
              </div>

            </Link>
          ))}

        </div>

      </Container>
    </section>
  );
}
