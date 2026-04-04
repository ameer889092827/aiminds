import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Results } from './components/Results';
import { LeadMagnet } from './components/LeadMagnet';
import { Team } from './components/Team';
import { SocialProof } from './components/SocialProof';
import { Formats } from './components/Formats';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingElements';
import { PopupModal } from './components/PopupModal';
import { Analytics } from '@vercel/analytics/react';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section > div').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-dark bg-light min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Courses />
        <Results />
        <LeadMagnet />
        <Team />
        <SocialProof />
        <Formats />
        <FAQ />
        <LeadMagnet 
          title={<>{t('lead.title2')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{t('lead.title2_highlight')}</span>{t('lead.title2_end')}</>}
          formTitle={t('lead.form_title2')}
          buttonText={t('lead.btn2')}
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <PopupModal />
      <Analytics />
    </div>
  );
};

export default App;