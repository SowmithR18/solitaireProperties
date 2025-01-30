import { Card } from "../@elements/Card";

export const Services = () => (
  <section className="py-20 px-64 flex flex-col items-center gap-4">
    <h1 className="text-4xl font-bold py-2 border-b-[5px] border-solid border-b-[#D2E2FF]">
      Our Services
    </h1>
    <section className="m-10 grid grid-cols-3 grid-rows-1 gap-4">
      <Card
        src="/propertyManagement.svg"
        alt="Property Management"
        title="Property Management"
        description="We provides property management services for your Apartment/villa with or without rent management."
      />

      <Card
        src="/tenantManagement.svg"
        alt="Tenant Management"
        title="Tenant Management"
        description="We provides complete Tenant management services for your Apartment/Villa."
        height={100}
        width={100}
      />

      <Card
        src="/maintanence.svg"
        alt="Maintenance & Repairs"
        title="Maintenance & Repairs"
        description="We provides Maintenance & Repair works services for your Apartment/Villa."
        height={100}
        width={100}
      />
    </section>
  </section>
);
