import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex justify-center w-full">
      <div className="fixed top-5 w-3/4 rounded-3xl bg-gradient-to-r from-gray-300 to-sky-200 z-20 px-20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-gray-500 text-xl font-bold">Ronald.rnd</div>
          <div className="hidden md:flex space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-xl"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-500 hover:text-gray-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
