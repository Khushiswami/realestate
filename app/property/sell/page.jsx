"use client";

import { useState, useEffect } from "react";
import Filters from "../../Components/Filters";
import Property from "../../Components/Property";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const dummyProperties = [
  {
    id: 1,
    title: "3 BHK Apartment in Green Park",
    projectName: "Green Park",
    builtUpArea: "1300 Sq.ft",
    status: "Ready to Move",
    bathroom: 3,
    parking: "Covered",
    price: "₹75,00,000",
    postedDate: "Nov 10, 2025",
    agentName: "Rahul Sharma",
    listingType: "buy",
    description:
      "Newly launched ready to move commercial shops available for sale in Sanwer, Indore with the best returns. Very lucrative plan with bank loans.The total built-up area 966 sq.ft. The locality is famous for its sophistication and also for the availability of transportation service without hassle. The basic necessities such as hospitals, schools, colleges, and markets are available nearby.",

    image: "",
  },
  {
    id: 2,
    title: "Villa in Vijay Nagar",
    projectName: "Vijay Nagar Villas",
    builtUpArea: "3000 Sq.ft",
    status: "Under Construction",
    bathroom: 4,
    listingType: "sell",
    description:
      "Newly launched ready to move commercial shops available for sale in Sanwer, Indore with the best returns. Very lucrative plan with bank loans.The total built-up area 966 sq.ft. The locality is famous for its sophistication and also for the availability of transportation service without hassle. The basic necessities such as hospitals, schools, colleges, and markets are available nearby.",

    parking: "Open",
    price: "₹2,50,00,000",
    postedDate: "Oct 5, 2025",
    image: "",
    agentName: "Rahul Sharma",
  },
  {
    id: 3,
    title: "Farmhouse near Indore",
    projectName: "Indore Farms",
    builtUpArea: "5000 Sq.ft",
    status: "Constructed",
    listingType: "rent",
    description:
      "Newly launched ready to move commercial shops available for sale in Sanwer, Indore with the best returns. Very lucrative plan with bank loans.The total built-up area 966 sq.ft. The locality is famous for its sophistication and also for the availability of transportation service without hassle. The basic necessities such as hospitals, schools, colleges, and markets are available nearby.",
    bathroom: 5,
    parking: "Open",
    price: "₹1,50,00,000",
    postedDate: "Oct 20, 2025",
    image: "",
    agentName: "Rahul Sharma",
  },
];

export default function Page() {
  const [filters, setFilters] = useState({
    listingType: "sell",
    search: "",
    budget: [],
    bhk: [],
    propertyType: [],
    moreFilters: [],
    possessionStatus: [],
    bathrooms: [],
    postedBy: [],
  });

  const filteredProperties = dummyProperties.filter((item) => {
    if (filters.listingType && item.listingType !== filters.listingType) {
      return false;
    }

    if (
      filters.search &&
      !item.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.propertyType.length &&
      !filters.propertyType.some((type) =>
        item.title.toLowerCase().includes(type.toLowerCase())
      )
    ) {
      return false;
    }

    if (
      filters.bhk.length &&
      !filters.bhk.some((b) =>
        item.title.toLowerCase().includes(b.toLowerCase())
      )
    ) {
      return false;
    }

    if (
      filters.moreFilters.length &&
      !filters.moreFilters.includes(item.status)
    ) {
      return false;
    }

    return true;
  });

  return (
    <>
      <Navbar />

      <div className=" py-0 md:py-8">
        <Filters filters={filters} setFilters={setFilters} />

        <div className=" px-2 md:px-9 mt-6 grid grid-cols-1 gap-6">
          {filteredProperties.length === 0 ? (
            <p className="text-center">No properties found.</p>
          ) : (
            filteredProperties.map((property) => (
              <Property key={property.id} property={property} />
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
