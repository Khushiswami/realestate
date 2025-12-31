// "use client";

// import React, { useState } from "react";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";

// export default function PropertyBanner() {
//   const [userType, setUserType] = useState("");
//   const [purpose, setPurpose] = useState("");
//   const [countryCode, setCountryCode] = useState("IND +91");
//   const [whatsappNumber, setWhatsappNumber] = useState("");

//   return (
//     <>
//       <Navbar />
//       <div className="mx-auto p-4 md:p-12 flex flex-col md:flex-row gap-8 bg-white rounded-lg max-w-7xl">
//         <div className="flex justify-center md:flex-1 mb-6 md:mb-0">
//           <img
//             src="/ll.png"
//             alt="Happy couple holding house frame"
//             className="w-64 md:w-full max-w-sm rounded-lg object-cover"
//           />
//         </div>

//         <div className="md:flex-1 flex flex-col justify-center space-y-6 px-2 md:px-0">
//           <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
//             Post your property Ad to sell or rent online for{" "}
//             <span className="text-[#550000]">Free!</span>
//           </h1>
//           <ul className="space-y-2 text-gray-700 list-disc list-inside text-sm sm:text-base">
//             <li>Get Access to 4 Lakh+ Buyers</li>
//             <li>Sell Faster with Premium Service</li>
//             <li>Get Expert Advice on Market Trends and Insights</li>
//           </ul>
//         </div>

//         <div className="md:flex-1 shadow-lg border border-gray-200 rounded-lg p-6 max-w-full md:max-w-md mx-auto md:mx-0 w-full">
//           <h2 className="text-xl font-semibold mb-6">Let's get you started</h2>

//           <div className="mb-6">
//             <p className="font-semibold mb-2">You are:</p>
//             <div className="flex gap-2 flex-wrap">
//               {["Owner", "Agent", "Builder"].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => setUserType(type)}
//                   className={`flex-grow sm:flex-grow-0 text-center px-4 py-2 rounded-full border text-sm font-medium ${
//                     userType === type
//                       ? "bg-[#550000] text-white border-[#550000]"
//                       : "bg-white text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <p className="font-semibold mb-2">You are here to:</p>
//             <div className="flex gap-2 flex-wrap">
//               {["Sell", "Rent/lease", "List as PG"].map((option) => (
//                 <button
//                   key={option}
//                   onClick={() => setPurpose(option)}
//                   className={`flex-grow sm:flex-grow-0 text-center px-4 py-2 rounded-full border text-sm font-medium ${
//                     purpose === option
//                       ? "bg-[#550000] text-white border-[#550000]"
//                       : "bg-white text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="font-semibold mb-1 block">
//               Your contact number
//             </label>
//             <div className="flex gap-2 flex-col sm:flex-row">
//               <select
//                 value={countryCode}
//                 onChange={(e) => setCountryCode(e.target.value)}
//                 className="border rounded-full px-3 py-2 bg-white text-gray-700 w-full sm:w-auto"
//               >
//                 <option>IND +91</option>
//                 <option>USA +1</option>
//                 <option>UK +44</option>
//               </select>
//               <input
//                 type="tel"
//                 placeholder="Number"
//                 value={whatsappNumber}
//                 onChange={(e) => setWhatsappNumber(e.target.value)}
//                 className="flex-grow border rounded-full px-3 py-2 w-full"
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="font-semibold mb-1 block">Location</label>
//             <input
//               type="text"
//               placeholder="City / Area"
//               className="w-full border rounded-full px-3 py-2"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="font-semibold mb-1 block">Locality</label>
//             <input
//               type="text"
//               placeholder="Enter locality"
//               className="w-full border rounded-full px-3 py-2"
//             />
//           </div>
//           <div className="space-y-3 text-sm mb-6">
//             <label className="flex items-start gap-2">
//               <input type="checkbox" className="mt-1" />
//               <span>
//                 I am posting this property <b>‘exclusively’</b> on Vinayaka
//                 Estate
//               </span>
//             </label>
//             <label className="flex items-start gap-2">
//               <input type="checkbox" className="mt-1" />
//               <span>
//                 I agree to Magicbricks <b>T&amp;C</b>, <b>Privacy Policy</b>,
//                 &amp; <b>Cookie Policy</b>
//               </span>
//             </label>
//           </div>
//           <div className="flex gap-3 mb-4">
//             <button
//               type="button"
//               className="w-1/2 border border-[#550000] text-[#550000] py-2 rounded-full font-semibold"
//             >
//               Login
//             </button>
//             <button
//               disabled={!userType || !purpose || !whatsappNumber}
//               className={`w-1/2 py-2 rounded-full text-white font-semibold transition ${
//                 userType && purpose && whatsappNumber
//                   ? "bg-[#550000] hover:bg-[#440000]"
//                   : "bg-[#550000] opacity-70 cursor-not-allowed"
//               }`}
//             >
//               Post Property
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }
"use client";

