import Image from "next/image";

export const Details = ({ imagesrc }: { imagesrc: string }) => (
  <section className="m-2 md:m-10 px-4 md:px-64 grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#F8DED5] rounded-xl p-4 col-span-2 row-span-2 gap-7">
      <Image
        src={`/Images/${imagesrc}`}
        alt="Building"
        width={200}
        height={200}
        className="rounded-lg w-72 object-cover aspect-[1]"
      />
      <div>
        <div className="div text-2xl font-bold mb-8">
          Find your property at best price
        </div>
        <span className="text-lg">
          Find your ideal property at the best price available. Explore
          unbeatable deals on homes that match your budget and preferences.
        </span>
        <br />
        <button className="border font-semibold border-black bg-transparent text-black py-2 px-6 rounded-full mt-4">
          Switch
        </button>
      </div>
    </div>
    <div className="flex justify-center items-start flex-col text-left bg-[#F8DED5] rounded-xl p-4 px-16">
      <div className="div text-2xl font-bold mb-6">100k+</div>
      <span className="text-lg"> Projects completed </span>
    </div>
    <div className="flex justify-center items-start flex-col text-left bg-[#F8DED5] rounded-xl p-4 px-16">
      <div className="div text-2xl font-bold mb-6">100+</div>
      <span className="text-lg">Award winnings</span>
    </div>
    <div className="flex justify-center items-start flex-col text-left bg-[#F8DED5] rounded-xl p-4 px-16">
      <div className="div text-2xl font-bold mb-6">50k+</div>
      <span className="text-lg"> Satisfied customers </span>
    </div>
    <div className="flex justify-center items-start flex-col text-left bg-[#F8DED5] rounded-xl p-4 px-16">
      <div className="div text-2xl font-bold mb-6">12+</div>
      <span className="text-lg"> Years of experience </span>
    </div>
  </section>
);
