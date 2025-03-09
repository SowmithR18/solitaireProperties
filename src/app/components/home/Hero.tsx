import Link from "next/link";
import Background from "../@elements/BackgroundImage";

export const Hero = () => (
  <section className="">
    <Background src="/Images/HomeHero.png">
      <div className="flex flex-col justify-center items-end w-full h-svh hero-text p-4 md:p-0 text-white">
        <div className="text-left m-0 md:mr-20 md:mt-[-150px]">
          <h1 className="text-5xl font-bold mb-5 leading-normal">
            Expert Property Management
            <br />
            for Optimal Results
          </h1>
          <span className="text-lg text-left">
            Expertly managing your properties with efficiency, reliability, and
            unmatched care
          </span>
          <div className="flex gap-4 my-4">
            <Link
              href="/projects"
              className="bg-accent text-3xl font-bold text-white py-2 px-6 rounded-2xl hover:bg-orange-600"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </Background>
  </section>
);
