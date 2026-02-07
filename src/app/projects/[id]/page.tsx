"use client";

import { use, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Container from "@/components/container";
import { projects } from "@/data/projects";

import Carousel from "@/components/Project-Page/Carousel";
import StatsGrid from "@/components/Project-Page/infoStrip";
import StorySection from "@/components/Project-Page/storySection";
import SpecificationsAccordion from "@/components/Project-Page/SpecificationsAccordion";

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
    const designImages = project.gallery.slice(0, 9); // Take up to 3 images
    const ecoImage = project.gallery[1] || project.image;

    // Related Projects Logic
    const relatedProjects = projects.filter((p) => p.id !== projectId).slice(0, 3);

    // Tab Logic
    const [activeTab, setActiveTab] = useState("Interior");

    const getTabImages = () => {
        // simulating category data since we don't have it in the object
        const all = [...project.gallery, ...project.gallery]; // duplicate to have enough data
        if (activeTab === "Plans") return all.slice(4, 9);
        if (activeTab === "Exterior") return all.slice(2, 6);
        return all.slice(0, 5); // Interior
    };

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
            <Container>
                <StatsGrid />
                <StorySection />
            </Container>
            {/* ================= INTRO TEXT ================= */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute top-20 left-30 w-[300px] h-[400px] md:w-[400px] md:h-[400px] opacity-70 pointer-events-none -translate-x-1/3 -translate-y-1/3">
                    <Image
                        src="/brandLogoGray.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
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



            {/* ================= INNOVATIVE DESIGNS (TABBED) ================= */}
            <section className="py-24 bg-[#3c3a35] text-white overflow-hidden">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-2 gap-6">

                        {/* TABS */}
                        <div className="flex gap-4 border-b border-white/20 pb-2">
                            {["Plans", "Exterior", "Interior"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`
                                        text-lg font-light tracking-wide transition-colors duration-300
                                        ${activeTab === tab ? "text-white scale-105 font-medium" : "text-white/40 hover:text-white/70"}
                                    `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Carousel images={getTabImages()} />
                </Container>
            </section>

            {/* ================= SPECIFICATIONS ================= */}
            <section className="py-24 px-6 bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row gap-16 ">
                        {/* Title Left */}
                        <div className="w-full md:w-1/3">
                            <span className="text-xs uppercase tracking-widest text-gray-500 block mb-4">Details</span>
                            <h2 className="text-4xl font-heading italic text-black mb-6">
                                Specifications &<br />Materials
                            </h2>
                            <p className="text-gray-500 max-w-sm">
                                A breakdown of the sustainable choices and architectural details that define this project.
                            </p>
                        </div>

                        {/* Accordion Right */}
                        <div className="w-full md:w-2/3">
                            <SpecificationsAccordion />
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
