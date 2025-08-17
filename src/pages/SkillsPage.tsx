import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Github,
  Code2,
  Palette,
  Server,
  GitBranch,
  Terminal,
  Layers,
  Brain,
  Shield
} from "lucide-react";
import { SkillCard } from "@/components/SkillCard";
import { SiMongodb } from "react-icons/si";

const skillsData = {
  programming: [
    { name: "Python", level: 85, icon: Code2 },
    { name: "C++", level: 60, icon: Code2 },
  ],
  webTech: [
    { name: "HTML", level: 95, icon: Code2 },
    { name: "CSS", level: 90, icon: Palette },
    { name: "Node.js", level: 70, icon: Code2 },
    { name: "React", level: 80, icon: Layers },
    { name: "JavaScript", level: 85, icon: Code2 },
  ],
  database: [
    { name: "MySQL", level: 75, icon: Database },
    { name: "MongoDB Atlas", level: 40, icon: Database }, 
    { name: "AWS", level: 40, icon: Database}, // new
  ],
  tools: [
    { name: "Git", level: 85, icon: GitBranch },
    { name: "GitHub", level: 85, icon: Github },
    { name: "VS Code", level: 90, icon: Terminal },
    { name: "Google Colab", level: 80, icon: Terminal },
    { name: "Vercel", level: 75, icon: Server },
  ],
  concepts: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Computer Networks",
    "Neural Networks",
    "Machine Learning",
    "Artificial Intelligence"
  ],
  professional: [
    "Problem Solving",
    "Teamwork & Collaboration",
    "Communication",
    "Adaptability",
    "Attention to Detail",
    "Project Management"
  ]
};

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 dark:from-cyan-600/10 dark:to-teal-600/10 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-pink-400/15 dark:from-indigo-600/8 dark:to-pink-600/8 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {/* Programming Languages */}
          <div className="space-y-8">
            <motion.h2 
              className="text-3xl font-semibold text-center text-[hsl(var(--theme-text))] mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Programming Languages
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard 
                title="Programming Languages" 
                skills={skillsData.programming}
                icon={<Code2 size={28} />} 
                delay={0.3}
              />
              
              <SkillCard 
                title="Web Technologies" 
                skills={skillsData.webTech}
                icon={<Palette size={28} />} 
                delay={0.4}
              />
              
              <SkillCard 
                title="Database & Tools" 
                skills={[...skillsData.database, ...skillsData.tools]}
                icon={<Database size={28} />}
                delay={0.5}
              />
            </div>
          </div>
          
          {/* Core Concepts */}
          <motion.div
            className="bg-gradient-to-br from-[hsla(var(--theme-primary),0.1)] to-[hsla(var(--theme-accent),0.05)] p-10 rounded-2xl shadow-xl backdrop-blur-sm border border-[hsl(var(--border)/0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center justify-center mb-8">
              <Brain className="h-10 w-10 text-[hsl(var(--theme-primary))] mr-4" />
              <h2 className="text-3xl font-semibold text-[hsl(var(--theme-text))]">Core Concepts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData.concepts.map((concept, index) => (
                <motion.div
                  key={concept}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/60 dark:bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--theme-primary))] transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[hsl(var(--theme-accent))] mr-3 group-hover:text-[hsl(var(--theme-primary))] transition-colors" />
                      <span className="font-medium text-[hsl(var(--theme-text))]">{concept}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div
            className="bg-gradient-to-br from-[hsla(var(--theme-secondary),0.1)] to-[hsla(var(--theme-primary),0.05)] p-10 rounded-2xl shadow-xl backdrop-blur-sm border border-[hsl(var(--border)/0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <Server className="h-10 w-10 text-[hsl(var(--theme-primary))] mr-4" />
              <h2 className="text-3xl font-semibold text-[hsl(var(--theme-text))]">Professional Skills</h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {skillsData.professional.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-lg py-3 px-6 bg-gradient-to-r from-[hsla(var(--theme-primary),0.2)] to-[hsla(var(--theme-accent),0.2)] hover:from-[hsla(var(--theme-primary),0.3)] hover:to-[hsla(var(--theme-accent),0.3)] transition-all duration-300 border border-[hsl(var(--theme-primary)/0.3)] hover:border-[hsl(var(--theme-primary))] hover:scale-105 font-medium"
                  >
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
