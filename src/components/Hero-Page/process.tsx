import Image from "next/image";
import Container from "@/components/container";

export default function Process() {
    const steps = [
        {
            title: "Briefing",
            desc: "It begins with a deep dive to understand the client's dreams, functional requirements, and aesthetic preferences. This is a critical stage.",
            icon: "/Hero-Page-Images/icons/briefing.png",
        },
        {
            title: "Design",
            desc: "We translate concepts into detailed designs. From initial drafts to precise models, we meticulously refine every aspect of the project.",
            icon: "/Hero-Page-Images/icons/design.png",
        },
        {
            title: "Execution",
            desc: "Our designs materialize through expert construction. Managing projects comprehensively, we oversee all elements from structure to finishing touches.",
            icon: "/Hero-Page-Images/icons/execution.png",
        },
        {
            title: "Handover",
            desc: "The grand unveiling! We present clients with access to their transformed environment, fully complete and ready for immediate enjoyment.",
            icon: "/Hero-Page-Images/icons/handover.png",
        },
    ];

    return (
        <section className="bg-white py-6 md:py-8 lg:py-10">
            <Container>
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4">
                    <h2 className="font-heading italic text-black text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 md:mb-6">
                        Our Process
                    </h2>
                    <p className="font-body text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Our process is rooted in collaboration and innovation. From initial sketches to final walkthroughs, we focus on creating spaces that resonate with purpose and elegance. Every step is a fusion of creativity and precision.
                    </p>
                </div>

                {/* PROCESS GRID WITH BORDERS */}
                <div className="border-t border-gray-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`
                                    relative px-6 md:px-8 py-12 md:py-16 text-center
                                    border-b border-gray-300
                                    sm:border-r
                                    ${i % 2 === 1 ? 'sm:border-r-0' : ''}
                                    lg:border-r
                                    ${i === steps.length - 1 ? 'lg:border-r-0' : ''}
                                    hover:bg-gray-50 transition-colors duration-300
                                `}
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-6 md:mb-8">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={64}
                                        height={64}
                                        className="w-12 h-12 md:w-16 md:h-16"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-heading text-black italic text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="font-body text-xs md:text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
