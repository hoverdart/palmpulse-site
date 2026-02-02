
import React, { useState } from 'react';
import palmPulseTrans from '../assets/palmPulseTrans.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Vision', path: '/' },
    { label: 'Technology', path: '/technology' },
    { label: 'Impact', path: '/impact' },
    { label: 'Privacy', path: '/privacy' },
    { label: 'Credits', path: '/credits' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E9]/80 backdrop-blur-md border-b border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-300">
              <img 
                src={palmPulseTrans} 
                alt="PalmPulse Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#2D2424] group-hover:text-palm-green transition-colors">PalmPulse</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-black tracking-widest transition-colors hover:text-palm-green uppercase ${
                  isActive(item.path) ? 'text-palm-green' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-palm-brown"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path) ? 'bg-[#F5F1E9] text-palm-green' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
