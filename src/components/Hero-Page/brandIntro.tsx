import Image from "next/image";

export default function BrandIntroduction() {
  return (

    <section className="relative bg-white py-28 overflow-hidden">


      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT CONTENT */}
        <div>
            <Image
          src="/brandLogoGray.png"
          alt="ARGM watermark"
          width={500}
          height={300}
          className="object-contain"
        />
          <h2 className="font-heading text-black italic text-[50px] ml-10 mb-6">
            Brand Introduction
          </h2>

          <p className="font-body text-black text-[15px] leading-relaxed ml-10 mb-5 ">
            Architecture, for us, is not just about buildings — it is about
            emotions, experiences, and the stories people live within spaces.
          </p>

          <p className="font-body text-zinc-600 text-[13px] leading-relaxed ml-10">
            ARGM – Architecture Beyond Boundaries was founded on the belief that
            meaningful design emerges when creativity meets context, and form
            follows purpose. Every project begins with listening — to the site,
            to the client, and to the lifestyle the space is meant to support.
          </p>
        </div>
{/* RIGHT IMAGE STACK */}
<div className="relative w-[440px] h-[480px] ml-70">

  {/* MAIN LEFT IMAGE (TALL) */}
  <div className="absolute left-0 top-6 z-10 rounded-[32px] overflow-hidden">
    <Image
      src="/introImage/introMain.png"
      alt="Interior design"
      width={280}
      height={400}
      className="object-cover"
    />
  </div>

  {/* TOP RIGHT IMAGE (SQUARE) */}
  <div className="absolute top-0 right-0 z-20 rounded-[24px] overflow-hidden shadow-lg">
    <Image
      src="/introImage/introTop.png"
      alt="Chair design"
      width={180}
      height={180}
      className="object-cover"
    />
  </div>

  {/* BOTTOM RIGHT IMAGE (WIDE WITH WHITE BORDER) */}
  <div className="absolute bottom-0 right-6 z-20 bg-white p-2 rounded-[28px] shadow-lg">
    <Image
      src="/introImage/introBottom.png"
      alt="Table design"
      width={260}
      height={150}
      className="object-cover rounded-[22px]"
    />
  </div>

</div>


      </div>
    </section>
   
  );
}
