import { motion } from "framer-motion";
import { School, Briefcase, Sparkles, Github, Linkedin, Instagram } from "lucide-react"; 

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative min-h-screen">
      {/* Simplified background - relies on global body style now */}
      
      <div className="container-max section-padding relative z-10">
        <motion.h1 
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Image Section - Kept existing style */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center justify-center p-6"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/ff8a9855-7794-44e9-a1f5-9518d40d877c.png" 
                  alt="Jayita Maji" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-4">
              <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" className="p-3 bg-[hsla(var(--theme-bg-start),0.5)] backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110">
                <Github className="h-6 w-6 text-[hsl(var(--theme-primary))]" />
              </a>
              <a href="https://www.linkedin.com/in/jayita-maji-56a221303" target="_blank" rel="noopener noreferrer" className="p-3 bg-[hsla(var(--theme-bg-start),0.5)] backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110">
                <Linkedin className="h-6 w-6 text-[hsl(var(--theme-primary))]" />
              </a>
              <a href="https://www.instagram.com/ms10__.4" target="_blank" rel="noopener noreferrer" className="p-3 bg-[hsla(var(--theme-bg-start),0.5)] backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110">
                <Instagram className="h-6 w-6 text-[hsl(var(--theme-primary))]" />
              </a>
            </div>
          </motion.div>

          {/* Text Content - The box requested for removal was here. */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {/* The box containing "A creative web developer..." has been removed. */}
            {/* You can add new content here if needed, or leave it empty if this section is no longer required. */}
            {/* For example, if there was other introductory text you wanted to keep or add, it would go here. */}
            {/* If this 'motion.div' is now empty and not needed, it could also be removed, but for now, we are just removing the inner box. */}
          </motion.div>
        </div>

        {/* Education Section - Full Width */}
        <motion.div 
          className="mt-10 lg:mt-16 bg-[hsla(var(--theme-bg-start),0.3)] p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h2 className="flex items-center text-2xl sm:text-3xl font-bold mb-6 text-[hsl(var(--theme-primary))]">
            <School className="mr-3 h-7 w-7" /> My Academic Journey
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))]">Brainware University, Barasat</h3>
              <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                B.Tech in Computer Science & Engineering (Specialization: AI & ML)
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Projected Graduation: 2026 | Current SGPA: 9+</p>
            </div>
            <hr className="border-[hsl(var(--border))] my-4" />
            <div>
              <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))]">Dakshin Moyna High School (H.S), East Medinipur</h3>
              <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                Higher Secondary (WBCHSE Board) - Science Stream
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">2022 | Secured: 96.4%</p>
              <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mt-2">
                Secondary (WBBSE Board)
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">2020 | Secured: 92.7%</p>
            </div>
          </div>
        </motion.div>

        {/* Aspirations & Interests Section - Full Width */}
        <motion.div 
          className="mt-10 lg:mt-16 bg-[hsla(var(--theme-bg-start),0.3)] p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <h2 className="flex items-center text-2xl sm:text-3xl font-bold mb-6 text-[hsl(var(--theme-primary))]">
            <Briefcase className="mr-3 h-7 w-7" /> Aspirations & Interests
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed text-justify">
              My academic journey has equipped me with a strong foundation in computer science principles and specialized knowledge in AI/ML. I am driven by challenges and continuously seek opportunities to learn and grow in this ever-evolving field. My goal is to contribute to impactful projects that make a difference.
            </p>
            <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed text-justify">
              Outside of academics and coding, I enjoy exploring new technologies, reading tech blogs, and occasionally diving into competitive programming challenges. I believe in a balanced approach to life and work, constantly striving for excellence in all my endeavors.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutPage;
