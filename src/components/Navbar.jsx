/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTechDropdown(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setTechDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Technologies', 
      path: '/Technologies',
    },
    { name: 'Feedback', path: '/feedback' },
  ];

  // Modified navbarVariants to remove the falling animation
  const navbarVariants = {
    hidden: { opacity: 0 }, // Removed y: -20
    visible: { opacity: 1 }  // Removed y: 0
  };
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: { 
        duration: 0.2,
        staggerChildren: 0.07,
        delayChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav 
      className={`w-full z-50 bg-gradient-to-r from-gray-900 to-indigo-900 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl' : 'bg-gray-900'
      }`}
      aria-label="Main navigation"
    >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="flex-shrink-0 flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
              aria-label="Home"
            >
              <motion.span 
                className="text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                TechRoad
              </motion.span>
            </NavLink>
            
            <div className="hidden md:block ml-10">
              <ul className="flex items-center space-x-4">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.dropdown ? (
                      <div 
                        className="relative"
                        ref={dropdownRef}
                      >
                        <button 
                          onClick={() => setTechDropdown(!techDropdown)}
                          className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          aria-expanded={techDropdown}
                          aria-haspopup="true"
                          aria-controls="tech-dropdown"
                        >
                          {link.name} 
                          {techDropdown ? (
                            <ChevronUp className="ml-1 h-4 w-4 transition-transform" aria-hidden="true" />
                          ) : (
                            <ChevronDown className="ml-1 h-4 w-4 transition-transform" aria-hidden="true" />
                          )}
                        </button>
                        <AnimatePresence>
                          {techDropdown && (
                            <motion.ul 
                              id="tech-dropdown"
                              className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              aria-label="Technologies submenu"
                            >
                              {link.items && link.items.map((item) => (
                                <motion.li key={item.name} variants={itemVariants}>
                                  <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `
                                      block px-4 py-2 text-sm font-medium
                                      ${isActive ? 'bg-gray-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-500'}
                                      transition-colors duration-150
                                    `}
                                    onClick={() => setTechDropdown(false)}
                                  >
                                    {item.name}
                                  </NavLink>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => `
                          px-3 py-2 rounded-md text-sm font-medium transition-all
                          ${isActive 
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30' 
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                          focus:outline-none focus:ring-2 focus:ring-indigo-500
                        `}
                        aria-current={({ isActive }) => isActive ? 'page' : undefined}
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex space-x-3">
              
              <a
                href="#login"
                className="px-4 py-1.5 text-sm font-medium text-white hover:text-indigo-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
              >
                Login
              </a>
              <a
                href="#signup"
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Sign Up
              </a>
            </div>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <div ref={mobileDropdownRef} className="space-y-1">
                      <button
                        onClick={() => setTechDropdown(!techDropdown)}
                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-expanded={techDropdown}
                        aria-controls="mobile-tech-dropdown"
                      >
                        {link.name}
                        {techDropdown ? (
                          <ChevronUp className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                      <AnimatePresence>
                        {techDropdown && (
                          <motion.ul
                            id="mobile-tech-dropdown"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {link.items && link.items.map((item) => (
                              <li key={item.name}>
                                <NavLink
                                  to={item.path}
                                  className={({ isActive }) => `
                                    block px-3 py-2 rounded-md text-base font-medium
                                    ${isActive 
                                      ? 'bg-gray-700 text-white' 
                                      : 'text-gray-400 hover:bg-gray-600 hover:text-white'}
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                                  `}
                                  onClick={() => setIsOpen(false)}
                                  aria-current={({ isActive }) => isActive ? 'page' : undefined}
                                >
                                  {item.name}
                                </NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        block px-3 py-2 rounded-md text-base font-medium
                        ${isActive 
                          ? 'bg-indigo-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                        focus:outline-none focus:ring-2 focus:ring-indigo-500
                      `}
                      onClick={() => setIsOpen(false)}
                      aria-current={({ isActive }) => isActive ? 'page' : undefined}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
              <li className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-3 space-x-3">
                  <a
                    href="#login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white w-full text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Login
                  </a>
                  <a
                    href="#signup"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 hover:bg-indigo-500 text-white w-full text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Sign Up
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;