import Image from "next/image";

export const NavBar = () => (
  <nav className="bg-background px-4 md:px-48 py-4 h-24 flex justify-between items-center">
    <div className="flex flex-row items-center gap-1">
      <Image src="/Logo/logo.png" alt="logo" width={100} height={100} />
      <div className="flex flex-col">
        <h1 className="text-4xl text-white font-bold">SOLITAIRE</h1>
        <h2 className="text-sm text-white font-thin">
          Property Management Pvt. Ltd.
        </h2>
      </div>
    </div>
    <ul className="flex gap-5">
      <li>
        <a href="/" className="text-white font-thin text-lg">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="text-white font-thin text-lg">
          About
        </a>
      </li>
      <li>
        <a href="/services" className="text-white font-thin text-lg">
          Services
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="bg-accent text-lg text-white py-2 px-6 rounded-2xl hover:bg-orange-600"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </nav>
);
