import EmblaCarousel from "../components/@elements/carousel/Carousel";
import { AboutUs } from "../components/home/AboutUs";
import { Details } from "../components/home/Details";
import { Services } from "../components/projects/Services";
import { FeaturedProjects } from "../components/projects/FeaturedProjects";
import { Hero } from "../components/projects/Hero";

export default function ProjectsPage() {
  return (
    <>
      <Hero />
      <Details imagesrc="luxury-house-2.jpg" />
      <AboutUs />
      <FeaturedProjects />
      <Services />
    </>
  );
}
