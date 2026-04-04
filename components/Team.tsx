import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface Achievement {
  icon: string;
  text: string;
}

interface TeacherCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  imgSrc: string;
  achievements: Achievement[];
  achievementsTitle: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ name, role, bio, skills, imgSrc, achievements, achievementsTitle }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="relative w-full max-w-[400px] mx-auto group h-full"
    >
        <div className="relative bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 flex flex-col items-center shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden h-full">
          
          {/* Image Section */}
          <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] mb-6 flex-shrink-0">
             <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
             <img src={imgSrc} alt={name} className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg z-10" referrerPolicy="no-referrer" />
          </div>

          {/* Header Info */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              AI Expert
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">
              {name}
            </h3>
            <p className="text-primary font-bold text-sm md:text-base">{role}</p>
          </div>

          {/* Bio */}
          <p className="text-gray-600 text-center text-sm leading-relaxed mb-8">
            {bio}
          </p>

          {/* Achievements List */}
          <div className="w-full mb-8">
             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center border-b border-gray-100 pb-2">{achievementsTitle}</h4>
             <ul className="space-y-3">
                {achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 group-hover:border-primary/20 transition-colors">
                      <span className="text-xl flex-shrink-0">
                          {ach.icon}
                      </span>
                      <span className="text-sm text-gray-700 font-medium leading-tight text-left">{ach.text}</span>
                  </li>
                ))}
             </ul>
          </div>

          {/* Skills */}
          <div className="w-full mt-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
    </motion.div>
  );
};

export const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative bg-white" id="team">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            {t('team.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('team.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 justify-center items-stretch max-w-4xl mx-auto">
          <TeacherCard 
            name={t('team.mentor1_name')}
            role={t('team.mentor1_role')}
            bio={t('team.mentor1_bio')}
            skills={["Python", "Fullstack", "EdTech", "AI"]}
            imgSrc="https://raw.githubusercontent.com/ameer889092827/assets/4fcc11a311667e80ec88a690beaf6c643098597c/images/photo_2025-12-25_18-17-32%281%29.jpg"
            achievementsTitle={t('team.achievements')}
            achievements={[
                { icon: "🚀", text: t('team.mentor1_ach1')},
                { icon: "🏆", text: t('team.mentor1_ach2')},
                { icon: "💻", text: t('team.mentor1_ach3')},
                { icon: "⭐", text: t('team.mentor1_ach4')},
                { icon: "💰", text: t('team.mentor1_ach5')},
                { icon: "🥇", text: t('team.mentor1_ach6')}
            ]}
          />
          <TeacherCard 
            name={t('team.mentor2_name')}
            role={t('team.mentor2_role')}
            bio={t('team.mentor2_bio')}
            skills={["Marketing", "Business", "Robotics", "Strategy"]}
            imgSrc="https://raw.githubusercontent.com/ameer889092827/assets/4fcc11a311667e80ec88a690beaf6c643098597c/images/1762414619740.jpg"
            achievementsTitle={t('team.achievements')}
            achievements={[
                { icon: "💼", text: t('team.mentor2_ach1')},
                { icon: "📈", text: t('team.mentor2_ach2')},
                { icon: "🏪", text: t('team.mentor2_ach3')},
                { icon: "🎓", text: t('team.mentor2_ach4')},
                { icon: "🤖", text: t('team.mentor2_ach5')},
                { icon: "🥇", text: t('team.mentor2_ach6')}
            ]}
          />
        </div>
      </div>
    </section>
  );
};