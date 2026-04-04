import React from 'react';
import { motion } from 'motion/react';
import { WHATSAPP_LINK } from '../constants';
import { useTranslation } from 'react-i18next';

export const SocialProof: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 bg-light" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('reviews.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Text Reviews (WhatsApp style) */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-3xl rounded-tl-none shadow-soft border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">М</div>
              <div>
                <div className="font-bold text-dark">{t('reviews.r1_name')}</div>
                <div className="text-xs text-gray-500">{t('reviews.r1_time')}</div>
              </div>
            </div>
            <p className="text-gray-700">
              {t('reviews.r1_text')}
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-3xl rounded-tl-none shadow-soft border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">П</div>
              <div>
                <div className="font-bold text-dark">{t('reviews.r2_name')}</div>
                <div className="text-xs text-gray-500">{t('reviews.r2_time')}</div>
              </div>
            </div>
            <p className="text-gray-700">
              {t('reviews.r2_text')}
            </p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-3xl rounded-tl-none shadow-soft border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">А</div>
              <div>
                <div className="font-bold text-dark">{t('reviews.r3_name')}</div>
                <div className="text-xs text-gray-500">{t('reviews.r3_time')}</div>
              </div>
            </div>
            <p className="text-gray-700">
              {t('reviews.r3_text')}
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <a href={`${WHATSAPP_LINK}?text=Хочу записать ребенка!`} className="inline-block px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primaryHover transition-colors shadow-lg shadow-primary/30">
            {t('reviews.btn')}
          </a>
        </div>
      </div>
    </section>
  );
};
