export default function Footer() {
  return (
    <footer className="bg-[#ed8e8e]  mt-16">
      <div className=" mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg text-white font-semibold mb-3">About us</h3>
            <p className="text-sm text-white leading-relaxed">
              Indore is one of the fastest-growing real estate markets in Madhya
              Pradesh. The city offers a wide range of residential properties
              including apartments, villas, builder floors, and plots across
              prime localities like Vijay Nagar, Palasia, Super Corridor, and
              Rau.
            </p>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-3">
              Quick Links{" "}
            </h3>
            <ul className="text-sm text-white space-y-2">
              <li>About us</li>
              <li>Buy a Property</li>
              <li>Sell a Property</li>
              <li>Rent a Property</li>

              <li>Contact</li>
              <li>Blog</li>
              <li>Carrers</li>

              <li>Testimonilas</li>
            </ul>
          </div>

          <div>
            <h3 className=" text-white text-lg font-semibold mb-3">
              Popular Localities in Indore
            </h3>
            <ul className="text-sm text-white space-y-2">
              <li>Property in Vijay Nagar</li>
              <li>Property in Palasia</li>
              <li>Property in Rau</li>
              <li>Property in Super Corridor</li>
              <li>Property in Nipania</li>
              <li>Property in Scheme 78</li>
              <li>Property in Bypass Road</li>
            </ul>
          </div>

          <div>
            <h3 className=" text-white text-lg font-semibold mb-3">
              Property Types in Indore
            </h3>
            <ul className="text-sm text-white space-y-2">
              <li>2 BHK Flats in Indore</li>
              <li>3 BHK Flats in Indore</li>
              <li>Villas in Indore</li>
              <li>Builder Floors in Indore</li>
              <li>Residential Plots in Indore</li>
              <li>Affordable Homes in Indore</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white gap-4">
          <p>
            © {new Date().getFullYear()} Properties in Indore. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
