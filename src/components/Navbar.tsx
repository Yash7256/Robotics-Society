import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/students', label: 'Students' },
    { path: '/resources', label: 'Resources' },
    { path: '/gallery', label: 'Gallery' },
  ];

  const externalLink = 'https://neruo-bot.vercel.app';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 backdrop-blur-sm ${
        scrolled ? 'bg-black text-white shadow-lg' : 'bg-white text-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="floating"
            >
              <Cpu className="w-8 h-8" />
            </motion.div>
            <motion.span 
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Dept Of AI & ROBOTICS
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 transition-all duration-400 group smooth-hover ${
                  location.pathname === item.path
                    ? scrolled ? 'text-white' : 'text-black'
                    : scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    scrolled ? 'bg-white' : 'bg-black'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                />
              </Link>
            ))}
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative px-3 py-2 transition-all duration-400 group smooth-hover ${
                scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              Club
              <motion.div
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  scrolled ? 'bg-white' : 'bg-black'
                }`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${scrolled ? 'bg-black' : 'bg-white'} border-t ${
          scrolled ? 'border-gray-700' : 'border-gray-200'
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >
        <div className="px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 transition-all duration-400 smooth-hover ${
                location.pathname === item.path
                  ? scrolled ? 'text-white' : 'text-black'
                  : scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`block px-3 py-2 transition-all duration-400 smooth-hover ${
              scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Club
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;