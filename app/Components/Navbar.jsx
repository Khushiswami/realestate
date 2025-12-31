"use client";

import { useState } from "react";
import Link from "next/link";

const cities = [
  "New Delhi",
  "Mumbai",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Indore",
  "Jaipur",
];

export default function Navbar() {
  const [desktopMegaOpen, setDesktopMegaOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All India");

  const [signupOpen, setSignupOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const sendOtp = () => {
    if (!phoneNumber.match(/^\d{10}$/)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    setMessage("OTP sent to your phone number.");
    setOtpSent(true);
  };

  // Verify OTP demo logic
  const verifyOtp = () => {
    if (otp.length !== 6) {
      setMessage("Please enter a 6-digit OTP.");
      return;
    }
    setMessage("Phone number verified successfully!");
  };

  const closeModal = () => {
    setSignupOpen(false);
    setPhoneNumber("");
    setOtp("");
    setOtpSent(false);
    setMessage("");
  };

  return (
    <>
      <header className=" bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex md:hidden w-full items-center justify-between">
              <button
                className="text-2xl"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                ☰
              </button>

              <h1 className="text-lg font-bold text-[#550000]">
                Vinayaka Estate
              </h1>

              <button className="bg-[#550000] text-white px-3 py-1.5 text-sm rounded">
                Post Property
              </button>
            </div>

            <div className="hidden md:flex w-full items-center justify-between">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold text-[#550000]">
                  Vinayaka Estate
                </h1>

                <div
                  className="relative"
                  onMouseEnter={() => setCityOpen(true)}
                  onMouseLeave={() => setCityOpen(false)}
                >
                  <button className="text-sm text-gray-600 font-medium">
                    {selectedCity} ▾
                  </button>

                  {cityOpen && (
                    <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-56 p-3">
                      <p className="text-xs text-gray-500 mb-2">
                        Popular Cities
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {cities.map((city) => (
                          <li
                            key={city}
                            onClick={() => {
                              setSelectedCity(city);
                              setCityOpen(false);
                            }}
                            className="cursor-pointer hover:text-[#550000]"
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <nav className="flex items-center gap-6">
                <Link href="/postproperty">
                  <button className="bg-[#550000] rounded-md text-white px-4 py-2 text-sm">
                    Post Property
                  </button>
                </Link>

                <div className="relative">
                  <button
                    className="text-sm font-medium text-[#550000]"
                    onClick={() => setDesktopMegaOpen((prev) => !prev)}
                  >
                    Property Services ▾
                  </button>

                  {desktopMegaOpen && (
                    <div className="absolute left-1/2 -translate-x-1/1 top-10 w-[600px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
                      {" "}
                      <div>
                        <Link href="/property/buy">
                          <h3 className="font-semibold mb-3 cursor-pointer hover:underline">
                            Buy
                          </h3>
                        </Link>

                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                            <Link href="/property/sale">Flats for Sale</Link>
                          </li>
                          <li>Independent Houses</li>
                          <li>Residential Plots</li>
                          <li>Luxury Properties</li>
                          <li>NRI Properties</li>
                        </ul>
                      </div>
                      <div>
                        <Link href="/property/rent">
                          <h3 className="font-semibold mb-3 cursor-pointer hover:underline">
                            Rent
                          </h3>
                        </Link>{" "}
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Flats for Rent</li>
                          <li>PG / Co-living</li>
                          <li>Commercial Rentals</li>
                        </ul>
                      </div>
                      <div>
                        <Link href="/property/sell">
                          <h3 className="font-semibold mb-3 cursor-pointer hover:underline">
                            Sell
                          </h3>
                        </Link>{" "}
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Post Property FREE</li>
                          <li>Property Valuation</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <button className="btn-primary px-4 py-1.5 text-sm">
                  Login
                </button>

                <button
                  onClick={() => setSignupOpen(true)}
                  className="btn-primary px-4 py-1.5 text-sm"
                >
                  Sign Up
                </button>
              </nav>
            </div>
          </div>

          {mobileOpen && (
            <div className="md:hidden border-t py-4 space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Select City</p>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full border p-2 rounded"
                >
                  <option>All India</option>
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </div>

              <MobileAccordion title="Buy Property">
                <Link href="/property/buy">Flats for Sale</Link>
                <div>Independent Houses</div>
                <div>Residential Plots</div>
                <div>Luxury Properties</div>
                <div>NRI Properties</div>
              </MobileAccordion>

              <MobileAccordion title="Rent Property">
                <div>Flats for Rent</div>
                <div>PG / Co-living</div>
                <div>Commercial Rentals</div>
              </MobileAccordion>

              <MobileAccordion title="Sell Property">
                <div>Post Property for FREE</div>
                <div>Property Valuation</div>
              </MobileAccordion>

              <Link href="/postproperty">
                <button className="w-full bg-[#550000] text-white py-2 rounded">
                  Post Property
                </button>
              </Link>
              <button className="w-full py-2 border rounded">Login</button>
              <button
                onClick={() => setSignupOpen(true)}
                className="w-full py-2 rounded border"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </header>

      {signupOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-[#ed8e8e] rounded-lg max-w-md  w-full md:w-70 p-6 relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-900"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-2xl text-white font-semibold mb-5 text-center">
              Sign Up
            </h2>

            {!otpSent ? (
              <>
                <label
                  htmlFor="phone"
                  className="block text-white font-medium mb-1"
                >
                  Enter your phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10-digit phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-1 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ed8e8e] mb-4"
                  maxLength={10}
                />

                <button
                  onClick={sendOtp}
                  className="w-full bg-white hover:bg-[#ed8e8e] text-black py-1 rounded-md font-semibold transition"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <label
                  htmlFor="otp"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  placeholder="6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ed8e8e] mb-4"
                  maxLength={6}
                />

                <button
                  onClick={verifyOtp}
                  className="w-full bg-[#550000] hover:bg-[#ed8e8e] text-white py-2 rounded-md font-semibold transition"
                >
                  Verify OTP
                </button>

                <button
                  onClick={() => {
                    setOtpSent(false);
                    setOtp("");
                    setMessage("");
                  }}
                  className="mt-4 w-full text-center text-sm text-gray-600 underline hover:text-[#ed8e8e]"
                >
                  Edit phone number
                </button>
              </>
            )}

            {message && (
              <p className="mt-4 text-center text-sm text-red-600">{message}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function MobileAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-2 py-2 font-medium"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-4 pb-3 space-y-2 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
}
