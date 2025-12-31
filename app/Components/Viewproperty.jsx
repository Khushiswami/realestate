"use client";
import { useState, useEffect } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

export default function Viewproperty() {
  const projects = [
    {
      id: 1,
      title: "Emerald Crescent",
      developer: "Emerald Developers",
      location: "Mayakhedi, Indore",
      type: "Residential Plots",
      price: "₹ 1.20 Cr onwards",
      img: "/download (15).jpeg",
    },
    {
      id: 2,
      title: "PM Uplands",
      developer: "PM Creations",
      location: "Nihalpur Mundi, Indore",
      type: "Plots & Land",
      price: "₹ 60.5 Lac onwards",
      img: "/Residence.jpg",
    },
    {
      id: 3,
      title: "Skyline Heights",
      developer: "Skyline Group",
      location: "Super Corridor, Indore",
      type: "Luxury Apartments",
      price: "₹ 95 Lac onwards",
      img: "/download (15).jpeg",
    },
    {
      id: 4,
      title: "Skyline",
      developer: "Skyline Group",
      location: "Bangali Indore",
      type: "Luxury Flats",
      price: "₹ 75 Lac onwards",
      img: "/Residence.jpg",
    },
    {
      id: 5,
      title: "Rau City",
      developer: "Rau Builders",
      location: "Rau, Indore",
      type: "Residential Apartments",
      price: "₹ 55 Lac onwards",
      img: "/download (15).jpeg",
    },
    {
      id: 6,
      title: "Silicon City",
      developer: "Silicon Developers",
      location: "Indore Bypass, Indore",
      type: "Luxury Villas",
      price: "₹ 2.50 Cr onwards",
      img: "/Residence.jpg",
    },
    {
      id: 7,
      title: "Green Acres",
      developer: "Green Constructions",
      location: "Palasia, Indore",
      type: "Plots & Land",
      price: "₹ 80 Lac onwards",
      img: "/download (15).jpeg",
    },
    {
      id: 8,
      title: "Lotus Heights",
      developer: "Lotus Group",
      location: "Vijay Nagar, Indore",
      type: "Luxury Apartments",
      price: "₹ 1.10 Cr onwards",
      img: "/Residence.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(2); // default 2 cards

  const gap = 24; // gap in px

  // update perView based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerView(1); // mobile: 1 card
      } else {
        setPerView(2); // desktop: 2 cards
      }
      // Reset index if out of bounds after resize
      if (index > projects.length - perView) {
        setIndex(Math.max(projects.length - perView, 0));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [index, projects.length]);

  const next = () => {
    if (index < projects.length - perView) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const translateX = () => {
    const cardWidthPercent = 100 / perView;
    return `-${index * cardWidthPercent}%`;
  };

  return (
    <section className="px-4 md:px-10 lg:px-20 my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="flex gap-0">
          <button
            onClick={prev}
            className="w-10 h-10  flex text-[#550000] items-center justify-center hover:text-[#ed8e8e]"
          >
            <GrLinkPrevious size={22} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10  flex text-[#550000] items-center justify-center hover:text-[#ed8e8e]"
          >
            <GrLinkNext size={22} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(${translateX()})`,
            gap: `${gap}px`,
          }}
        >
          {projects.map((p) => (
            // <div
            //   key={p.id}
            //   className="flex-none"
            //   style={{ width: `calc(${100 / perView}% - ${gap / perView}px)` }}
            // >
            <div
              key={p.id}
              className="flex-none"
              style={{ width: `calc(${100 / perView}% - ${gap / perView}px)` }}
            >
              <div className="bg-white rounded-xl shadow border-[#d7d7d7] bordfer-1 overflow-hidden">
                <img src={p.img} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-600">
                    by {p.developer}
                    <br />
                    {p.location}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm text-gray-500">{p.type}</p>
                      <p className="font-semibold">{p.price}</p>
                    </div>
                    <button className="btn-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
