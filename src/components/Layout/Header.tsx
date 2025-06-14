import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navigationItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Actividades', href: '#actividades' },
    { name: 'Contacto', href: '#contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <svg 
            className="h-8 w-8 text-primary-600" 
            viewBox="0 0 100 100" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 0C47.8 11.2 41.2 21.6 30.6 26.6C21.6 21.6 11.2 11.2 8.4 0H0C11.2 8.4 21.6 21.6 26.6 30.6C21.6 41.2 11.2 47.8 0 50C11.2 52.2 21.6 58.8 26.6 69.4C21.6 78.4 11.2 88.8 0 91.6V100C8.4 88.8 21.6 78.4 30.6 73.4C41.2 78.4 47.8 88.8 50 100C52.2 88.8 58.8 78.4 69.4 73.4C78.4 78.4 88.8 88.8 100 91.6V100C88.8 91.6 78.4 78.4 73.4 69.4C78.4 58.8 88.8 52.2 100 50C88.8 47.8 78.4 41.2 73.4 30.6C78.4 21.6 88.8 11.2 100 0H91.6C88.8 11.2 78.4 21.6 69.4 26.6C58.8 21.6 52.2 11.2 50 0zM50 37.5C56.9 37.5 62.5 43.1 62.5 50C62.5 56.9 56.9 62.5 50 62.5C43.1 62.5 37.5 56.9 37.5 50C37.5 43.1 43.1 37.5 50 37.5z"/>
          </svg>
          <span className="text-xl font-bold text-slate-800">GECEM</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link font-medium transition-colors duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'text-primary-600 active'
                  : 'text-slate-600 hover:text-primary-600'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-slate-800 hover:text-primary-600 focus:outline-none transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="block py-2 px-4 text-sm font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;