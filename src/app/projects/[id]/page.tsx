"use client";

import { use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Container from "@/components/container";
import { projects } from "@/data/projects";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const resolvedParams = use(params);
    const projectId = resolvedParams.id;

    // Find current project
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
    }

    // Use gallery images for different sections, fallback to main image if not enough gallery images
    const serviceImage = project.gallery[0] || project.image;
    const designImages = project.gallery.slice(0, 3); // Take up to 3 images
    const ecoImage = project.gallery[1] || project.image;

    // Related Projects Logic
    const relatedProjects = projects.filter((p) => p.id !== projectId).slice(0, 3);

    return (
        <main className="bg-white text-black min-h-screen font-sans">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[85vh] w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <Container className="relative h-full z-10 flex flex-col justify-center text-white">
                    <p className="text-sm tracking-[4px] uppercase opacity-80 mb-4">{project.date}</p>
                    <h1 className="text-5xl md:text-7xl font-heading italic font-light leading-tight mb-6 max-w-4xl">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-90">
                        {project.desc}
                    </p>
                </Container>
            </section>

            {/* ================= INTRO TEXT ================= */}
            <section className="py-24 px-6">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="w-full md:w-1/3">
                            <span className="text-xs uppercase tracking-widest text-gray-500">Vision</span>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-2xl md:text-4xl font-heading italic text-gray-800 leading-normal">
                                Architecture can be a powerful tool in combating climate change. Our designs emphasize sustainable practices, from using eco-friendly materials to creating energy-efficient buildings that leave a minimal carbon footprint.
                            </h2>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ================= SERVICES SPLIT SECTION ================= */}
            <section className="py-24 bg-gray-50">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Image Left */}
                        <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={serviceImage}
                                alt="Architectural Detail"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* List Right */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-8">Our Services</h3>

                            <ul className="space-y-6">
                                {[
                                    "Sustainable Architectural Design",
                                    "Green Building Consulting",
                                    "Interior Design With Sustainability",
                                    "Urban Planning & Landscape Architecture"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center justify-between border-b border-gray-300 pb-4 group cursor-pointer hover:border-black transition-colors">
                                        <span className="text-xl font-heading italic font-light">{item}</span>
                                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ================= INNOVATIVE DESIGNS GRID ================= */}
            <section className="py-24 bg-[#3c3a35] text-white">
                <Container>
                    <div className="flex justify-between items-end mb-12 px-2">
                        <h2 className="text-4xl md:text-5xl font-heading italic">Innovative Designs</h2>
                        <div className="hidden md:flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"><ChevronLeft className="w-5 h-5" /></button>
                            <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {designImages.map((img, idx) => (
                            <div key={idx} className="relative h-[400px] group overflow-hidden rounded-xl border border-white/10">
                                <Image
                                    src={img}
                                    alt={`Design ${idx}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white text-black p-4 rounded-lg shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <h4 className="font-heading italic text-lg mb-1">Modern Living</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Eco-Conscious</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Fallback if no gallery images */}
                        {designImages.length === 0 && (
                            <div className="col-span-3 text-center py-12 text-white/50">No additional images available.</div>
                        )}
                    </div>
                </Container>
            </section>

            {/* ================= ECO FRIENDLY MATERIALS ================= */}
            <section className="py-24 px-6">
                <Container>
                    <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

                        {/* Content Left */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <h3 className="text-xs uppercase tracking-widest text-gray-500">Sustainability</h3>
                            <h2 className="text-4xl md:text-5xl font-heading italic text-gray-900">Eco-Friendly Materials</h2>

                            <div className="space-y-6 pt-4">
                                <div className="border-b border-gray-200 pb-6">
                                    <h4 className="text-2xl font-light mb-2">Energy Efficiency</h4>
                                    <p className="text-gray-500 leading-relaxed">
                                        We prioritize materials that provide superior insulation, reducing the need for artificial heating and cooling.
                                    </p>
                                </div>
                                <div className="border-b border-gray-200 pb-6">
                                    <h4 className="text-2xl font-light mb-2">Reduction & Recycling</h4>
                                    <p className="text-gray-500 leading-relaxed">
                                        Using recycled resources allows us to minimize waste and environmental impact without compromising on quality or aesthetics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden">
                            <Image
                                src={ecoImage}
                                alt="Eco Friendly Interior"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </Container>
            </section>

            {/* ================= TESTIMONIAL ================= */}
            <section className="py-24 bg-gray-50 text-center px-6">
                <Container className="max-w-4xl mx-auto">
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-8">Testimonials</h3>
                    <blockquote className="text-2xl md:text-4xl font-heading italic text-gray-800 leading-relaxed mb-12">
                        &quot;Our sustainable home exceeds expectations. The team guided us in creating an energy-efficient space with eco-friendly choices. The process was seamless, and we love the environmental benefits and energy savings!&quot;
                    </blockquote>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden relative">
                            {/* Placeholder for user avatar */}
                            <Image src="/Team-Page-Images/founderfake.jpg" alt="User" fill className="object-cover" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm text-black">Michael R.</p>
                            <p className="text-xs text-gray-500">Homeowner</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ================= RELATED PROJECTS ================= */}
            <section className="py-24 bg-white border-t border-gray-100 px-6">
                <Container>
                    <h3 className="text-center text-3xl font-heading italic mb-12">Related Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProjects.map((p, idx) => (
                            <div
                                key={idx}
                                onClick={() => router.push(`/projects/${p.id}`)}
                                className="cursor-pointer group"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-heading italic mb-1 group-hover:underline decoration-1 underline-offset-4">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-gray-500">{p.date}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

        </main >
    );
}
