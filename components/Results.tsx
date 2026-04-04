import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const Results: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      student: t('results.proj1_student'),
      title: t('results.proj1_title'),
      desc: t('results.proj1_desc'),
      image: 'https://image2url.com/r2/default/images/1775300033726-917fa8eb-c5fd-4ce1-8f72-b70da0852980.png'
    },
    {
      id: 2,
      student: t('results.proj2_student'),
      title: t('results.proj2_title'),
      desc: t('results.proj2_desc'),
      image: 'https://image2url.com/r2/default/images/1775300199890-abfbe531-c435-4617-b406-7e321f18253b.png'
    }
  ];

  return (
    <section className="py-24 px-6 bg-light" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            {t('results.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('results.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ y: -8 }}
              className="group rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-soft hover:shadow-hover transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">{item.student}</span>
                </div>
                <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
