import Image from "next/image";
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import Viewproperty from "@/app/Components/Viewproperty";
import Topprojectjs from "@/app/Components/Topprojectjs";
import Location from "@/app/Components/Location";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/app/Components/Banner";
import Topproperties from "@/app/Components/Topproperties";
import Footer from "./Components/Footer";
import About from "./Components/About";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Viewproperty />
      <About />
      <Topprojectjs />
      <Location />
      <Banner />
      <Topproperties />
      <Footer />
    </>
  );
}
