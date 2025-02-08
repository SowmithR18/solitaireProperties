export const NavBar = () => (
  <nav className="bg-white px-48 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Solitaire Property Management</h1>
    <ul className="flex gap-5">
      <li>
        <a href="/" className="text-black text-lg">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="text-black text-lg">
          About
        </a>
      </li>
      <li>
        <a href="/services" className="text-black text-lg">
          Services
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="bg-blue-500 text-lg text-white py-2 px-6 rounded-full hover:bg-blue-700"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </nav>
);
