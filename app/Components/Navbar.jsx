// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // const cities = [
// //   "New Delhi",
// //   "Mumbai",
// //   "Bangalore",
// //   "Pune",
// //   "Hyderabad",
// //   "Chennai",
// //   "Kolkata",
// //   "Ahmedabad",
// //   "Indore",
// //   "Jaipur",
// // ];

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const [cityOpen, setCityOpen] = useState(false);
// //   const [selectedCity, setSelectedCity] = useState("All India");

// //   return (
// //     <header className="border-b bg-white sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Top Bar */}
// //         <div className="flex items-center justify-between h-16">
// //           {/* Left */}
// //           <div className="flex items-center gap-6 relative">
// //             <h1 className="text-2xl font-bold text-[#550000]">
// //               Vinayaka Estate
// //             </h1>

// //             {/* Location Selector */}
// //             <div
// //               className="relative hidden md:block"
// //               onMouseEnter={() => setCityOpen(true)}
// //               onMouseLeave={() => setCityOpen(false)}
// //             >
// //               <button className="text-sm text-gray-600 font-medium">
// //                 {selectedCity} ▾
// //               </button>

// //               {cityOpen && (
// //                 <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-56 p-3">
// //                   <p className="text-xs text-gray-500 mb-2">Popular Cities</p>
// //                   <ul className="text-sm text-gray-700 space-y-1">
// //                     {cities.map((city) => (
// //                       <li
// //                         key={city}
// //                         onClick={() => {
// //                           setSelectedCity(city);
// //                           setCityOpen(false);
// //                         }}
// //                         className="cursor-pointer hover:text-[#550000]"
// //                       >
// //                         {city}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Desktop Menu */}
// //           <nav className="hidden md:flex items-center gap-6">
// //             <button className=" btn-primary bg-[#550000] text-white px-4 py-2  text-sm">
// //               Post Property
// //             </button>

// //             {/* Mega Menu */}
// //             <div
// //               className="relative"
// //               onMouseEnter={() => setOpen(true)}
// //               onMouseLeave={() => setOpen(false)}
// //             >
// //               <button className="text-sm font-medium text-[#550000]">
// //                 Property Services ▾
// //               </button>

// //               {open && (
// //                 <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[1000px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
// //                   {/* Buy */}
// //                   <div>
// //                     <h3 className="font-semibold mb-3">
// //                       Buy Property in India
// //                     </h3>
// //                     <ul className="space-y-2 text-sm text-gray-600">
// //                       <li>
// //                         <Link
// //                           href="/property/buy"
// //                           className="hover:text-[#550000]"
// //                         >
// //                           Flats for Sale
// //                         </Link>
// //                       </li>{" "}
// //                       <li>Independent Houses</li>
// //                       <li>Residential Plots</li>
// //                       <li>Luxury Properties</li>
// //                       <li>NRI Properties</li>
// //                       <li className="text-[#550000]">
// //                         Submit Property Requirement
// //                       </li>
// //                     </ul>
// //                   </div>

// //                   {/* Rent */}
// //                   <div>
// //                     <h3 className="font-semibold mb-3">
// //                       Rent Property in India
// //                     </h3>
// //                     <ul className="space-y-2 text-sm text-gray-600">
// //                       <li>Flats for Rent</li>
// //                       <li>Independent Houses</li>
// //                       <li>PG / Co-living</li>
// //                       <li>Commercial Rentals</li>
// //                       <li className="text-[#550000]">
// //                         Submit Rental Requirement
// //                       </li>
// //                     </ul>

// //                     <div className="mt-4 p-4 bg-cyan-100 rounded-lg text-sm">
// //                       <p className="font-semibold">Hot Deals</p>
// //                       <p className="text-gray-600">
// //                         Exclusive offers across India
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* Sell */}
// //                   <div>
// //                     <h3 className="font-semibold mb-3">
// //                       Sell / Rent Your Property
// //                     </h3>
// //                     <ul className="space-y-2 text-sm text-gray-600">
// //                       <li>Post Property for FREE</li>
// //                       <li>
// //                         Buy Seller Plans{" "}
// //                         <span className="text-[#550000]">upto 50% off</span>
// //                       </li>
// //                       <li>Property Valuation</li>
// //                     </ul>

// //                     <h3 className="font-semibold mt-4 mb-2">
// //                       Real Estate Resources
// //                     </h3>
// //                     <ul className="space-y-2 text-sm text-gray-600">
// //                       <li>Home Buying Guide</li>
// //                       <li>Home Loan Assistance</li>
// //                       <li>Interior Design Ideas</li>
// //                       <li>Real Estate News</li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             <button className=" btn-primary border px-4 py-1.5 rounded text-sm">
// //               Login
// //             </button>
// //             <button className="btn-primary px-4 py-1.5 rounded text-sm">
// //               Sign Up
// //             </button>
// //           </nav>

