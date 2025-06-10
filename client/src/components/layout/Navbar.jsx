import { useState, useEffect } from 'react';
import { FaBalanceScale, FaCalendarCheck, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 py-4 px-6 lg:px-12 bg-white/90 backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
          <FaBalanceScale className="text-3xl text-amber-500 mr-2" />
          <span className="text-2xl font-bold text-indigo-900">Wakili</span>
          <span className="text-2xl font-bold text-amber-500">Advocates</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {['home', 'about-us', 'practice-areas', 'our-lawyers', 'testimonials', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-gray-700 font-medium hover:text-amber-500 transition cursor-pointer"
            >
              {item === 'home' ? 'Home' : item.split('-').join(' ')}
            </button>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="flex items-center bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition cursor-pointer">
            <FaCalendarCheck className="inline mr-1" />
            Book Appointment
          </button>
        </div>
            
        {/* Mobile menu toggle and book appointment buttons */}
        <div className='flex items-center lg:hidden space-x-4'>
          <button className="hidden sm:flex items-center bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-500 transition cursor-pointer">
            <FaCalendarCheck className="inline mr-1" />
            Book Appointment
          </button>

          {/* Mobile menu toggle button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-amber-500 focus:outline-none"
          >
            {!mobileMenuOpen ? <FaBars className="h-6 w-6" /> : <FaTimes className="h-6 w-6" />}
          </button>
          
        </div>
      </div>
            
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6 absolute left-0 right-0 mt-4 shadow-lg rounded-b-lg">
          <div className="flex flex-col space-y-4">
            {['home', 'about-us', 'practice-areas', 'our-lawyers', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-gray-700 font-medium hover:text-amber-500 transition text-left"
              >
                {item === 'home' ? 'Home' : item.split('-').join(' ')}
              </button>
            ))}
          </div>
          <button className="w-full sm:hidden flex items-center justify-center bg-amber-500 mt-4 text-white px-4 py-2 rounded-md hover:bg-amber-500 transition cursor-pointer">
            <FaCalendarCheck className="inline mr-1" />
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;