"use client";

import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    alert(`Searching:\n${location}\n${type}\n${budget}`);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full h-[440px] md:h-[530px]"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Find Your <br /> Dream Home
        </h1>

        <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-200 max-w-xl">
          Explore our curated collection of exquisite properties meticulously
          tailored to your unique dream home vision.
        </p>

        <button className="mt-5 md:mt-7 bg-[#550000] text-white rounded-lg px-4 py-2 text-sm md:text-base">
          Contact
        </button>
      </div>

      {/* 🔍 SEARCH BAR */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-4 w-full max-w-5xl px-3">
        <div className="bg-white shadow-xl rounded-xl p-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Location */}
          <select
            className="border p-2 md:p-3 rounded-lg w-full text-sm md:text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option>Indore</option>
            <option>Gurgaon</option>
          </select>

          {/* Type */}
          <select
            className="border p-2 md:p-3 rounded-lg w-full text-sm md:text-base"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option>Flat</option>
            <option>House</option>
            <option>Villa</option>
            <option>Plot</option>
            <option>Residential Land</option>
            <option>Farm House</option>
          </select>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="
              bg-[#550000]
              text-white
              rounded-lg
              flex items-center justify-center gap-2
              py-2 px-3
              text-sm
              md:text-base
              md:py-3
              hover:bg-[#6a0000]
              transition
            "
          >
            <FiSearch className="text-lg md:text-xl" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
