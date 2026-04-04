import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const Formats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">{t('formats.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('formats.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Format 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-light rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-hover transition-all"
          >
            <h3 className="text-2xl font-bold text-dark mb-2">{t('formats.f1_title')}</h3>
            <p className="text-gray-600 mb-6">{t('formats.f1_desc')}</p>
            
            <ul className="space-y-4 mb-8">
              {[t('formats.f1_i1'), t('formats.f1_i2'), t('formats.f1_i3'), t('formats.f1_i4'), t('formats.f1_i5')].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-white border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
              {t('formats.btn')}
            </button>
          </motion.div>

          {/* Format 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border-2 border-primary shadow-hover relative"
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
              {t('formats.f2_badge')}
            </div>
            <h3 className="text-2xl font-bold text-dark mb-2">{t('formats.f2_title')}</h3>
            <p className="text-gray-600 mb-6">{t('formats.f2_desc')}</p>
            
            <ul className="space-y-4 mb-8">
              {[t('formats.f2_i1'), t('formats.f2_i2'), t('formats.f2_i3'), t('formats.f2_i4'), t('formats.f2_i5')].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primaryHover transition-colors shadow-lg shadow-primary/30">
              {t('formats.btn')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
