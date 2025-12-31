"use client";

import React, { useState } from "react";

const propertyTypes = [
  "Apartment",
  "Villa",
  "Row House",
  "Farmhouse",
  "Studio Apartment",
  "Residential Plot",
];
const budgets = [
  "₹10,000",
  "₹25,000",
  "₹50,000",
  "₹1 Lakh",
  "₹5 Lakh",
  "₹10 Lakh",
  "₹25 Lakh",
  "₹50 Lakh",
  "₹1 Crore",
  "₹5 Crore",
  "₹10 Crore",
];

const bhkTop = ["1 BHK", "2 BHK", "3 BHK"];
const bhkBottom = ["4 BHK", "5 BHK", "6+ BHK"];

export default function Filters({ filters, setFilters }) {
  const [openMore, setOpenMore] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [openBhk, setOpenBhk] = useState(false);
  const [openBudget, setOpenBudget] = useState(false);

  // normal input change
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // multi select toggle
  const toggleMulti = (key, value) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    setFilters({ ...filters, [key]: updated });
  };
  const toggleArrayFilter = (key, value) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    setFilters({ ...filters, [key]: updated });
  };
  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-3 py-2 px-3 md:py-3 md:px-8  text-black bg-[#550000]">
        <div className="flex  bg-white rounded-full overflow-hidden">
          {/* Dropdown */}
          <select
            name="listingType"
            value={filters.listingType}
            onChange={handleChange}
            className=" px-2 md:px-4  text-black outline-none text-sm"
          >
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="sell">Sell</option>
          </select>
          {/* Search */}
          <input
            type="text"
            name="search"
            placeholder="Search locality"
            className="flex text-sm  p-1 md:p-2 outline-none"
            value={filters.search || ""}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setOpenType(!openType);
              setOpenBhk(false);
            }}
            className="bg-white p-1 md:p-2 rounded-full text-sm min-w-[130px] md:min-w-[180px] text-left"
          >
            {filters.propertyType?.length
              ? `Property Type (${filters.propertyType.length})`
              : "Property Type ▾"}
          </button>

          {openType && (
            <div className="absolute top-12 left-0 w-72 bg-white shadow-lg rounded-lg p-4 z-30">
              <div className="grid grid-cols-2 gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleMulti("propertyType", type)}
                    className={`px-3 py-1 rounded-full border text-sm
                      ${
                        filters.propertyType?.includes(type)
                          ? "bg-[#550000] text-white"
                          : ""
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setFilters({ ...filters, propertyType: [] })}
                  className="text-gray-500 text-sm"
                >
                  Clear
                </button>
                <button
                  onClick={() => setOpenType(false)}
                  className="bg-[#550000] text-white px-3 py-1 rounded-full"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setOpenBudget(!openBudget);
              setOpenType(false);
              setOpenBhk(false);
              setOpenMore(false);
            }}
            className="bg-white  p-1 text-sm md:p-2 rounded-full min-w-[80px] md:min-w-[140px] text-left"
          >
            {filters.budget.length
              ? `Budget (${filters.budget.join(", ")})`
              : "Budget ▾"}
          </button>

          {openBudget && (
            <div className="absolute top-12 left-0 w-72 bg-white shadow-lg rounded-lg p-4 z-30">
              <div className="grid grid-cols-2 gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    onClick={() => {
                      const current = filters.budget || [];
                      const updated = current.includes(b)
                        ? current.filter((v) => v !== b)
                        : [...current, b]; // preserve selection order
                      setFilters({ ...filters, budget: updated });
                    }}
                    className={`px-3 py-1 rounded-full border text-sm
              ${filters.budget.includes(b) ? "bg-[#550000] text-white" : ""}`}
                  >
                    {b}
                  </button>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setFilters({ ...filters, budget: [] })}
                  className="text-gray-500 text-sm"
                >
                  Clear
                </button>
                <button
                  onClick={() => setOpenBudget(false)}
                  className="bg-[#550000] text-white px-3 py-1 rounded-full"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* BHK MULTI SELECT */}
        {/* ================= BHK ================= */}
        <div className="relative ">
          <button
            onClick={() => {
              setOpenBhk(!openBhk);
              setOpenType(false);
            }}
            className="bg-white p-1 text-sm  md:p-2 rounded-full min-w-[60px] md:min-w-[100px] text-left"
          >
            {filters.bhk?.length ? `BHK (${filters.bhk.length})` : "BHK ▾"}
          </button>

          {openBhk && (
            <div className="absolute top-12 left-0 w-64 bg-white shadow-lg rounded-lg p-4 z-30">
              <div className="flex gap-2 mb-3">
                {bhkTop.map((b) => (
                  <button
                    key={b}
                    onClick={() => toggleMulti("bhk", b)}
                    className={`flex-1 px-1 py-1 rounded-full border text-sm
                      ${
                        filters.bhk?.includes(b)
                          ? "bg-[#550000] text-white"
                          : ""
                      }`}
                  >
                    {b}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                {bhkBottom.map((b) => (
                  <button
                    key={b}
                    onClick={() => toggleMulti("bhk", b)}
                    className={`flex-1 px-1 py-1 rounded-full border text-sm 
                      ${
                        filters.bhk?.includes(b) ? "bg-[#ffff] text-black" : ""
                      }`}
                  >
                    {b}
                  </button>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setFilters({ ...filters, bhk: [] })}
                  className="text-gray-500 text-sm"
                >
                  Clear
                </button>
                <button
                  onClick={() => setOpenBhk(false)}
                  className="bg-[#550000] text-white px-3 py-1 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* More Filters */}
        <div className="relative ">
          <button
            onClick={() => setOpenMore(!openMore)}
            className="bg-white hidden md:block p-1 text-sm md:p-2 rounded-full cursor-pointer"
          >
            More Filters ▾
          </button>

          {openMore && (
            <div className="absolute top-12 right-0 :w-[700px] bg-white shadow-lg rounded-lg p-4 z-30">
              {/* Possession Status */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Possession Status</h4>
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Any",
                    "Ready to Move",
                    "Upcoming",
                    "Under Construction",
                  ].map((p) => (
                    <button
                      key={p}
                      onClick={() => toggleArrayFilter("possessionStatus", p)}
                      className={`px-2 py-1 rounded-full border text-sm
                          ${
                            filters.possessionStatus?.includes(p)
                              ? "bg-[#550000] text-white"
                              : ""
                          }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Bathrooms</h4>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5].map((b) => (
                    <button
                      key={b}
                      onClick={() => toggleArrayFilter("bathrooms", b)}
                      className={`px-2 py-1 rounded-full border text-sm
                        ${
                          filters.bathrooms?.includes(b)
                            ? "bg-[#550000] text-white"
                            : ""
                        }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Posted By */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Posted By</h4>
                <div className="flex gap-2">
                  {["Owner", "Builder", "Agent"].map((p) => (
                    <button
                      key={p}
                      onClick={() => toggleArrayFilter("postedBy", p)}
                      className={`px-2 py-1 rounded-full border text-sm
                        ${
                          filters.postedBy?.includes(p)
                            ? "bg-[#550000] text-white"
                            : ""
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() =>
                    setFilters({
                      search: "",
                      type: "",
                      budget: "",
                      bhk: [],
                      possessionStatus: [],
                      bathrooms: [],
                      postedBy: [],
                    })
                  }
                  className="text-gray-500"
                >
                  Clear All
                </button>

                <button
                  onClick={() => setOpenMore(false)}
                  className="bg-[#550000] text-white px-4 py-2 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
