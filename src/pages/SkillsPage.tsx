
import { motion } from "framer-motion";

const skillsData = {
  technical: [
    { name: "C", level: 90 },
    { name: "Python", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Express.js (Learning)", level: 50 },
  ],
  professional: [
    "Problem Solving",
    "Teamwork & Collaboration",
    "Communication",
    "Adaptability",
    "Attention to Detail",
  ]
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-[hsl(var(--theme-text))]">{name}</span>
      <span className="text-sm font-medium text-[hsl(var(--theme-primary))]">{level}%</span>
    </div>
    <div className="w-full bg-[hsla(var(--theme-secondary),0.3)] rounded-full h-2.5">
      <motion.div 
        className="bg-[hsl(var(--theme-primary))] h-2.5 rounded-full" 
        style={{ width: `${level}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div className="container-max section-padding">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & <span className="text-[hsl(var(--theme-accent))]">Expertise</span>
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          className="bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[hsl(var(--theme-text))]">Technical Skills</h2>
          {skillsData.technical.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[hsl(var(--theme-text))]">Professional Skills</h2>
          <ul className="space-y-3">
            {skillsData.professional.map((skill, index) => (
              <motion.li 
                key={skill} 
                className="flex items-center text-[hsl(var(--theme-text))]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <span className="inline-block h-2 w-2 bg-[hsl(var(--theme-accent))] rounded-full mr-3"></span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
export default SkillsPage;
