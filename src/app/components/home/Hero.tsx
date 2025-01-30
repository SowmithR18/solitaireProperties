import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <section className="flex flex-row items-center justify-start h-3/5 bg-gradient-to-br from-white to-blue-500 text-white relative">
    <div className="flex-row flex justify-between items-center pr-48">
      <Image
        src="/Images/new-building.png"
        alt="Astro Logo"
        width={700}
        height={700}
        className="mr-60"
      />
      <div className="hero-text">
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
            className="bg-blue-500 text-lg text-white py-2 px-6 rounded-full hover:bg-blue-700"
          >
            Explore properties
          </Link>
        </div>
      </div>
    </div>
  </section>
);
