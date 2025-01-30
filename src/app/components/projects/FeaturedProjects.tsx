import Image from "next/image";
import { Card } from "../@elements/Card";
import { ImageCard } from "../@elements/ImageCard";

export type Project = {
  src: string[];
  alt: string;
  title: string;
  description: string;
  shortDescription: string;
};

export const FeaturedProjects = () => {
  const projects: Project[] = [
    {
      src: [
        "/Featured/house-1.jpg",
        "/Featured/house-3.jpg",
        "/Featured/house-2.jpg",
      ],
      alt: "House 1",
      title: "Villa 1",
      description:
        "This is a beautiful villa with a pool and a garden. It has 4 bedrooms and 3 bathrooms. The villa is located in a quiet neighborhood and has a beautiful view of the mountains.",
      shortDescription: "Beautiful villa with a pool and a garden.",
    },
    {
      src: [
        "/Featured/house-2.jpg",
        "/Featured/house-1.jpg",
        "/Featured/house-3.jpg",
      ],
      alt: "House 2",
      title: "Villa 2",
      description:
        "This is a cozy villa with a garden. It has 3 bedrooms and 2 bathrooms. The villa is located in a quiet neighborhood and has a beautiful view of the mountains.",
      shortDescription: "Cozy villa with a garden.",
    },
    {
      src: [
        "/Featured/house-3.jpg",
        "/Featured/house-2.jpg",
        "/Featured/house-1.jpg",
      ],
      alt: "House 3",
      title: "Villa 3",
      description:
        "This is a modern villa with a pool. It has 5 bedrooms and 4 bathrooms. The villa is located in a quiet neighborhood and has a beautiful view of the mountains.",
      shortDescription: "Modern villa with a pool.",
    },
  ];

  return (
    <section className="bg-[#E1ECFF] py-20 px-64 flex flex-col items-center gap-4 mt-40">
      <h1 className="text-4xl font-bold py-2 border-b-[5px] border-solid border-b-blue-500">
        Featured Projects
      </h1>
      <section className="m-10 grid grid-cols-3 grid-rows-2 gap-6">
        <div className="col-span-3 h-[20rem]">
          <ImageCard
            src={projects[0].src}
            alt={projects[0].alt}
            title={projects[0].title}
            description={projects[0].description}
            shortDescription={projects[0].shortDescription}
            className="w-full h-full rounded-lg"
            enableCarousel={false}
            areDetailsAvailable={true}
          />
        </div>
        {projects.map((project, index) => (
          <ImageCard
            enableCarousel={true}
            key={index}
            src={project.src}
            alt={project.alt}
            title={project.title}
            description={project.description}
            shortDescription={project.shortDescription}
          />
        ))}
      </section>
    </section>
  );
};
