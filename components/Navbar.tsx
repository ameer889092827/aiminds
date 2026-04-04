import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Left: Logo & Descriptor */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-dark tracking-tight leading-none">
            AI <span className="text-primary">Minds</span>
          </div>
          <div className="hidden lg:block border-l border-gray-300 pl-4 text-xs text-gray-500 max-w-[150px] leading-tight">
            {i18n.language === 'ru' ? 'Онлайн-школа ИИ для детей 10-16 лет' : 'Online AI school for kids 10-16 years'}
          </div>
        </div>
        
        {/* Center: Menu */}
        <div className="hidden xl:flex gap-6 text-sm font-medium text-dark">
          <a href="#programs" className="hover:text-primary transition-colors">{t('nav.programs')}</a>
          <a href="#results" className="hover:text-primary transition-colors">{t('nav.results')}</a>
          <a href="#faq" className="hover:text-primary transition-colors">{t('nav.faq')}</a>
        </div>

        {/* Right: Lang, Phone, CTA */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400">
            <span 
              onClick={() => changeLanguage('ru')}
              className={`cursor-pointer transition-colors ${i18n.language === 'ru' ? 'text-dark' : 'hover:text-dark'}`}
            >
              RU
            </span>
            <span>/</span>
            <span 
              onClick={() => changeLanguage('en')}
              className={`cursor-pointer transition-colors ${i18n.language === 'en' ? 'text-dark' : 'hover:text-dark'}`}
            >
              EN
            </span>
          </div>
          
          <div className="hidden md:block text-sm font-bold text-dark">
            +7 {WHATSAPP_NUMBER.slice(1,4)} {WHATSAPP_NUMBER.slice(4,7)} {WHATSAPP_NUMBER.slice(7)}
          </div>

          <a href={WHATSAPP_LINK} className="flex items-center gap-2 px-5 py-2 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-colors text-sm">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{t('nav.contact')}</span>
          </a>
        </div>

      </div>
    </nav>
  );
};
