import Image from "next/image";

export const PropertyManagement = () => (
  <section className="m-10 px-4 md:px-64 flex flex-col items-center my-20 mb-44 relative">
    <h1 className="text-4xl font-bold py-2 border-b-[5px] border-solid border-b-background">
      Complete Property Management
    </h1>
    <section className="flex flex-col md:flex-row mt-8">
      <div className="flex flex-col items-center w-96 rounded-xl bg-accent-light mt-6 md:mt-0 md:mr-6">
        <img src="/Images/documentation.jpg" alt="" className="rounded-t-xl" />
        <span className="p-3 font-semibold text-lg">Documentation</span>
      </div>
      <div className="flex flex-col items-center w-96 rounded-xl bg-accent-light mt-6 md:mt-0 md:mr-6">
        <img src="/Images/construction.jpg" alt="" className="rounded-t-xl" />
        <span className="p-3 font-semibold text-lg">
          Repairs and renovation
        </span>
      </div>
      <div className="flex flex-col items-center w-96 rounded-xl bg-accent-light mt-6 md:mt-0 md:mr-6">
        <img src="/Images/handover.jpg" alt="" className="rounded-t-xl" />
        <span className="p-3 font-semibold text-lg">Lorem ipsum</span>
      </div>
    </section>
    <Image
      src="/Logo/diamonds.png"
      alt="logo"
      fill
      quality={100}
      className="mt-48 pt-60"
    />
  </section>
);
