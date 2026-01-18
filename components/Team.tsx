import React from 'react';

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
}

const TeacherCard: React.FC<TeacherCardProps> = ({ name, role, bio, skills, imgSrc, achievements }) => {
  return (
    <div className="relative w-full max-w-[400px] mx-auto group h-full">
        {/* Card Container */}
        <div className="relative bg-darker/80 backdrop-blur-xl border-2 border-primary/30 rounded-[32px] p-6 md:p-8 flex flex-col items-center shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:shadow-[0_0_50px_rgba(0,229,255,0.2)] transition-shadow duration-300 overflow-hidden h-full">
          
          {/* Image Section */}
          <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] mb-6 flex-shrink-0">
             {/* Glow Effect */}
             <div className="absolute inset-[-20px] rounded-full bg-radial-gradient from-primary/40 to-transparent animate-pulse z-0"></div>
             {/* Rotating Frame */}
             <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow z-0"></div>
             <img src={imgSrc} alt={name} className="relative w-full h-full object-cover rounded-full border-4 border-dark z-10" />
          </div>

          {/* Header Info */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
              AI Expert
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
              {name}
            </h3>
            <p className="text-white font-bold text-sm md:text-base">{role}</p>
          </div>

          {/* Bio */}
          <p className="text-gray-300 text-center text-sm leading-relaxed mb-8">
            {bio}
          </p>

          {/* Achievements List */}
          <div className="w-full mb-8">
             <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 text-center border-b border-white/10 pb-2">Достижения</h4>
             <ul className="space-y-3">
                {achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                      <span className="text-xl flex-shrink-0">
                          {ach.icon}
                      </span>
                      <span className="text-sm text-gray-200 font-medium leading-tight text-left">{ach.text}</span>
                  </li>
                ))}
             </ul>
          </div>

          {/* Skills */}
          <div className="w-full mt-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-mono text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
    </div>
  );
};

export const Team: React.FC = () => {
  return (
    <section className="py-24 relative">
       {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-primary/5 to-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Наставники курса
          </h2>
          <p className="text-gray-400 text-lg">
            Молодые эксперты, которые говорят на одном языке с учениками
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-stretch max-w-5xl mx-auto">
          <TeacherCard 
            name="Амир Пашаев"
            role="Founder, Technical Lead"
            bio="16 лет, НИШ. Программирует с 12 лет. Превращает сложные алгоритмы в простые решения."
            skills={["Python", "Fullstack", "EdTech", "AI"]}
            imgSrc="https://raw.githubusercontent.com/ameer889092827/assets/4fcc11a311667e80ec88a690beaf6c643098597c/images/photo_2025-12-25_18-17-32%281%29.jpg"
            achievements={[
                { icon: "🚀", text: "Основатель Pathly EdTech (1500+ Юзеров)"},
                { icon: "🏆", text: "Призер международных олимпиад (Infomatrix)"},
                { icon: "💻", text: "Победитель 3-х Хакатонов"},
                { icon: "⭐", text: "Номинант NASA Space Apps"},
                { icon: "💰", text: "Заработал первые $1000 на коде в 16 лет"},
                { icon: "🥇", text: "10+ STEM-наград"}
            ]}
          />
          <TeacherCard 
            name="Ихлас Нариман"
            role="Founder, Head of Growth"
            bio="16 лет, БИЛ. Предприниматель и маркетолог. Знает, как превратить технологии в успешный продукт."
            skills={["Marketing", "Business", "Robotics", "Strategy"]}
            imgSrc="https://raw.githubusercontent.com/ameer889092827/assets/4fcc11a311667e80ec88a690beaf6c643098597c/images/1762414619740.jpg"
            achievements={[
                { icon: "💼", text: "Маркетолог в NYYX (Global)"},
                { icon: "📈", text: "Управляет бюджетом $11,000 в день"},
                { icon: "🏪", text: "Свой магазин с прибылью $1000+/мес"},
                { icon: "🎓", text: "Выпускник бизнес-школы LaunchX"},
                { icon: "🤖", text: "Золото на олимпиаде робототехники WRO"},
                { icon: "🥇", text: "10+ STEM-наград"}
            ]}
          />
        </div>
      </div>
    </section>
  );
};