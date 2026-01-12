import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Научим твоего ребенка создавать AI за месяц";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/20 blur-[60px] md:blur-[100px] rounded-full animate-pulse-slow delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-bold tracking-wider uppercase animate-fade-in mb-2 md:mb-4">
            🚀 Старт потока: 17 Января
          </div>
          
          <div className="min-h-[120px] md:min-h-[auto]">
            <h1 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary break-words">
               {text}<span className="animate-pulse text-primary">|</span>
            </h1>
          </div>
          
          <p className="font-sans text-base md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Онлайн-курс по искусственному интеллекту для детей 10-16 лет. 
            От основ до собственного проекта всего за <span className="text-white font-bold">20,000₸</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href={`${WHATSAPP_LINK}?text=Хочу записаться на поток 17 января!`} className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-cta font-bold text-white shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(176,38,255,0.6)] transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10">Записаться на Январь →</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            
            <a href="#program" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md font-bold text-white hover:bg-white/10 transition-all duration-300">
              Узнать программу
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Осталось <span className="text-white font-bold">5 мест</span> в этой группе</span>
          </div>
        </div>

        {/* 3D Visual */}
        <div className="hidden lg:block relative perspective-1000 group">
          <div className="relative w-full aspect-square transform-style-3d transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-12">
            <div className="absolute inset-0 bg-gradient-card rounded-3xl border border-primary/20 backdrop-blur-xl flex items-center justify-center shadow-2xl animate-float">
                {/* Simulated AI Brain Visual */}
                <div className="relative w-64 h-64">
                   <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-4 border-4 border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">🧠</span>
                   </div>
                   {/* Floating code snippets */}
                   <div className="absolute -top-10 -right-10 bg-dark/80 backdrop-blur border border-primary/40 p-3 rounded-lg text-xs font-mono text-primary shadow-lg animate-bounce">
                      import torch
                   </div>
                   <div className="absolute -bottom-5 -left-10 bg-dark/80 backdrop-blur border border-secondary/40 p-3 rounded-lg text-xs font-mono text-secondary shadow-lg animate-bounce delay-700">
                      model.train()
                   </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};