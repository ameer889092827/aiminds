import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Check, Loader2 } from 'lucide-react';
import { GOOGLE_SCRIPT_URL } from '../constants';
import { useTranslation } from 'react-i18next';

interface LeadMagnetProps {
  title?: React.ReactNode;
  formTitle?: string;
  buttonText?: string;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ 
  title,
  formTitle,
  buttonText
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // We use no-cors because Google Scripts web apps often don't return proper CORS headers for POST requests
      // This means we won't get a readable response, but the request will be sent.
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          age: formData.age,
          timestamp: new Date().toISOString()
        }),
      });

      // Since mode is no-cors, response.ok is false, but we assume success if no error was thrown
      setStatus('success');
      setFormData({ name: '', phone: '', age: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto relative rounded-[2rem] overflow-hidden bg-[#F4F5F7] shadow-sm border border-gray-100 flex flex-col lg:flex-row">
        
        {/* Background Decor (Left) */}
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full overflow-hidden pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#000" />
                <path d="M2 2 L38 38 M38 2 L2 38" stroke="#000" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>

        {/* Left Side (Offer & Trust) */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A202C] leading-tight mb-12 uppercase">
            {title || (
              <>{t('lead.title')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{t('lead.title_highlight')}</span></>
            )}
          </h2>
        </div>

        {/* Right Side (Form - White Card) */}
        <div className="w-full lg:w-[450px] p-6 md:p-8 lg:p-12 relative z-10">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-50 h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#4A5568] mb-8 leading-snug">
              {formTitle || t('lead.form_title')}
            </h3>

            <form className="flex flex-col gap-5 flex-grow" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('lead.name')} 
                  className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-colors text-[#1A202C] placeholder:text-gray-400"
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
                  className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-colors text-[#1A202C] placeholder:text-gray-400"
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
                  className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-colors text-[#1A202C] placeholder:text-gray-400"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'success' && (
                <div className="text-green-600 text-sm font-medium text-center bg-green-50 p-3 rounded-lg">
                  {t('lead.success')}
                </div>
              )}

              {status === 'error' && (
                <div className="text-red-600 text-sm font-medium text-center bg-red-50 p-3 rounded-lg">
                  {t('lead.error')}
                </div>
              )}

              <div className="mt-auto pt-4">
                <motion.button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={status === 'idle' ? { scale: 1.02, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2
                    ${status === 'loading' || status === 'success' ? 'bg-gray-400 shadow-none cursor-not-allowed' : 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-orange-500/20'}`}
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> {t('lead.sending')}</>
                  ) : status === 'success' ? (
                    <><Check className="w-5 h-5" /> {t('lead.sent')}</>
                  ) : (
                    buttonText || t('lead.btn')
                  )}
                </motion.button>
              </div>

              <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-gray-300 group-hover:border-primary transition-colors shrink-0">
                  <input type="checkbox" className="peer sr-only" required defaultChecked />
                  <div className="absolute inset-0 bg-primary rounded scale-0 peer-checked:scale-100 transition-transform flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <span className="text-xs text-gray-500 leading-tight">
                  {t('lead.agree')} <a href="#" className="text-primary hover:underline">{t('lead.privacy')}</a>
                </span>
              </label>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