// //           {/* Mobile Menu Button */}
// //           <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
// //             ☰
// //           </button>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const cities = [
//   "New Delhi",
//   "Mumbai",
//   "Bangalore",
//   "Pune",
//   "Hyderabad",
//   "Chennai",
//   "Kolkata",
//   "Ahmedabad",
//   "Indore",
//   "Jaipur",
// ];

// export default function Navbar() {
//   const [desktopMegaOpen, setDesktopMegaOpen] = useState(false);
//   const [cityOpen, setCityOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("All India");

//   return (
//     <header className="border-b bg-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* ================= TOP BAR ================= */}
//         <div className="h-16 flex items-center justify-between">
//           {/* ===== MOBILE HEADER ===== */}
//           <div className="flex md:hidden w-full items-center justify-between">
//             {/* LEFT: MENU */}
//             <button
//               className="text-2xl"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               ☰
//             </button>

//             {/* CENTER: LOGO */}
//             <h1 className="text-lg font-bold text-[#550000]">
//               Vinayaka Estate
//             </h1>

//             {/* RIGHT: POST PROPERTY */}
//             <button className="bg-[#550000] text-white px-3 py-1.5 text-sm rounded">
//               Post Property
//             </button>
//           </div>

//           {/* ===== DESKTOP HEADER ===== */}
//           <div className="hidden md:flex w-full items-center justify-between">
//             {/* LEFT */}
//             <div className="flex items-center gap-6">
//               <h1 className="text-2xl font-bold text-[#550000]">
//                 Vinayaka Estate
//               </h1>

//               {/* CITY SELECTOR */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setCityOpen(true)}
//                 onMouseLeave={() => setCityOpen(false)}
//               >
//                 <button className="text-sm text-gray-600 font-medium">
//                   {selectedCity} ▾
//                 </button>

//                 {cityOpen && (
//                   <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-56 p-3">
//                     <p className="text-xs text-gray-500 mb-2">Popular Cities</p>
//                     <ul className="text-sm text-gray-700 space-y-1">
//                       {cities.map((city) => (
//                         <li
//                           key={city}
//                           onClick={() => {
//                             setSelectedCity(city);
//                             setCityOpen(false);
//                           }}
//                           className="cursor-pointer hover:text-[#550000]"
//                         >
//                           {city}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* RIGHT MENU */}
//             <nav className="flex items-center gap-6">
//               <button className="bg-[#550000] text-white px-4 py-2 text-sm">
//                 Post Property
//               </button>

//               {/* MEGA MENU */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDesktopMegaOpen(true)}
//                 onMouseLeave={() => setDesktopMegaOpen(false)}
//               >
//                 <button className="text-sm font-medium text-[#550000]">
//                   Property Services ▾
//                 </button>

//                 {desktopMegaOpen && (
//                   <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[600px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
//                     <div>
//                       <h3 className="font-semibold mb-3">Buy</h3>
//                       <ul className="space-y-2 text-sm text-gray-600">
//                         <li>
//                           <Link href="/property/buy">Flats for Sale</Link>
//                         </li>
//                         <li>Independent Houses</li>
//                         <li>Residential Plots</li>
//                         <li>Luxury Properties</li>
//                         <li>NRI Properties</li>
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-semibold mb-3">Rent</h3>
//                       <ul className="space-y-2 text-sm text-gray-600">
//                         <li>Flats for Rent</li>
//                         <li>PG / Co-living</li>
//                         <li>Commercial Rentals</li>
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-semibold mb-3">Sell</h3>
//                       <ul className="space-y-2 text-sm text-gray-600">
//                         <li>Post Property FREE</li>
//                         <li>Property Valuation</li>
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <button className="btn-primary px-4 py-1.5 text-sm">Login</button>
//               <button className="btn-primary px-4 py-1.5 text-sm">
//                 Sign Up
//               </button>
//             </nav>
//           </div>
//         </div>

//         {/* ================= MOBILE MENU ================= */}
//         {mobileOpen && (
//           <div className="md:hidden border-t py-4 space-y-4">
//             {/* CITY */}
//             <div>
//               <p className="text-sm font-medium mb-2">Select City</p>
//               <select
//                 value={selectedCity}
//                 onChange={(e) => setSelectedCity(e.target.value)}
//                 className="w-full border p-2 rounded"
//               >
//                 <option>All India</option>
//                 {cities.map((city) => (
//                   <option key={city}>{city}</option>
//                 ))}
//               </select>
//             </div>

