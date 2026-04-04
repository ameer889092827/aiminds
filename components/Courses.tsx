import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Bot, Gamepad2 } from 'lucide-react';
import { OpenClaw } from '@lobehub/icons';
import { useTranslation } from 'react-i18next';

export const Courses: React.FC = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t('courses.course3_title'),
      age: t('courses.course3_age'),
      description: t('courses.course3_desc'),
      icon: <Bot className="w-8 h-8 text-accent" />,
      color: 'bg-orange-50'
    },
    {
      title: t('courses.course4_title'),
      age: t('courses.course4_age'),
      description: t('courses.course4_desc'),
      icon: <OpenClaw.Color size={32} />,
      color: 'bg-gray-100'
    },
    {
      title: t('courses.course2_title'),
      age: t('courses.course2_age'),
      description: t('courses.course2_desc'),
      icon: <Gamepad2 className="w-8 h-8 text-secondary" />,
      color: 'bg-purple-50'
    },
    {
      title: t('courses.course1_title'),
      age: t('courses.course1_age'),
      description: t('courses.course1_desc'),
      icon: <Code className="w-8 h-8 text-primary" />,
      color: 'bg-blue-50'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="programs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">{t('courses.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('courses.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-hover transition-all flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-6`}>
                {course.icon}
              </div>
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4 w-fit">
                {course.age}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
