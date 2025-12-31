"use client";
import { FiArrowRight } from "react-icons/fi";

export default function Topprojectjs() {
  const projects = [
    {
      id: 1,
      title: "Rau Residency",
      developer: "Rau Builders",
      location: "Rau, Indore",
      bhk: "2, 3 BHK Flats",
      price: "₹ 55 Lac onwards",
      img: "/download (15).jpeg",
    },
    {
      id: 2,
      title: "Silicon City",
      developer: "Silicon Developers",
      location: "Indore Bypass, Indore",
      bhk: "3, 4 BHK Flats",
      price: "₹ 2.50 Cr onwards",
      img: "/Residence.jpg",
    },
    {
      id: 3,
      title: "Green Acres",
      developer: "Green Constructions",
      location: "Palasia, Indore",
      bhk: "2, 3 BHK Flats",
      price: "₹ 80 Lac onwards",
      img: "/download (15).jpeg",
    },
    {
      id: 4,
      title: "Lotus Heights",
      developer: "Lotus Group",
      location: "Vijay Nagar, Indore",
      bhk: "3, 4 BHK Flats",
      price: "₹ 1.10 Cr onwards",
      img: "/Residence.jpg",
    },
  ];

  return (
    <section className="px-4 md:px-10 lg:px-20 my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Top Projects in Indore</h2>
        <a
          href="/project"
          className="flex items-center gap-2 text-[#550000] font-semibold hover:text-[#ed8e8e]"
        >
          View All Projects <FiArrowRight />
        </a>
      </div>

      {/* Grid Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={p.img} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600">
                {p.developer} | {p.location}
              </p>
              <p className="text-sm text-gray-500 mt-1">{p.bhk}</p>
              <p className="font-semibold mt-1">{p.price}</p>
              <button className="btn-primary text-white mt-3  text-sm hover:bg-[#ed8e8e] transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
