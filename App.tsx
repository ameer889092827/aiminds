import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Curriculum } from './components/Curriculum';
import { Team } from './components/Team';
import { Results } from './components/Results';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CursorTrail, ParticleBackground, FloatingWhatsApp } from './components/FloatingElements';
import { WHATSAPP_LINK } from './constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto rounded-[3rem] bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden relative border border-white/20 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Готов к будущему?
          </h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
             Пока другие дети играют в игры, твой ребенок будет создавать AI. 
             Январский поток стартует 17-го числа!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-12">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl p-4 min-w-[120px]">
              <span className="text-4xl font-bold text-primary">5</span>
              <span className="text-xs uppercase tracking-widest text-white">мест осталось</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl p-4 min-w-[120px]">
              <span className="text-4xl font-bold text-secondary">17</span>
              <span className="text-xs uppercase tracking-widest text-white">января старт</span>
            </div>
          </div>

          <a href={`${WHATSAPP_LINK}?text=Записываюсь на курс 17 января!`} className="inline-block px-12 py-6 rounded-full bg-white text-indigo-900 font-black text-xl hover:scale-105 transition-transform shadow-xl">
            Записаться Сейчас 🚀
          </a>
        </div>
      </div>
    </section>
  )
}

const App: React.FC = () => {
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
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-white bg-darker min-h-screen selection:bg-primary selection:text-darker">
      <ParticleBackground />
      <CursorTrail />
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <Curriculum />
        <Team />
        <Results />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;