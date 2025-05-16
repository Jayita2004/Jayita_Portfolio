
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Github,
  Figma,
  CodeXml as HtmlIcon, // Alias for HTML
  Palette as CssIcon, // Alias for CSS
  Cable as JavascriptIcon, // Alias for JavaScript
  Shapes as ReactIcon, // Alias for React
  Wind as TailwindIcon, // Alias for Tailwind CSS
  Cog as NodejsIcon, // Alias for Node.js
  Server as ExpressIcon, // Alias for Express.js
  GitMerge as GitIcon, // Alias for Git
  TerminalSquare as VscodeIcon, // Alias for VS Code
  PanelLeft // Fallback or specific use
} from "lucide-react";
import { SkillCard } from "@/components/SkillCard";

const skillsData = {
  frontend: [
    { name: "HTML", level: 95, icon: HtmlIcon },
    { name: "CSS", level: 90, icon: CssIcon },
    { name: "JavaScript", level: 80, icon: JavascriptIcon },
    { name: "React", level: 75, icon: ReactIcon }, // Added React
    { name: "Tailwind CSS", level: 85, icon: TailwindIcon },
  ],
  backend: [
    { name: "Node.js", level: 70, icon: NodejsIcon },
    { name: "Express.js (Learning)", level: 50, icon: ExpressIcon },
  ],
  database: [
    { name: "MySQL", level: 75, icon: Database },
  ],
  tools: [
    { name: "Git", level: 85, icon: GitIcon },
    { name: "GitHub", level: 85, icon: Github },
    { name: "VS Code", level: 90, icon: VscodeIcon },
    { name: "Figma", level: 70, icon: Figma },
  ],
  professional: [
    "Problem Solving",
    "Teamwork & Collaboration",
    "Communication",
    "Adaptability",
    "Attention to Detail",
  ]
};

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Simplified background - relies on global body style now */}
      {/* Removed specific gradient overlay and pattern SVG */}
      
      {/* Background decoration elements - kept these, ensure colors are theme-consistent */}
      <div className="absolute top-40 right-20 w-56 h-56 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-700/5 dark:to-blue-700/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-indigo-400/10 dark:from-violet-700/5 dark:to-indigo-700/5 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
      
      <div className="container-max section-padding relative z-10">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & <span className="text-[hsl(var(--theme-accent))]">Expertise</span>
        </motion.h1>
        
        <div className="space-y-16">
          {/* Technical Skills Section */}
          <div className="space-y-8">
            <motion.h2 
              className="text-2xl font-semibold text-center text-[hsl(var(--theme-text))] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Technical Skills
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <SkillCard 
                title="Frontend" 
                skills={skillsData.frontend}
                icon={<HtmlIcon size={24} />} 
                delay={0.3}
              />
              
              {/* Backend Skills */}
              <SkillCard 
                title="Backend" 
                skills={skillsData.backend}
                icon={<NodejsIcon size={24} />} 
                delay={0.4}
              />
              
              {/* Database Skills */}
              <SkillCard 
                title="Database" 
                skills={skillsData.database}
                icon={<Database size={24} />}
                delay={0.5}
              />
              
              {/* Tools & Platforms */}
              <SkillCard 
                title="Tools & Platforms" 
                skills={skillsData.tools}
                icon={<Github size={24} />}
                delay={0.6}
              />
            </div>
          </div>
          
          {/* Professional Skills Section */}
          <motion.div
            className="bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[hsl(var(--theme-text))]">Professional Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skillsData.professional.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <Badge variant="secondary" className="text-base py-1.5 px-4 bg-[hsla(var(--theme-secondary),0.3)] hover:bg-[hsla(var(--theme-secondary),0.5)] transition-colors">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
