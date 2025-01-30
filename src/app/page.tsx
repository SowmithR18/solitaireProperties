import { AboutUs } from "./components/home/AboutUs";
import { Details } from "./components/home/Details";
import { PropertyManagement } from "./components/home/PropertyManagement";
import { Services } from "./components/home/Services";
import { Hero } from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Details imagesrc="luxury-house.jpg" />
      <AboutUs />
      <Services />
      <PropertyManagement />
    </>
  );
}
