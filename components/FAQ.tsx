import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white/2">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          Часто задаваемые вопросы
        </h2>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-colors hover:border-primary/30">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl opacity-50">❓</span>
                  <span className="text-lg md:text-xl font-bold text-white">{item.question}</span>
                </div>
                <span className={`transform transition-transform duration-300 text-primary ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
