"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

type SpecItem = {
    title: string;
    details: string;
};

export default function SpecificationsAccordion() {
    const specs: SpecItem[] = [
        {
            title: "Structure & Materials",
            details:
                "Reinforced concrete core with cross-laminated timber (CLT) framing. Exterior cladding features locally sourced polished limestone and weather-resistant zinc panels.",
        },
        {
            title: "Sustainable Systems",
            details:
                "Passive solar heating integration, rainwater harvesting system (5000L capacity), and geothermal heat pumps for energy-efficient climate control.",
        },
        {
            title: "Interior Finishes",
            details:
                "Flooring utilizes reclaimed white oak. Walls finished with low-VOC mineral paints. Countertops crafted from recycled glass composite.",
        },
        {
            title: "Lighting & Acoustics",
            details:
                "Smart LED lighting system with circadian rhythm adjustment. Acoustic baffling integrated into timber ceiling slats to reduce reverberation.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full space-y-4">
            {specs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="border-b border-gray-200 last:border-0"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full py-6 flex items-center justify-between text-left group transition-colors"
                        >
                            <h3 className={`text-xl md:text-2xl font-heading italic transition-colors ${isOpen ? "text-black" : "text-gray-500 group-hover:text-black"}`}>
                                {item.title}
                            </h3>
                            <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? "border-black bg-black text-white rotate-180" : "border-gray-300 text-gray-400 group-hover:border-black group-hover:text-black"}`}>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[200px] opacity-100 mb-6" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                {item.details}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
