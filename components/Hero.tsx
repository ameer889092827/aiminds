import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'motion/react';
import { Gift } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#F8F9FA]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl flex flex-col items-center">
        
        {/* Content */}
        <div className="space-y-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1A202C]"
          >
            {t('hero.title1')}<span className="text-primary">{t('hero.title2')}</span>{t('hero.title3')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#4A5568] max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-4 items-center"
          >
            <a href={`${WHATSAPP_LINK}?text=Хочу записать ребенка на пробный урок!`} className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold hover:from-orange-500 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/30 text-center whitespace-nowrap">
              {t('hero.cta')}
            </a>
            
            <div className="flex items-center gap-4 max-w-xs text-left">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-[#4A5568] leading-tight">
                <span className="font-bold text-[#1A202C]">{t('hero.gift_title')}</span> {t('hero.gift_desc')}
              </p>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto"
          >
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <div className="text-3xl font-extrabold text-primary mb-1">{t('hero.stat1_val')}</div>
              <div className="text-xs text-[#4A5568] leading-tight">{t('hero.stat1_desc')}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <div className="text-3xl font-extrabold text-primary mb-1">{t('hero.stat2_val')}</div>
              <div className="text-xs text-[#4A5568] leading-tight">{t('hero.stat2_desc')}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <div className="text-3xl font-extrabold text-primary mb-1">{t('hero.stat3_val')}</div>
              <div className="text-xs text-[#4A5568] leading-tight">{t('hero.stat3_desc')}</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};