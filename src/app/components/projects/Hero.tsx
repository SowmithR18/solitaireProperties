import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <section className="flex flex-row items-center justify-end h-3/5 bg-gradient-to-tl from-white to-blue-500 text-white relative">
    <div className="flex-row flex justify-between items-center pl-48">
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
            href="/"
            className="bg-blue-500 text-lg text-white py-2 px-6 rounded-full hover:bg-blue-700"
          >
            Explore properties
          </Link>
        </div>
      </div>
      <Image
        src="/Images/projects-building.png"
        alt="Astro Logo"
        width={700}
        height={700}
        className="ml-60"
      />
    </div>
  </section>
);
