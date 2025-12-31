"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Ruler, Building2, Globe, Users } from "lucide-react";

export default function About() {
  const stats = [
    { value: 500, suffix: "+", label: "Properties Sold", icon: Ruler },
    { value: 300, suffix: "+", label: "Properties Rented", icon: Building2 },
    { value: 10, suffix: "+", label: "Years of Experience", icon: Globe },
    { value: 95, suffix: "%", label: "Client Satisfaction", icon: Users },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !hasAnimated) {
          stats.forEach((stat, i) => {
            if (numberRefs.current[i]) {
              const countUp = new CountUp(numberRefs.current[i], stat.value, {
                duration: 2,
                suffix: stat.suffix,
                separator: ",",
              });
              countUp.start();
            }
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    numberRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section className="relative py-6 md:py-16 ">
      <div className="container mx-auto px-5 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-10">
        {/* Left: Video/Image */}
        <div className="relative rounded-lg w-full h-64 sm:h-80 md:h-[500px] overflow-hidden ">
          <img
            src="/Residence.jpg"
            alt="Residence"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000] mb-6">
            Your Trusted Partner in Real Estate
          </h2>

          <p className="text-gray-600 mb-4 text-justify leading-relaxed text-base md:text-md">
            We specialize in helping clients buy, sell, and rent properties
            across all segments including Apartments, Flats, PGs, and Houses.
            With years of experience and a dedicated team, we ensure smooth and
            transparent transactions for residential and commercial properties.
          </p>

          {/* Categories */}

          {/* Core Values */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h6 className="text-xl md:text-2xl font-bold text-[#000]">
              Core Values:
            </h6>
            <p className="text-gray-700 text-sm md:text-base">
              Integrity | Transparency | Customer Satisfaction | Trust
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-1 bg-[#550000] rounded-full text-white shadow-lg flex items-center justify-center md:p-3">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3
                      ref={(el) => {
                        numberRefs.current[i] = el;
                      }}
                      className="text-md md:text-2xl font-bold text-[#000]"
                    >
                      0
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
