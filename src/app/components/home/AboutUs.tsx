import Image from "next/image";

export const AboutUs = () => (
  <section className="m-2 md:m-10 md:mt-44 px-4 md:px-64 flex flex-col items-center gap-4 mt-28 relative">
    <Image
      src="/Logo/logo.png"
      alt="logo"
      fill
      quality={100}
      className="absolute -z-10 opacity-30 px-4 md:px-64 object-contain m-auto scale-150"
    />
    <h1 className="text-4xl font-bold py-2 border-b-[5px] border-solid border-b-background">
      About Us
    </h1>
    <span className="text-4xl font-thin text-[#575757] mt-9 text-center">
      Solitaire Property Management Pvt. Ltd extends their services towards
      commercial buildings and residential apartments. The logo of Solitaire
      Property Management Pvt. Ltd. symbolizes both commercial and residential
      services, with upward arrows representing commercial buildings and dots
      with a curve symbolizing residential apartments. The gray and black
      merging lines resemble a handshake, highlighting the company's
      client-focused approach. The central diamond reflects the brand's name,
      emphasizing exceptional quality and transparency. Overall, the logo's
      design embodies growth, client satisfaction, and the high-quality services
      the company offers.
    </span>
    <Image
      src="/Logo/diamonds.png"
      alt="logo"
      fill
      quality={100}
      className="mt-72 pt-60"
    />
  </section>
);
