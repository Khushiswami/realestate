import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center my-10"
      style={{
        backgroundImage: "url('/ban.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
          Sell or Rent Faster at the Right Price!
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6">
          Your perfect buyer is waiting, list your property now.
        </p>
        <button className="btn-primary text-black  py-2 px-1 rounded-lg text-lg transition">
          List Your Property
        </button>
      </div>
    </div>
  );
};

export default Banner;
