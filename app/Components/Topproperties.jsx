"use client";

import { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const properties = [
  {
    id: 1,
    title: "2 BHK Flat",
    price: "₹16.5 Lac",
    area: "600 sqft",
    location: "Pithampur, Indore",
    status: "Ready to Move",
    img: "/download (15).jpeg",
  },
  {
    id: 2,
    title: "2 BHK Flat",
    price: "₹38 Lac",
    area: "1100 sqft",
    location: "Vijay Nagar, Indore",
    status: "Ready to Move",
    img: "/download (15).jpeg",
  },
  {
    id: 3,
    title: "2 BHK Flat",
    price: "₹75 Lac",
    area: "1200 sqft",
    location: "Sukhliya, Indore",
    status: "Under Construction",
    img: "/download (15).jpeg",
  },
  {
    id: 4,
    title: "2 BHK Flat",
    price: "₹85 Lac",
    area: "1362 sqft",
    location: "Nipania, Indore",
    status: "Ready to Move",
    img: "/download (15).jpeg",
  },
  {
    id: 5,
    title: "3 BHK Flat",
    price: "₹52 Lac",
    area: "1450 sqft",
    location: "Palasia, Indore",
    status: "Ready to Move",
    img: "/download (15).jpeg",
  },
  {
    id: 6,
    title: "3 BHK Flat",
    price: "₹68 Lac",
    area: "1650 sqft",
    location: "Rajendra Nagar, Indore",
    status: "Under Construction",
    img: "/download (15).jpeg",
  },
  {
    id: 7,
    title: "1 BHK Flat",
    price: "₹22 Lac",
    area: "450 sqft",
    location: "Rau, Indore",
    status: "Ready to Move",
    img: "/download (15).jpeg",
  },
  {
    id: 8,
    title: "3 BHK Villa",
    price: "₹1.25 Cr",
    area: "2200 sqft",
    location: "Bypass Road, Indore",
    status: "Ready to Move",
    img: "/download (15).jpeg",
  },
  {
    id: 9,
    title: "2 BHK Builder Floor",
    price: "₹44 Lac",
    area: "980 sqft",
    location: "Scheme 78, Indore",
    status: "Ready to Move",
    img: "/download (15).jpeg",
  },
  {
    id: 10,
    title: "4 BHK Villa",
    price: "₹2.1 Cr",
    area: "3200 sqft",
    location: "Super Corridor, Indore",
    status: "Under Construction",
    img: "/download (15).jpeg",
  },
];

export default function Topproperties() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full px-4 md:px-20 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Fresh Properties in Indore</h2>
        <span className="flex items-center gap-2 text-[#550000] font-semibold cursor-pointer hover:text-[#ed8e8e]">
          See all Properties →
        </span>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Prev Arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10
                     bg-white shadow-lg hover:bg-gray-100
                     w-10 h-10 rounded-full flex items-center justify-center transition"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {properties.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] bg-white rounded-xl shadow
                         hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-lg font-bold mt-1">
                  {item.price}
                  <span className="text-sm text-gray-500"> | {item.area}</span>
                </p>

                <p className="text-sm text-gray-600 mt-1">{item.location}</p>

                <p
                  className={`text-xs mt-2 font-semibold ${
                    item.status === "Ready to Move"
                      ? "text-green-600"
                      : "text-[#550000"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Next"
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10
                     bg-white shadow-lg hover:bg-gray-100
                     w-10 h-10 rounded-full flex items-center justify-center transition"
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
