import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaQuran, FaHome, FaBook, FaInfoCircle, FaPhone, FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/', icon: <FaHome /> },
    { title: 'Courses', path: '/courses', icon: <FaGraduationCap /> },
    { title: 'About', path: '/about', icon: <FaInfoCircle /> },
    { title: 'Resources', path: '/resources', icon: <FaBook /> },
    { title: 'Contact', path: '/contact', icon: <FaPhone /> },
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaQuran className="text-green-600 text-3xl" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-800 group-hover:text-green-600 transition-colors">
                  Islamic Education
                </span>
                <span className="text-xs text-gray-500">Online Quran Academy</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-gray-600 hover:text-green-600 transition-colors font-medium group ${
                    location.pathname === link.path ? 'text-green-600' : ''
                  }`}
                >
                  {link.title}
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100 ${
                    location.pathname === link.path ? 'scale-x-100' : ''
                  }`} />
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Start Free Trial
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-600 hover:text-green-600 transition-colors p-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-white shadow-2xl z-50"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2">
                    <FaQuran className="text-green-600 text-2xl" />
                    <span className="font-bold text-xl text-gray-800">Menu</span>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 180 }}
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-gray-600 hover:text-green-600 transition-colors p-2"
                  >
                    <FaTimes className="h-6 w-6" />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.path}
                      whileHover={{ x: 10 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center space-x-4 text-gray-600 hover:text-green-600 transition-colors py-2 ${
                          location.pathname === link.path ? 'text-green-600' : ''
                        }`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="font-medium">{link.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium shadow-md hover:shadow-lg"
                    >
                      Start Free Trial
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 