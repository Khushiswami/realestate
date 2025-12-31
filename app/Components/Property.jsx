"use client";
import { useState } from "react";

export default function Property({ property }) {
  const [openModal, setOpenModal] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row rounded-md overflow-hidden shadow-md bg-white max-w-full">
        {/* Left: Image */}
        <div className="w-full md:w-1/3 min-w-[150px] h-40 md:h-48 bg-gray-200 relative">
          {property.image ? (
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 italic">
              No Image Available
            </div>
          )}
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between p-4 flex-1">
          <div>
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              {property.title}
            </h3>

            {/* Project Name */}

            {/* Property details: area, status, bathrooms, parking */}
            <div className="flex flex-wrap md:flex-nowrap gap-2 text-sm md:text-sm text-gray-600 mt-2">
              <div>Area: {property.builtUpArea}</div>
              <div>Status: {property.status}</div>
              <div>Bathrooms: {property.bathroom}</div>
              <div>Parking: {property.parking}</div>
            </div>
            <p className="text-gray-600 text-sm md:text-base mb-1">
              Project: {property.projectName}
            </p>

            {/* Description */}
            <p
              className={`text-gray-600 text-sm md:text-base mb-2 ${
                !showFullDesc ? "line-clamp-2" : ""
              }`}
            >
              {property.description}
            </p>

            {!showFullDesc && property.description?.length > 100 && (
              <button
                onClick={() => setShowFullDesc(true)}
                className="text-[#550000] text-sm font-semibold mt-1"
              >
                Read More
              </button>
            )}
            {/* Price */}
            <p className="text-[#550000] font-semibold mt-3 text-base md:text-lg">
              {property.price}
            </p>
          </div>

          {/* Agent + Contact Button */}
          <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-700 text-center md:text-left">
              Agent: <span className="font-semibold">{property.agentName}</span>
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="w-full md:w-auto bg-[#550000] hover:bg-[#7a1f1f] text-white text-sm px-4 py-2 rounded-md"
            >
              Contact Agent
            </button>
          </div>

          {/* Posted Date */}
          <p className="text-xs text-gray-400 mt-2">
            Posted: {property.postedDate}
          </p>
        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative">
            {/* Close */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">
              Get Contact Details
            </h2>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-[#550000]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-[#550000]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-[#550000]"
              />

              <button
                type="button"
                className="w-full bg-[#550000] hover:bg-[#7a1f1f] text-white py-2 rounded mt-3"
              >
                Get Contact Details
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
