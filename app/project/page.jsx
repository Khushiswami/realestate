"use client";

import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const projectsData = [
  {
    id: 1,
    title: "Emerald Gardenia",
    city: "Indore",
    bhk: 3,
    price: 9000000,
    status: "Upcoming",
    possession: "2028",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    agent: "Rahul Sharma",
    amenities: ["Parking", "Garden", "Terrace"],
    description:
      "Emerald Gardenia is a premium residential project offering modern living with excellent connectivity and green surroundings.",
  },
  {
    id: 2,
    title: "SS Infinitus",
    city: "Bhopal",
    bhk: 2,
    price: 6500000,
    status: "Ready To Move",
    possession: "2027",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    agent: "Amit Verma",
    amenities: ["Parking", "Lift", "Power Backup"],
    description:
      "SS Infinitus offers thoughtfully designed homes with world-class amenities for a comfortable lifestyle.",
  },
];

export default function Page() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const [filters, setFilters] = useState({
    city: "Indore",
    minBudget: "",
    maxBudget: "",
    bhk: [],
    completionStatus: "",
    readyToMove: false,
  });

  const filteredProjects = projectsData.filter((p) => {
    const minOk = !filters.minBudget || p.price >= parseInt(filters.minBudget);
    const maxOk = !filters.maxBudget || p.price <= parseInt(filters.maxBudget);
    const bhkOk = filters.bhk.length === 0 || filters.bhk.includes(p.bhk);
    const statusOk =
      !filters.completionStatus || p.status === filters.completionStatus;
    const readyOk = !filters.readyToMove || p.status === "Ready To Move";
    return minOk && maxOk && bhkOk && statusOk && readyOk;
  });

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <Navbar />

      {/* DESKTOP FILTER + PROJECT LIST */}
      <div className="hidden md:block bg-[#fbfbfb] mx-auto px-5 py-8">
        {/* FILTER BAR */}
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <input
            placeholder="Search Project"
            className="border rounded-full px-5 py-2 w-56"
          />

          {/* Filters button */}
          {/* <button
            onClick={() => setFilterOpen(true)}
            className="px-5 py-2 rounded-full border shadow-md"
          >
            Filters
          </button> */}
          {/* FILTER BUTTON */}
          <button
            onClick={() => setFilterOpen(true)}
            className="px-5 py-2 rounded-full border shadow-md"
          >
            Filters
          </button>

          {/* FILTER MODAL */}
          {filterOpen && (
            <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">
              <div className="bg-white w-full max-w-xl rounded-xl p-6 relative">
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setFilterOpen(false)}
                  className="absolute top-4 right-4 text-xl"
                >
                  ✕
                </button>

                <h2 className="text-lg font-semibold mb-4">Select Filters</h2>

                {/* CITY */}
                <div className="mb-4">
                  <label className="font-semibold block mb-1">
                    Select City
                  </label>
                  <select
                    value={filters.city}
                    onChange={(e) =>
                      setFilters({ ...filters, city: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  >
                    <option>Indore</option>
                    <option>Bhopal</option>
                  </select>
                </div>

                {/* BUDGET */}
                <div className="mb-4">
                  <label className="font-semibold block mb-2">Budget</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      placeholder="Min"
                      className="border px-3 py-2 rounded w-1/2"
                      value={filters.minBudget}
                      onChange={(e) =>
                        setFilters({ ...filters, minBudget: e.target.value })
                      }
                    />
                    <input
                      placeholder="Max"
                      className="border px-3 py-2 rounded w-1/2"
                      value={filters.maxBudget}
                      onChange={(e) =>
                        setFilters({ ...filters, maxBudget: e.target.value })
                      }
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    className="w-full accent-teal-600"
                  />
                </div>

                {/* BHK */}
                <div className="mb-4">
                  <label className="font-semibold block mb-2">BHK</label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((b) => (
                      <button
                        key={b}
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            bhk: prev.bhk.includes(b)
                              ? prev.bhk.filter((x) => x !== b)
                              : [...prev.bhk, b],
                          }))
                        }
                        className={`px-4 py-2 rounded-full border text-sm ${
                          filters.bhk.includes(b)
                            ? "bg-teal-600 text-white border-teal-600"
                            : ""
                        }`}
                      >
                        {b === 5 ? "5+ BHK" : `${b} BHK`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() =>
                      setFilters({
                        city: "Indore",
                        minBudget: "",
                        maxBudget: "",
                        bhk: [],
                      })
                    }
                    className="text-[#550000]"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="bg-[#550000] text-white px-6 py-2 rounded-full"
                  >
                    View {filteredProjects.length} Projects
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dropdowns for desktop */}
          {/* Budget */}
          <div className="relative dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown("budget");
              }}
              className="border px-5 py-2 rounded-full"
            >
              Budget ▾
            </button>
            {openDropdown === "budget" && (
              <div className="absolute top-12 left-0 bg-white border shadow-md rounded p-4 w-72">
                <p className="font-semibold mb-3">Budget</p>
                <div className="flex gap-2 mb-3">
                  <select
                    name="minBudget"
                    value={filters.minBudget}
                    onChange={(e) =>
                      setFilters({ ...filters, minBudget: e.target.value })
                    }
                    className="border px-3 py-2 rounded-lg flex-1"
                  >
                    <option value="">Min</option>
                    <option value="5000000">₹50 Lac</option>
                    <option value="8000000">₹80 Lac</option>
                    <option value="10000000">₹1 Cr</option>
                  </select>
                  <select
                    name="maxBudget"
                    value={filters.maxBudget}
                    onChange={(e) =>
                      setFilters({ ...filters, maxBudget: e.target.value })
                    }
                    className="border px-3 py-2 rounded flex-1"
                  >
                    <option value="">Max</option>
                    <option value="10000000">₹1 Cr</option>
                    <option value="15000000">₹1.5 Cr</option>
                    <option value="20000000">₹2 Cr</option>
                  </select>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20000000"
                  className="w-full accent-[#550000]"
                />
              </div>
            )}
          </div>

          {/* BHK */}
          <div className="relative dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown("bhk");
              }}
              className="border px-5 py-2 rounded-full"
            >
              BHK ▾
            </button>
            {openDropdown === "bhk" && (
              <div className="absolute top-12 left-0 bg-white border shadow-md rounded-lg p-4 w-72">
                <p className="font-semibold mb-2">BHK</p>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((b) => (
                    <button
                      key={b}
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          bhk: prev.bhk.includes(b)
                            ? prev.bhk.filter((x) => x !== b)
                            : [...prev.bhk, b],
                        }))
                      }
                      className={`px-3 py-1 rounded-full border text-sm ${
                        filters.bhk.includes(b)
                          ? "bg-[#550000] text-white border-[#550000]"
                          : ""
                      }`}
                    >
                      + {b === 5 ? ">5 BHK" : `${b} BHK`}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Completion Status */}
          <div className="relative dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown("status");
              }}
              className="border px-5 py-2 rounded-full"
            >
              Completion Status ▾
            </button>
            {openDropdown === "status" && (
              <div className="absolute top-12 left-0 bg-white border shadow-md rounded-lg p-4 w-52">
                <p className="font-semibold mb-2">Completion Status</p>
                <select
                  className="border px-3 py-2 rounded-lg w-full"
                  value={filters.completionStatus}
                  onChange={(e) =>
                    setFilters({ ...filters, completionStatus: e.target.value })
                  }
                >
                  <option value="">Any</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ready To Move">Ready To Move</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Project list desktop */}
        <div className="space-y-6 mt-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="flex gap-6 bg-white border rounded-xl p-5"
            >
              <img
                src={p.image}
                className="w-64 h-40 object-cover rounded-lg"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-gray-500">{p.city}</p>
                  <p className="text-[#550000] font-semibold mt-1">
                    ₹ {p.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {p.bhk} BHK · {p.status}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.amenities.map((a, i) => (
                      <span
                        key={i}
                        className="text-xs border px-3 py-1 rounded-full text-gray-600"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {expandedId === p.id
                      ? p.description
                      : p.description.slice(0, 100) + "..."}
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === p.id ? null : p.id)
                      }
                      className="text-[#550000] ml-1 font-semibold"
                    >
                      {expandedId === p.id ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-700">
                    Agent: <span className="font-semibold">{p.agent}</span>
                  </p>
                  <button className="bg-[#550000] text-white px-5 py-2 rounded-full">
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      {/* MOBILE */}
      <div className="md:hidden bg-[#fbfbfb] px-4 py-6 mx-auto">
        {/* Search + Filter in one line */}
        <div className="flex gap-2 mb-4">
          <input
            placeholder="Search Project"
            className="border rounded-full px-4 py-2 flex-1"
          />
          <button
            onClick={() => setFilterOpen(true)}
            className="border px-4 py-2 rounded-full text-sm"
          >
            Filters
          </button>
        </div>

        {/* Mobile Filter Modal */}
        {filterOpen && (
          <div className=" mx-6 fixed inset-0 z-50 flex items-center">
            <div className="bg-white w-full rounded-t-2xl p-3 max-h-[65vh] overflow-y-auto text-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Budget */}
              <div className="mb-4">
                <p className="font-semibold mb-2">Budget</p>
                <div className="flex gap-2 mb-2">
                  <select
                    value={filters.minBudget}
                    onChange={(e) =>
                      setFilters({ ...filters, minBudget: e.target.value })
                    }
                    className="border px-3 py-2 rounded-lg flex-1"
                  >
                    <option value="">Min</option>
                    <option value="5000000">₹50 Lac</option>
                    <option value="8000000">₹80 Lac</option>
                    <option value="10000000">₹1 Cr</option>
                  </select>
                  <select
                    value={filters.maxBudget}
                    onChange={(e) =>
                      setFilters({ ...filters, maxBudget: e.target.value })
                    }
                    className="border px-3 py-2 rounded-lg flex-1"
                  >
                    <option value="">Max</option>
                    <option value="10000000">₹1 Cr</option>
                    <option value="15000000">₹1.5 Cr</option>
                    <option value="20000000">₹2 Cr</option>
                  </select>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20000000"
                  className="w-full accent-[#550000]"
                />
              </div>

              {/* BHK */}
              <div className="mb-4">
                <p className="font-semibold mb-2">BHK</p>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((b) => (
                    <button
                      key={b}
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          bhk: prev.bhk.includes(b)
                            ? prev.bhk.filter((x) => x !== b)
                            : [...prev.bhk, b],
                        }))
                      }
                      className={`px-4 py-2 rounded-full border text-sm ${
                        filters.bhk.includes(b)
                          ? "bg-[#550000] text-white border-[#550000]"
                          : ""
                      }`}
                    >
                      {b === 5 ? "5+ BHK" : `${b} BHK`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Completion Status */}
              <div className="mb-6">
                <p className="font-semibold mb-2">Completion Status</p>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={filters.completionStatus}
                  onChange={(e) =>
                    setFilters({ ...filters, completionStatus: e.target.value })
                  }
                >
                  <option value="">Any</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ready To Move">Ready To Move</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setFilters({
                      city: "Indore",
                      minBudget: "",
                      maxBudget: "",
                      bhk: [],
                      completionStatus: "",
                      readyToMove: false,
                    })
                  }
                  className="w-1/2 border rounded-full py-2"
                >
                  Clear
                </button>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-1/2 bg-[#550000] text-white rounded-full py-2"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Project List */}
        <div className="space-y-5 mt-4">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col gap-4 bg-white border rounded-xl p-4"
            >
              <img
                src={p.image}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-500">{p.city}</p>
                <p className="text-[#550000] font-semibold mt-1">
                  ₹ {p.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  {p.bhk} BHK · {p.status}
                </p>
                <p className="text-sm mt-2 text-gray-600">
                  {expandedId === p.id
                    ? p.description
                    : p.description.slice(0, 90) + "..."}
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === p.id ? null : p.id)
                    }
                    className="text-[#550000] ml-1 font-semibold"
                  >
                    {expandedId === p.id ? "Read less" : "Read more"}
                  </button>
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm">
                    Agent: <b>{p.agent}</b>
                  </p>
                  <button className="bg-[#550000] text-white px-5 py-2 rounded-full">
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
