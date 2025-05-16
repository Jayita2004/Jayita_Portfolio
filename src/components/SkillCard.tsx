
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Skill = {
  name: string;
  level: number;
  icon?: LucideIcon;
};

type SkillCardProps = {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
  delay: number;
};

export const SkillCard = ({ title, skills, icon, delay }: SkillCardProps) => {
  return (
    <motion.div
      className="bg-[hsla(var(--theme-bg-start),0.3)] rounded-xl shadow-lg backdrop-blur-sm p-6 border border-[hsl(var(--border)/0.1)] hover:shadow-xl transition-shadow group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-[hsla(var(--theme-primary),0.2)] rounded-lg text-[hsl(var(--theme-primary))]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))]">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <div className="flex items-center gap-2">
                {skill.icon && (
                  <skill.icon className="h-4 w-4 text-[hsl(var(--theme-primary))]" />
                )}
                <span className="text-base font-medium text-[hsl(var(--theme-text))]">{skill.name}</span>
              </div>
              <span className="text-sm font-medium text-[hsl(var(--theme-primary))]">{skill.level}%</span>
            </div>
            <div className="w-full bg-[hsla(var(--theme-secondary),0.3)] rounded-full h-2.5">
              <motion.div 
                className="bg-gradient-to-r from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.5, delay: delay + 0.1 + index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
