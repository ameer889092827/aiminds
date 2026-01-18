import React from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background Spinners */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-slow -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Тарифы обучения</h2>
           <p className="text-gray-400">Выберите формат, который подходит вашему ребенку</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Online Basic */}
          <div className="relative group">
             <div className="absolute -inset-[2px] rounded-[42px] bg-gradient-to-r from-primary/30 to-blue-600/30 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative bg-[#0A0E27]/90 backdrop-blur-xl rounded-[40px] p-8 md:p-12 overflow-hidden h-full border border-white/5 flex flex-col">
                 <div className="mb-6">
                   <h3 className="text-2xl font-display font-bold text-white mb-2">AI Minds Online</h3>
                   <p className="text-gray-400 text-sm">Базовый формат обучения</p>
                 </div>

                 <div className="mb-8">
                   <div className="flex items-baseline gap-2 text-white">
                     <span className="text-5xl font-black font-display tracking-tight">20 000₸</span>
                     <span className="text-gray-500 text-sm uppercase tracking-widest">/ курс</span>
                   </div>
                 </div>

                 <div className="space-y-4 mb-10 flex-grow">
                   {[
                     "8 онлайн-уроков (Zoom)",
                     "2 занятия в неделю (Сб, Вс)",
                     "Практика в ChatGPT и Midjourney",
                     "Создание своего AI-бота",
                     "Сертификат по окончанию",
                     "Общий чат учеников"
                   ].map((feature, i) => (
                     <div key={i} className="flex items-start gap-3 text-gray-200">
                       <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs mt-0.5">✓</div>
                       <span className="text-base leading-tight">{feature}</span>
                     </div>
                   ))}
                 </div>

                 <div className="mt-auto">
                    <div className="text-center mb-4 p-2 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-400">
                      Старт 21 Февраля
                    </div>
                    <a href={`${WHATSAPP_LINK}?text=Здравствуйте, хочу записать ребенка на тариф Online (20 000тг)`} className="block w-full py-4 rounded-xl border border-primary text-primary font-bold text-center uppercase tracking-wide hover:bg-primary hover:text-darker transition-all">
                       Записаться Online
                    </a>
                 </div>
             </div>
          </div>

          {/* Card 2: Offline Mentorship (Premium) */}
          <div className="relative group transform lg:-translate-y-4">
             {/* Animated Gradient Border */}
             <div className="absolute -inset-[2px] rounded-[42px] bg-gradient-to-r from-secondary via-pink-500 to-secondary opacity-100 blur-md animate-spin-slow"></div>
             
             <div className="relative bg-[#0A0E27] rounded-[40px] p-8 md:p-12 overflow-hidden h-full flex flex-col">
                 
                 <div className="absolute top-0 right-0 bg-gradient-to-bl from-secondary to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                    Рекомендуем
                 </div>

                 <div className="mb-6">
                   <h3 className="text-2xl font-display font-bold text-white mb-2">Mentorship Offline</h3>
                   <p className="text-secondary text-sm font-bold">Полное погружение в офисе</p>
                 </div>

                 <div className="mb-8">
                   <div className="flex items-baseline gap-2 text-white">
                     <span className="text-5xl font-black font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">50 000₸</span>
                     <span className="text-gray-500 text-sm uppercase tracking-widest">/ курс</span>
                   </div>
                 </div>

                 <div className="space-y-4 mb-10 flex-grow">
                   {[
                     "Все преимущества Online тарифа",
                     "Живые встречи в офисе (Алматы)",
                     "Индивидуальное менторство",
                     "Создание стартапа с нуля",
                     "Подготовка презентации (Pitch Deck)",
                     "Участие в IT-конкурсах",
                     "Фирменный мерч AI Minds"
                   ].map((feature, i) => (
                     <div key={i} className="flex items-start gap-3 text-white">
                       <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-white font-bold text-xs mt-0.5">★</div>
                       <span className="text-base leading-tight font-medium">{feature}</span>
                     </div>
                   ))}
                 </div>

                 <div className="mt-auto">
                    <div className="text-center mb-4 p-2 rounded-lg bg-secondary/10 border border-secondary/20 text-sm text-secondary font-bold animate-pulse">
                      🔥 Осталось всего 3 места
                    </div>
                    <a href={`${WHATSAPP_LINK}?text=Здравствуйте, хочу записать ребенка на тариф Mentorship Offline (50 000тг)`} className="block w-full py-4 rounded-xl bg-gradient-to-r from-secondary to-pink-600 text-white font-bold text-center uppercase tracking-wide shadow-lg hover:shadow-secondary/50 hover:scale-[1.02] transition-all">
                       Записаться на Менторство
                    </a>
                 </div>
             </div>
          </div>

        </div>

        <p className="text-center text-gray-500 text-xs md:text-sm mt-12">
          🛡️ Гарантия возврата денег в первую неделю обучения
        </p>
      </div>
    </section>
  );
};