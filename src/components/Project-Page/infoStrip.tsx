"use client";

import {
  Ruler,
  DollarSign,
  Clock,
  Home,
  User,
  CheckCircle,
} from "lucide-react";

type Stat = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export default function StatsGrid() {
  const stats: Stat[] = [
    { label: "Area", value: "69 Ft", icon: <Ruler size={26} /> },
    { label: "Budget", value: "$120k", icon: <DollarSign size={26} /> },
    { label: "Duration", value: "6 Months", icon: <Clock size={26} /> },
    { label: "Type", value: "Residential", icon: <Home size={26} /> },
    { label: "Architect", value: "John Doe", icon: <User size={26} /> },
    { label: "Status", value: "Completed", icon: <CheckCircle size={26} /> },
  ];

  return (
    <section className="w-full px-6 py-14">
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              shadow-sm
              border border-gray-200
              p-6
              flex flex-col items-center text-center
              hover:shadow-lg hover:-translate-y-1
              transition duration-300
            "
          >
            {/* Icon */}
            <div className="mb-4 text-black">
              {item.icon}
            </div>

            {/* Value */}
            <p className="text-xl md:text-2xl font-semibold text-gray-900">
              {item.value}
            </p>

            {/* Label */}
            <p className="text-sm text-gray-500 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
