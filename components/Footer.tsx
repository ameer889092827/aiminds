import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-bold text-dark mb-4">AI <span className="text-primary">Minds</span></h3>
            <p className="text-gray-600 max-w-sm">{t('footer.desc')}</p>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">{t('footer.contacts')}</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_LINK} className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                <span>📱</span> +7 {WHATSAPP_NUMBER.slice(1,4)} {WHATSAPP_NUMBER.slice(4,7)} {WHATSAPP_NUMBER.slice(7)}
              </a>
              <a href={WHATSAPP_LINK} className="flex items-center gap-3 text-gray-600 hover:text-green-500 transition-colors">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">{t('footer.socials')}</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/aiminds.kz/#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-primary transition-all text-sm font-medium">
                Instagram
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};