import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <section className="flex flex-row items-center justify-start h-3/5 bg-gradient-to-b md:bg-gradient-to-br from-white to-background text-white relative">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center md:pr-48">
      <Image
        src="/Images/new-building.png"
        alt="Astro Logo"
        width={700}
        height={700}
        className="mr-60"
      />
      <div className="hero-text p-4 md:p-0">
        <h1 className="text-5xl font-bold mb-5 leading-normal">
          Expert Property Management
          <br />
          for Optimal Results
        </h1>
        <span className="text-lg text-left text-gray-100">
          Expertly managing your properties with efficiency, reliability, and
          unmatched care
        </span>
        <div className="flex gap-4 my-4">
          <Link
            href="/projects"
            className="bg-accent text-lg text-white py-2 px-6 rounded-full hover:bg-orange-600"
          >
            Explore properties
          </Link>
        </div>
      </div>
    </div>
  </section>
);
