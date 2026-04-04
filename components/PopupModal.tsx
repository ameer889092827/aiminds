import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2, Check } from 'lucide-react';
import { GOOGLE_SCRIPT_URL } from '../constants';
import { useTranslation } from 'react-i18next';

export const PopupModal: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          age: formData.age,
          timestamp: new Date().toISOString(),
          source: 'popup'
        }),
      });

      setStatus('success');
      setFormData({ name: '', phone: '', age: '' });
      
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#1A202C] mb-2 leading-tight">
                  {t('popup.title')}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t('popup.desc')}
                </p>
              </div>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('lead.name')} 
                    className="w-full px-5 py-3.5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-colors text-[#1A202C] placeholder:text-gray-400"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <span className="text-gray-500 font-medium">+7</span>
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('lead.phone')} 
                    className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-colors text-[#1A202C] placeholder:text-gray-400"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <input 
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder={t('lead.age')}
                    className="w-full px-5 py-3.5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-colors text-[#1A202C] placeholder:text-gray-400"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'success' && (
                  <div className="text-green-600 text-sm font-medium text-center bg-green-50 p-3 rounded-lg">
                    {t('popup.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="text-red-600 text-sm font-medium text-center bg-red-50 p-3 rounded-lg">
                    {t('popup.error')}
                  </div>
                )}

                <div className="mt-2">
                  <motion.button 
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                    className={`w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2
                      ${status === 'loading' || status === 'success' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-500/20'}`}
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> {t('lead.sending')}</>
                    ) : status === 'success' ? (
                      <><Check className="w-5 h-5" /> {t('lead.sent')}</>
                    ) : (
                      t('lead.btn')
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
