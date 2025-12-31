// "use client";

// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const localities = [
//   { name: "AB Road, Indore", rating: "4.4", price: "₹9,581 - ₹43,740/month" },
//   { name: "LIG Colony", rating: "4.1", price: "₹8,200 - ₹35,000/month" },
//   { name: "Manorama Ganj", rating: "3.9", price: "₹10,000 - ₹40,000/month" },
//   { name: "Bhawarkua", rating: "4.3", price: "₹7,500 - ₹28,000/month" },
//   { name: "Geeta Bhawan", rating: "4.2", price: "₹9,000 - ₹32,000/month" },
//   { name: "Palasia", rating: "4.5", price: "₹12,000 - ₹45,000/month" },
//   { name: "Vijay Nagar", rating: "4.6", price: "₹10,000 - ₹50,000/month" },
//   { name: "Rajendra Nagar", rating: "4.0", price: "₹6,500 - ₹25,000/month" },
// ];

// export default function Location() {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4, // Default for desktop
//     slidesToScroll: 1,
//     initialSlide: 0,
//     afterChange: (current) => setCurrentSlide(current),
//     responsive: [
//       {
//         breakpoint: 768, // Mobile screens
//         settings: {
//           slidesToShow: 2, // Show 2 slides on mobile
//         },
//       },
//     ],
//   };

//   // Calculate slidesToShow depending on screen size
//   const slidesToShow = window.innerWidth < 768 ? 2 : 4;

//   const isAtStart = currentSlide === 0;
//   const isAtEnd = currentSlide >= localities.length - slidesToShow;

//   const handleNext = () => {
//     if (!isAtEnd) sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     if (!isAtStart) sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="relative md:mx-20 px-4 py-6  mx-auto">
//       <h2 className="mb-6 text-lg font-semibold"> Top Localities </h2>

//       <Slider ref={sliderRef} {...settings}>
//         {localities.map((loc, index) => (
//           <div key={index} className="px-2">
//             <div className="rounded-lg bg-white p-4 shadow transition hover:shadow-md">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold">{loc.name}</h3>
//                 <span className="rounded bg-green-100 px-2 py-1 text-sm text-green-700">
//                   ⭐ {loc.rating}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-600">{loc.price}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* Previous Arrow */}
//       <button
//         onClick={handlePrev}
//         disabled={isAtStart}
//         className={`absolute top-1/2 -translate-y-1/2 left-0 z-10 h-10 w-10 text-[#550000] flex items-center justify-center  transition-all ${
//           isAtStart ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//       >
//         <GrLinkPrevious size={22} />
//       </button>

//       {/* Next Arrow */}
//       <button
//         onClick={handleNext}
//         disabled={isAtEnd}
//         className={`absolute top-1/2 -translate-y-1/2 right-0 z-10 h-10 w-10 text-[#550000] flex items-center justify-center  transition-all ${
//           isAtEnd ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//       >
//         <GrLinkNext size={22} />
//       </button>
//     </div>
//   );
// }

"use client";

import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const localities = [
  { name: "AB Road, Indore", rating: "4.4", price: "₹9,581 - ₹43,740/month" },
  { name: "LIG Colony", rating: "4.1", price: "₹8,200 - ₹35,000/month" },
  { name: "Manorama Ganj", rating: "3.9", price: "₹10,000 - ₹40,000/month" },
  { name: "Bhawarkua", rating: "4.3", price: "₹7,500 - ₹28,000/month" },
  { name: "Geeta Bhawan", rating: "4.2", price: "₹9,000 - ₹32,000/month" },
  { name: "Palasia", rating: "4.5", price: "₹12,000 - ₹45,000/month" },
  { name: "Vijay Nagar", rating: "4.6", price: "₹10,000 - ₹50,000/month" },
  { name: "Rajendra Nagar", rating: "4.0", price: "₹6,500 - ₹25,000/month" },
];

export default function Location() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative md:mx-20 px-4 py-6  mx-auto">
      <h2 className="mb-6 text-lg font-semibold"> Top Localities </h2>

      <div className="relative">
        {/* Prev Arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10
                           bg-white shadow-lg hover:bg-gray-100
                           w-10 h-10 rounded-full flex items-center justify-center transition"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {localities.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] bg-white rounded-xl shadow
                               hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>

                <p className="text-lg font-bold mt-1"> ⭐{item.rating}</p>

                <p className="text-sm text-gray-600 mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Next"
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10
                           bg-white shadow-lg hover:bg-gray-100
                           w-10 h-10 rounded-full flex items-center justify-center transition"
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
