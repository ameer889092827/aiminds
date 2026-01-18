import React from 'react';
import { CURRICULUM_MODULES } from '../constants';

export const Curriculum: React.FC = () => {
  return (
    <section id="program" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Что освоит ваш ребенок
          </h2>
          <p className="text-gray-400 text-lg">8 практических занятий по выходным</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CURRICULUM_MODULES.map((module) => (
            <div key={module.id} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 border border-primary/20">
                  {module.weeks}
                </div>
                <h3 className="text-2xl font-bold font-display mb-3 text-white group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};