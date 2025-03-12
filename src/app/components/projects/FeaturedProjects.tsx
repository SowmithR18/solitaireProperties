import { ImageCard } from "../@elements/ImageCard";
import response from "../../../../public/data/projects.json";
import fs from "fs";
import path from "path";
import { DetailedImageCard } from "../@elements/DetailedImageCard";
import GenericCarousel from "../@elements/generic-carousel/GenericCarousel";

export type Project = {
  src: string[];
  alt: string;
  propertyName: string;
  description: string;
  shortDescription: string;
};

export const FeaturedProjects = () => {
  const projectDirPath = path.join(process.cwd(), "public", "projects");
  const data = response;
  const projects: Project[] = data.map(
    (project: Partial<Project>): Project => ({
      propertyName: project.propertyName ?? "",
      description: project.description ?? "",
      shortDescription: project.shortDescription ?? "",
      alt: project.propertyName ?? "",
      src: fs
        .readdirSync(path.join(projectDirPath, project.propertyName ?? ""))
        .map((image) => `/projects/${project.propertyName ?? ""}/${image}`),
    })
  );

  const projectCards = projects.map((project, index) => (
    <ImageCard
      enableCarousel={true}
      key={index}
      src={project.src}
      alt={project.alt}
      title={project.propertyName}
      shortDescription={project.shortDescription}
    />
  ));

  return (
    <section className="bg-background pt-20 px-4 md:px-64 flex flex-col items-center gap-4 mt-24 md:mt-64">
      <h1 className="text-4xl text-white font-bold py-2 border-b-[5px] border-solid border-b-accent">
        Featured Projects
      </h1>
      <section className="m-4 md:m-10">
        <div className="h-[20rem]">
          <DetailedImageCard
            src={projects[0].src}
            alt={projects[0].alt}
            title={projects[0].propertyName}
            description={projects[0].description}
            className="w-full h-full rounded-lg"
            enableCarousel={true}
            areDetailsAvailable={true}
          />
        </div>
        <div className="my-10">
          <GenericCarousel children={projectCards} />
        </div>
      </section>
    </section>
  );
};