import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";

export default function PropertyBanner() {
  const router = useRouter();

  const [userType, setUserType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [countryCode, setCountryCode] = useState("IND +91");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [location, setLocation] = useState("");
  const [locality, setLocality] = useState("");
  const [exclusive, setExclusive] = useState(false);
  const [agree, setAgree] = useState(false);

  // TODO: yeh auth se aayega — abhi demo ke liye false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const formValid =
    userType && purpose && whatsappNumber && location && locality && agree;

  const handleButtonClick = () => {
    if (!formValid) return;

    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push("/property/post");
    }
  };

  return (
    <>
      <Navbar />

      <div className="mx-auto p-4 md:p-12 flex flex-col md:flex-row gap-8 bg-white rounded-lg max-w-7xl">
        {/* IMAGE */}
        <div className="flex justify-center md:flex-1 mb-6 md:mb-0">
          <img
            src="/ll.png"
            alt="Happy couple holding house frame"
            className="w-64 md:w-full max-w-sm rounded-lg object-cover"
          />
        </div>

        {/* LEFT TEXT */}
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

        {/* FORM CARD */}
        <div className="md:flex-1 shadow-lg border border-gray-200 rounded-lg p-6 max-w-full md:max-w-md mx-auto md:mx-0 w-full">
          <h2 className="text-xl font-semibold mb-6">Let's get you started</h2>

          {/* USER TYPE */}
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

          {/* PURPOSE */}
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

          {/* LOCATION */}
          <div className="mb-6">
            <label className="font-semibold mb-1 block">Location</label>
            <input
              type="text"
              placeholder="City / Area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-full px-3 py-2"
            />
          </div>

          {/* LOCALITY */}
          <div className="mb-6">
            <label className="font-semibold mb-1 block">Locality</label>
            <input
              type="text"
              placeholder="Enter locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="w-full border rounded-full px-3 py-2"
            />
          </div>

          {/* CONTACT */}
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
          </div>

          {/* CHECKBOXES */}
          <div className="space-y-3 text-sm mb-6">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={exclusive}
                onChange={() => setExclusive(!exclusive)}
                className="mt-1"
              />
              <span>I am posting this property on Vinayakaestate</span>
            </label>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mt-1"
              />
              <span>
                I agree to Vinayakaestate <b>T&amp;C</b>, <b>Privacy Policy</b>,
                &amp; <b>Cookie Policy</b>
              </span>
            </label>
          </div>

          {/* SINGLE SMART BUTTON */}
          <button
            onClick={handleButtonClick}
            disabled={!formValid}
            className={`w-full py-3 rounded-full text-white font-semibold transition ${
              formValid
                ? "bg-[#550000] hover:bg-[#440000]"
                : "bg-[#550000] opacity-70 cursor-not-allowed"
            }`}
          >
            {isLoggedIn ? "Post Property" : "Login & Continue"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
