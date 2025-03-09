import { Card } from "../@elements/Card";

export const Services = () => (
  <section className="bg-background py-20 px-4 md:px-64 flex flex-col items-center gap-4 mt-60">
    <h1 className="text-4xl font-bold text-white py-2 border-b-[5px] border-solid border-b-accent">
      Our Services
    </h1>
    <section className="m-10 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
      <Card
        src="/svgs/propertyManagement.svg"
        alt="Property Management"
        title="Property Management"
        description="We provides property management services for your Apartment/villa with or without rent management."
      />

      <Card
        src="/svgs/tenantManagement.svg"
        alt="Tenant Management"
        title="Tenant Management"
        description="We provides complete Tenant management services for your Apartment/Villa."
        height={100}
        width={100}
      />

      <Card
        src="/svgs/maintanence.svg"
        alt="Maintenance & Repairs"
        title="Maintenance & Repairs"
        description="We provides Maintenance & Repair works services for your Apartment/Villa."
        height={100}
        width={100}
      />

      <Card
        src="/svgs/documentation.svg"
        alt="Documentation"
        title="Documentation"
        description="We will do all types of paper works like Property registration, Khata extract, Agreement etc."
        height={100}
        width={100}
      />

      <Card
        src="/svgs/property.svg"
        alt="Property Listing"
        title="Property Listing"
        description="We will provide property listing and advertising services."
        height={100}
        width={100}
      />

      <Card
        src="/svgs/houseKeeping.svg"
        alt="House Keeping"
        title="House Keeping"
        description="We help you in investment on property with good returns."
        height={100}
        width={100}
      />
    </section>
  </section>
);
