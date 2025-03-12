import Image from "next/image";
import { Card } from "../@elements/Card";

export const Services = () => (
  <section className="m-2 md:m-10 px-4 md:px-64 flex flex-col items-center gap-4 py-20 mb-32 relative">
    {/* <section className="py-20 px-4 md:px-64 flex flex-col items-center gap-4 relative"> */}
    <h1 className="text-4xl font-bold py-2 border-b-[5px] border-solid border-b-background">
      Our Services
    </h1>
    <div className="m-10 grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4">
      <Card
        src="/svgs/propertyManagement.svg"
        alt="Property Management"
        title="Property Management"
        description="We provides property management services for your Apartment/villa with or without rent management."
        bgColor="bg-accent-light"
      />

      <Card
        src="/svgs/tenantManagement.svg"
        alt="Tenant Management"
        title="Tenant Management"
        description="We provides complete Tenant management services for your Apartment/Villa."
        height={100}
        width={100}
        bgColor="bg-accent-light"
      />

      <Card
        src="/svgs/maintanence.svg"
        alt="Maintenance & Repairs"
        title="Maintenance & Repairs"
        description="We provides Maintenance & Repair works services for your Apartment/Villa."
        height={100}
        width={100}
        bgColor="bg-accent-light"
      />
    </div>
    <Image
      src="/Logo/diamonds.png"
      alt="logo"
      fill
      quality={100}
      className="mt-36 pt-80"
    />
  </section>
);
