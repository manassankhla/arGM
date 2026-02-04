import Image from "next/image";
import Container from "@/components/container";

export default function Process() {
    const steps = [
        {
            title: "Briefing",
            desc: "It begins with a deep dive to understand the client's dreams, functional requirements, and aesthetic preferences.",
            icon: "/Hero-Page-Images/icons/briefing.png",
        },
        {
            title: "Design",
            desc: "We translate concepts into detailed designs, from initial drafts to precise models.",
            icon: "/Hero-Page-Images/icons/design.png",
        },
        {
            title: "Execution",
            desc: "Our designs materialize through expert craftsmanship, ensuring structure to finishing touches.",
            icon: "/Hero-Page-Images/icons/execution.png",
        },
        {
            title: "Handover",
            desc: "The grand unveiling—clients experience the transformed environment, fully completed.",
            icon: "/Hero-Page-Images/icons/handover.png",
        },
    ];

    return (
        <Container>
        <section className="bg-white">

            {/* ================= OUR PROCESS ================= */}
            <div className="mx-auto px-6 py-20">

                {/* Heading */}
                <div className="text-center mx-auto mb-16">
                    <h2 className="font-heading italic text-black text-[74px] leading-tight mb-5">Our Process</h2>
                    <p className="font-body text-[18px] text-gray-500 leading-relaxed">
                        Our process is rooted in collaboration and innovation. From initial sketches to final walkthroughs, we focus on creating spaces that resonate with purpose and elegance. Every step is a fusion of creativity and precision.
                    </p>
                </div>

                {/* PROCESS GRID WITH BORDERS */}
                <div className="border-t p-2 border-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="relative border-r border-b border-gray-300 last:border-r-0 px-8 py-16 text-center"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-8">
                                    <Image src={step.icon} alt="" width={48} height={48} />
                                </div>

                                {/* Title */}
                                <h3 className="font-heading text-black italic text-xl mb-6">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


                   </section>
                   </Container>
    );
}
