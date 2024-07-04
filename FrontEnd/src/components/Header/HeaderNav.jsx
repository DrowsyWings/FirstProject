import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoIcon from '../../assets/CompanyLogo.svg'

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full py-3 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <div className='flex items-center'>
                  <img src={logoIcon}  alt="Free Water Icon"/>
                </div>
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-20">
              <NavLink to="/advertise" className=" text-white hover:text-blue-500 px-5 py-2 rounded-md">Advertise</NavLink>
              <NavLink to="/distribute" className=" text-white hover:text-blue-500 px-5 py-2 rounded-md">Distribute</NavLink>
              <NavLink to="/faq" className=" text-white hover:text-blue-500 px-5 py-2 rounded-md">FAQs</NavLink>
            </div>
            <div className="hidden lg:flex items-center">
                <Link to="/contact-us">
                    <button className="inline-flex items-center bg-transparent text-white border-2 border-white py-2  px-5 focus:outline-none hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0">
                    Contact Us
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                </Link>
            </div>
            <div className="lg:hidden">
              <button onClick={handleClick}>
                <svg className="h-8 w-8 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out bg-blue-900 bg-opacity-50 backdrop-blur-lg z-30 lg:hidden`}>
        <div className="p-6">
          <button onClick={handleClick} className="text-white">
            <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mt-10">
            <ul className="space-y-4 text-white">
              <li>
                <NavLink to="/" className="text-2xl" onClick={handleClick}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-2xl" onClick={handleClick}>About me</NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-2xl" onClick={handleClick}>Experience</NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-2xl" onClick={handleClick}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-2xl" onClick={handleClick}>Hire Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content - Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={handleClick}></div>
      )}
    </>
  );
}

export default HeaderNav;
