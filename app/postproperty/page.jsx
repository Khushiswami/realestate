"use client";

import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function PropertyBanner() {
  const [userType, setUserType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [countryCode, setCountryCode] = useState("IND +91");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  return (
    <>
      <Navbar />
      <div className="mx-auto p-4 md:p-12 flex flex-col md:flex-row gap-8 bg-white rounded-lg max-w-7xl">
        {/* Left Image */}
        <div className="flex justify-center md:flex-1 mb-6 md:mb-0">
          <img
            src="/ll.png"
            alt="Happy couple holding house frame"
            className="w-64 md:w-full max-w-sm rounded-lg object-cover"
          />
        </div>

        {/* Middle Text Content */}
        <div className="md:flex-1 flex flex-col justify-center space-y-6 px-2 md:px-0">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Post your property Ad to sell or rent online for{" "}
            <span className="text-[#550000]">Free!</span>
          </h1>
          <ul className="space-y-2 text-gray-700 list-disc list-inside text-sm sm:text-base">
            <li>Get Access to 4 Lakh+ Buyers</li>
            <li>Sell Faster with Premium Service</li>
            <li>Get Expert Advice on Market Trends and Insights</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="md:flex-1 shadow-lg border border-gray-200 rounded-lg p-6 max-w-full md:max-w-md mx-auto md:mx-0 w-full">
          <h2 className="text-xl font-semibold mb-6">Let's get you started</h2>

          {/* User Type */}
          <div className="mb-6">
            <p className="font-semibold mb-2">You are:</p>
            <div className="flex gap-2 flex-wrap">
              {["Owner", "Agent", "Builder"].map((type) => (
                <button
                  key={type}
                  onClick={() => setUserType(type)}
                  className={`flex-grow sm:flex-grow-0 text-center px-4 py-2 rounded-full border text-sm font-medium ${
                    userType === type
                      ? "bg-[#550000] text-white border-[#550000]"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Purpose */}
          <div className="mb-6">
            <p className="font-semibold mb-2">You are here to:</p>
            <div className="flex gap-2 flex-wrap">
              {["Sell", "Rent/lease", "List as PG"].map((option) => (
                <button
                  key={option}
                  onClick={() => setPurpose(option)}
                  className={`flex-grow sm:flex-grow-0 text-center px-4 py-2 rounded-full border text-sm font-medium ${
                    purpose === option
                      ? "bg-[#550000] text-white border-[#550000]"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-6">
            <label className="font-semibold mb-1 block">
              Your contact number
            </label>
            <div className="flex gap-2 flex-col sm:flex-row">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border rounded-full px-3 py-2 bg-white text-gray-700 w-full sm:w-auto"
              >
                <option>IND +91</option>
                <option>USA +1</option>
                <option>UK +44</option>
              </select>
              <input
                type="tel"
                placeholder="Number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="flex-grow border rounded-full px-3 py-2 w-full"
              />
            </div>
            {/* <p className="mt-2 text-xs text-yellow-700 bg-yellow-100 p-2 rounded">
              Enter your{" "}
              <span className="inline-flex items-center gap-1">
                {/* WhatsApp SVG */}
            {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-green-600"
                >
                  <path d="M20.52 3.48A11.74 11.74 0 0 0 3.5 20.5c1.64 1.2 3.64 1.72 5.57 1.47l.22-.03 1.94-1.34a.85.85 0 0 0 .29-.62v-1.37a.8.8 0 0 0-.31-.66l-2.67-2.66a1.19 1.19 0 0 1-.29-1.36c.29-.54 1.37-2.12 3.14-1.98a3.07 3.07 0 0 1 1.71.97l2.74 3.6a.84.84 0 0 0 1.1.24l1.73-1.18a.81.81 0 0 0 .27-1.18l-1.8-2.6a.84.84 0 0 0-.83-.34 6.75 6.75 0 0 1-3.63-1.33 7.41 7.41 0 0 1-2.32-3.29 6.42 6.42 0 0 1 4.29-8.53c.25-.07.44-.14.6-.2a.82.82 0 0 1 1.05.33l2.32 3.6a.86.86 0 0 1-.31 1.31Z" />
                </svg>
                WhatsApp No.
              </span>{" "}
              to get enquiries from Buyer/Tenant
            </p> */}
          </div>

          {/* Start Button */}
          <button
            disabled={!userType || !purpose || !whatsappNumber}
            className={`w-full  bg-[#550000] py-3 rounded-full text-white font-semibold transition ${
              userType && purpose && whatsappNumber
                ? "bg-[#550000] hover:bg-[#550000] cursor-pointer"
                : "bg-[#550000] cursor-not-allowed"
            }`}
          >
            Start Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
