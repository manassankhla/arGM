import Image from "next/image";
import Container from "../container";

export default function Founders() {
    return (
        <section className="py-20 bg-white overflow-hidden text-black">
            <Container>
                <div className="flex flex-col gap-28">

                    {/* FOUNDER 1 - WOMAN (Image Left, Text Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-center">

                        {/* Image Side */}
                        <div className="relative group">
                            {/* Decorative Circle Background */}
                            <div className="absolute top-10 left-10 w-[80%] h-[80%] rounded-full bg-zinc-100 -z-10 group-hover:scale-105 transition-transform duration-700 ease-out"></div>

                            <div className="relative h-[500px] w-full flex justify-center items-end overflow-hidden rounded-[40px] bg-linear-to-t from-gray-50 to-transparent">
                                <Image
                                    src="/About-Page-Images/elegant-businesswoman-holding-clipboard-removebg-preview.png"
                                    alt="Sarah Jenkins - Founder"
                                    fill
                                    className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="relative md:pl-10">
                            {/* Background Logo Watermark */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.03] pointer-events-none select-none -z-10">
                                <Image
                                    src="/brandLogoGray.png"
                                    alt="Watermark"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="font-heading italic text-5xl md:text-6xl mb-4 text-black">
                                Sarah Jenkins
                            </h3>
                            <p className="text-sm tracking-widest uppercase text-gray-500 mb-8 border-b border-gray-200 pb-4 inline-block">
                                Principal Architect & Co-Founder
                            </p>
                            <div className="space-y-6 text-lg font-body text-gray-700 leading-relaxed ">
                                <p>
                                    "Architecture is not just about space; it’s about how we occupy that space and the feelings it evokes."
                                </p>
                                <p className="text-base text-gray-600">
                                    With over 15 years of experience in high-end residential and commercial design, Sarah brings a unique perspective that blends contemporary aesthetics with timeless functionality. Her approach is deeply rooted in understanding the human experience within the built environment.
                                </p>
                                <div className="pt-4">
                                    <Image
                                        src="/brandLogoGray.png"
                                        alt="Signature"
                                        width={100}
                                        height={50}
                                        className="opacity-40"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* FOUNDER 2 - MAN (Text Left, Image Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">

                        {/* Content Side */}
                        <div className="order-2 md:order-1 relative md:pr-10 text-right md:text-left">
                            {/* Background Logo Watermark */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.03] pointer-events-none select-none -z-10">
                                <Image
                                    src="/brandLogoGray.png"
                                    alt="Watermark"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex flex-col items-end md:items-start">
                                <h3 className="font-heading italic text-5xl md:text-6xl mb-4 text-black text-right md:text-left">
                                    David Aris
                                </h3>
                                <p className="text-sm tracking-widest uppercase text-gray-500 mb-8 border-b border-gray-200 pb-4 inline-block">
                                    Design Director & Co-Founder
                                </p>
                            </div>

                            <div className="space-y-6 text-lg font-body text-gray-700 leading-relaxed text-right md:text-left">
                                <p>
                                    "We believe in boundaries only so we can push past them. Innovation lies at the edge of the impossible."
                                </p>
                                <p className="text-base text-gray-600">
                                    David is known for his bold, structural concepts and meticulous attention to detail. His philosophy revolves around creating sustainable and innovative designs that stand the test of time while challenging conventional architectural norms.
                                </p>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 md:order-2 relative group">
                            {/* Decorative Square Background */}
                            <div className="absolute bottom-10 right-10 w-[80%] h-[90%] rounded-[40px] bg-zinc-100 -z-10 group-hover:rotate-3 transition-transform duration-700 ease-out"></div>

                            <div className="relative h-[500px] w-full flex justify-center items-end overflow-hidden rounded-[40px] bg-linear-to-t from-gray-50 to-transparent">
                                <Image
                                    src="/About-Page-Images/toppng.com-business-man-2162x3513.png"
                                    alt="David Aris - Founder"
                                    fill
                                    className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
}
