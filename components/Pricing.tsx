import React from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background Spinners */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-slow -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto relative group">
          
          {/* Animated Border Gradient */}
          <div className="absolute -inset-[2px] rounded-[42px] bg-gradient-to-r from-primary via-secondary to-primary opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
          
          <div className="relative bg-[#0A0E27]/90 backdrop-blur-xl rounded-[40px] p-6 md:p-12 overflow-hidden">
             
             {/* Badge */}
             <div className="flex justify-center mb-6 md:mb-8">
               <span className="px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold uppercase tracking-wider text-xs md:text-sm shadow-[0_4px_20px_rgba(255,100,100,0.4)] animate-pulse text-center">
                 🔥 Старт 17 Января
               </span>
             </div>

             <div className="text-center mb-6 md:mb-8">
               <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">AI Minds Базовый</h3>
               <p className="text-gray-400 text-sm md:text-base">Полное погружение в мир AI</p>
             </div>

             <div className="text-center mb-8 md:mb-10">
               <div className="flex flex-col md:flex-row items-center justify-center gap-1 text-white">
                 <span className="text-6xl md:text-8xl font-black font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">20</span>
                 <div className="flex flex-row md:flex-col items-baseline md:items-start gap-2 md:gap-0 md:mt-4">
                    <span className="text-3xl md:text-4xl font-bold text-primary">000₸</span>
                    <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">за курс</span>
                 </div>
               </div>
             </div>

             <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
               {[
                 "8 онлайн-уроков",
                 "2 занятия в неделю (Сб, Вс)",
                 "Практика в ChatGPT и Midjourney",
                 "Создание своего AI-проекта",
                 "Сертификат по окончанию",
                 "Поддержка в чате 24/7"
               ].map((feature, i) => (
                 <div key={i} className="flex items-start gap-4 text-gray-200 border-b border-white/5 pb-3 last:border-0">
                   <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 text-white font-bold text-xs md:text-sm mt-0.5">✓</div>
                   <span className="text-base md:text-lg leading-tight">{feature}</span>
                 </div>
               ))}
             </div>

             <div className="text-center mb-6 md:mb-8 p-3 md:p-4 bg-primary/10 rounded-xl border border-primary/20">
               <p className="text-primary font-bold animate-pulse text-sm md:text-base">⚡ Осталось только 5 мест</p>
             </div>

             <a href={`${WHATSAPP_LINK}?text=Хочу записать ребенка на поток 17 января!`} className="block w-full py-4 md:py-5 rounded-2xl bg-gradient-cta text-white font-black text-lg md:text-xl text-center uppercase tracking-wide hover:shadow-[0_10px_50px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-1 relative overflow-hidden group/btn">
               <span className="relative z-10">Записаться в WhatsApp →</span>
               <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-[-120%] group-hover/btn:translate-x-[120%] transition-transform duration-700 ease-in-out"></div>
             </a>

             <p className="text-center text-gray-500 text-xs md:text-sm mt-6">
               🛡️ Гарантия возврата денег в первую неделю
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};