export const Footer = () => (
  <>
    <footer className="bg-background flex flex-row justify-around p-4 md:p-24">
      <ul className="text-white">
        <h3 className="font-semibold text-2xl mb-5 text-white">
          Real Estate Management
        </h3>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <ul className="text-white">
        <h3 className="font-semibold text-2xl mb-5 text-white">Office</h3>
        No.24, 2nd cross, 1st
        <br />
        main, HAL Road,
        <br />
        Domlur, Indiranagar,
        <br />
        Bengaluru - 560071
      </ul>
      <ul className="text-white">
        <h3 className="font-semibold text-2xl mb-5 text-white">Contact</h3>
        <li>Mob: +91 98765 43210</li>
        <li>Email: solitairepm@gmail.com</li>
      </ul>
    </footer>
    <div className="flex justify-center items-center text-white p-5 bg-accent">
      © Solitaire Property Management, 2025. All rights reserved.
    </div>
  </>
);