//             <MobileAccordion title="Buy Property">
//               <Link href="/property/buy">Flats for Sale</Link>
//               <div>Independent Houses</div>
//               <div>Residential Plots</div>
//               <div>Luxury Properties</div>
//               <div>NRI Properties</div>
//             </MobileAccordion>

//             <MobileAccordion title="Rent Property">
//               <div>Flats for Rent</div>
//               <div>PG / Co-living</div>
//               <div>Commercial Rentals</div>
//             </MobileAccordion>

//             <MobileAccordion title="Sell Property">
//               <div>Post Property for FREE</div>
//               <div>Property Valuation</div>
//             </MobileAccordion>

//             <button className="w-full bg-[#550000] text-white py-2 rounded">
//               Post Property
//             </button>
//             <button className="w-full py-2 border rounded">Login</button>
//             <button className="w-full py-2 rounded">Sign Up</button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// /* ========== MOBILE ACCORDION ========== */
// function MobileAccordion({ title, children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center px-2 py-2 font-medium"
//       >
//         {title}
//         <span>{open ? "−" : "+"}</span>
//       </button>

//       {open && (
//         <div className="px-4 pb-3 space-y-2 text-sm text-gray-600">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }
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

  // Signup Modal states
  const [signupOpen, setSignupOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  // Send OTP demo logic
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
    // You can close modal or do further actions here
  };

  // Reset form when modal closes
  const closeModal = () => {
    setSignupOpen(false);
    setPhoneNumber("");
    setOtp("");
    setOtpSent(false);
    setMessage("");
  };

  return (
    <>
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* ================= TOP BAR ================= */}
          <div className="h-16 flex items-center justify-between">
            {/* ===== MOBILE HEADER ===== */}
            <div className="flex md:hidden w-full items-center justify-between">
              {/* LEFT: MENU */}
              <button
                className="text-2xl"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                ☰
              </button>

              {/* CENTER: LOGO */}
              <h1 className="text-lg font-bold text-[#550000]">
                Vinayaka Estate
              </h1>

              {/* RIGHT: POST PROPERTY */}
              <button className="bg-[#550000] text-white px-3 py-1.5 text-sm rounded">
                Post Property
              </button>
            </div>

            {/* ===== DESKTOP HEADER ===== */}
            <div className="hidden md:flex w-full items-center justify-between">
              {/* LEFT */}
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold text-[#550000]">
                  Vinayaka Estate
                </h1>

                {/* CITY SELECTOR */}
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

              {/* RIGHT MENU */}
              <nav className="flex items-center gap-6">
                <button className="bg-[#550000] text-white px-4 py-2 text-sm">
                  Post Property
                </button>

                {/* MEGA MENU */}
                <div
                  className="relative"
                  onMouseEnter={() => setDesktopMegaOpen(true)}
                  onMouseLeave={() => setDesktopMegaOpen(false)}
                >
                  <button className="text-sm font-medium text-[#550000]">
                    Property Services ▾
                  </button>

                  {desktopMegaOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[600px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Buy</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                            <Link href="/property/buy">Flats for Sale</Link>
                          </li>
                          <li>Independent Houses</li>
                          <li>Residential Plots</li>
                          <li>Luxury Properties</li>
                          <li>NRI Properties</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Rent</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Flats for Rent</li>
                          <li>PG / Co-living</li>
                          <li>Commercial Rentals</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Sell</h3>
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

                {/* Sign Up triggers modal */}
                <button
                  onClick={() => setSignupOpen(true)}
                  className="btn-primary px-4 py-1.5 text-sm"
                >
                  Sign Up
                </button>
              </nav>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileOpen && (
            <div className="md:hidden border-t py-4 space-y-4">
              {/* CITY */}
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

              <button className="w-full bg-[#550000] text-white py-2 rounded">
                Post Property
              </button>
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

      {/* ===== SIGN UP MODAL ===== */}
      {signupOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

            {!otpSent ? (
              <>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Enter your phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10-digit phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
                  maxLength={10}
                />

                <button
                  onClick={sendOtp}
                  className="w-full bg-[#550000] hover:bg-teal-700 text-white py-2 rounded-md font-semibold transition"
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
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
                  maxLength={6}
                />

                <button
                  onClick={verifyOtp}
                  className="w-full bg-[#550000] hover:bg-teal-700 text-white py-2 rounded-md font-semibold transition"
                >
                  Verify OTP
                </button>

                <button
                  onClick={() => {
                    setOtpSent(false);
                    setOtp("");
                    setMessage("");
                  }}
                  className="mt-4 w-full text-center text-sm text-gray-600 underline hover:text-teal-600"
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

/* ========== MOBILE ACCORDION ========== */
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
