import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-darker pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">AI Minds</h3>
            <p className="text-gray-500">Онлайн-школа будущего. Готовим новое поколение создателей, а не потребителей.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_LINK} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <span>📱</span> +7 {WHATSAPP_NUMBER.slice(1,4)} {WHATSAPP_NUMBER.slice(4,7)} {WHATSAPP_NUMBER.slice(7)}
              </a>
              <a href={WHATSAPP_LINK} className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/aiminds.kz/#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all text-sm">
                Instagram
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2026 AI Minds. Все права защищены.</p>
          <p>Алматы, Казахстан</p>
        </div>
      </div>
    </footer>
  );
};