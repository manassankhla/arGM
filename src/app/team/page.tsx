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
    { image: "/Team-Page-Images/founderfake.jpg", name: "Aman Sharma" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Riya Mehta" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Karan Singh" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Neha Verma" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Rahul Jain" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Priya Joshi" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Dev Patel" },
    { image: "/Team-Page-Images/founderfake.jpg", name: "Sneha Rao" },
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
          src="/Blog-Page-Images/Blog.jpg"
          alt="blog hero"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl text-black md:text-7xl font-serif tracking-wide mb-6">
            THE TEAM
          </h1>

          <p className="text-sm tracking-[3px] uppercase text-gray-200">
            Stay up to date on tips, tricks & trends
            <br />
            for social media & digital marketing
          </p>
        </div>
      </section>


      <section className="relative min-h-screen bg-[#f3f3f3] py-16 px-6">

        {/* dotted background */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#bfbfbf 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl font-heading italic font-semibold mb-16">
            Meet our Team
          </h1>

          {/* ================= Founder (UNCHANGED) ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image
              src="/Team-Page-Images/founderfake.jpg"
              alt="Founder"
              width={600}
              height={400}
              className="  
                  cursor-pointer              
                  grayscale
                  hover:grayscale-0
                  hover:scale-105
                  transition
                  duration-300 
                  rounded-xl 
                  object-cover 
                  w-full 
                  h-[320px]"
            />

            <div>
              <h2 className="text-2xl font-heading italic font-semibold mb-4">
                Founder_Name
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Strategic Branding & Impact brand identity sirf ek logo nahi,
                balki ek vishwas hai. Maine 15 saal se zyada ka experience ke
                saath 280 se zyada projects deliver kiye hain...
              </p>
            </div>
          </div>

          {/* ================= Co Founder (UNCHANGED) ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-heading italic font-semibold mb-4">
                Co Founder_Name
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Strategic Branding & Impact brand identity sirf ek logo nahi,
                balki ek vishwas hai. Maine 15 saal se zyada ka experience ke
                saath 280 se zyada projects deliver kiye hain...
              </p>
            </div>

            <Image
              src="/Team-Page-Images/founderfake.jpg"
              alt="Co Founder"
              width={600}
              height={400}
              className="
                  cursor-pointer
                  grayscale
                  hover:grayscale-0
                  hover:scale-105
                  transition
                  duration-300
                  rounded-xl 
                  object-cover
                  w-full 
                  h-[320px] 
                  order-1 
                  md:order-2"
            />
          </div>

          {/* ================= Employees Grid (UPDATED ONLY THIS) ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

            {employees.map((emp, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <Image
                  src={emp.image}
                  alt={emp.name}
                  width={200}
                  height={150}
                  className="
                  rounded-xl
                  object-cover
                  w-full
                  h-[120px]
                  grayscale
                  group-hover:grayscale-0
                  group-hover:scale-105
                  transition
                  duration-300
                "
                />

                <p className="text-sm mt-2 font-heading italic  text-gray-700 font-medium">
                  {emp.name}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
