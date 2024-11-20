import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {

    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <div className="flex flex-col ">
      <header className="bg-white shadow-sm ticky top-0 z-50 ">
        <div className="container mx-auto px-16 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="./logo.png" className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" alt="Laksana" />
            <span className="text-xl font-semibold">Laksana</span>
          </div>

          <nav className="hidden md:flex space-x-4">
            <a
              href="/"
              className={`${currentPage === "/" ? "text-cyan-400" : "text-black hover:text-cyan-200"
                }`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`${currentPage === "/about" ? "text-cyan-400" : "text-black hover:text-cyan-200"
                }`}
            >
              About
            </a>
            <a
              href="/services"
              className={`${currentPage === "/services" ? "text-cyan-400" : "text-black hover:text-cyan-200"
                }`}
            >
              Services
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <input type="text" placeholder="Search" className="border rounded-md pl-8 pr-2 py-1 text-sm" />
              <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="bg-cyan-300 text-black px-4 py-1 rounded-md text-sm">Cari</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="/"
                className={`${currentPage === "/" ? "text-cyan-400" : "text-black hover:text-cyan-200"
                  }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`${currentPage === "/about" ? "text-cyan-400" : "text-black hover:text-cyan-200"
                  }`}
              >
                About
              </a>
              <a
                href="/services"
                className={`${currentPage === "/services" ? "text-cyan-400" : "text-black hover:text-cyan-200"
                  }`}
              >
                Services
              </a>
            </nav>
            <div className="mt-2 flex items-center space-x-2">
              <div className="relative flex-grow">
                <input type="text" placeholder="Search" className="w-full border rounded-md pl-8 pr-2 py-1 text-sm" />
                <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="bg-cyan-400 text-black px-4 py-1 rounded-md text-sm">Cari</button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
};

export default Navbar