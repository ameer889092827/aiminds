import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-white tracking-wider">
          AI <span className="text-primary">Minds</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-primary transition-colors">Главная</a>
          <a href="#program" className="hover:text-primary transition-colors">Программа</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Проекты</a>
        </div>

        <a href={WHATSAPP_LINK} className="hidden md:block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-darker font-bold transition-all text-sm">
          Связаться
        </a>
      </div>
    </nav>
  );
};
