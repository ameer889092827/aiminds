import React from 'react';
import { RESULTS_DATA } from '../constants';

export const Results: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Проекты учеников
          </h2>
          <p className="text-gray-400 text-lg">Реальные результаты после 1 месяца обучения</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESULTS_DATA.map((item) => (
            <div key={item.id} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,229,255,0.2)]">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4">
                  <span className="bg-black/80 backdrop-blur border border-primary text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold font-display mb-1 text-white">{item.title}</h4>
                <p className="text-sm text-primary mb-3">{item.student}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
