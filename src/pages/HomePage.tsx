import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Brain, Code, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Enhanced ProfileImagePlaceholder with soft gradient and glow
const ProfileImagePlaceholder = () => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
    <div 
      className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl 
                 transition-all duration-300 group-hover:shadow-3xl overflow-hidden border-4 border-white/50 dark:border-gray-700/50"
      style={{
        borderRadius: '40% 60% 55% 45% / 60% 50% 55% 45%',
      }}
    >
      <img 
        src="/lovable-uploads/9d8c32b6-32bb-4be0-b118-662b94b3977b.png" 
        alt="Jayita Maji" 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        style={{ borderRadius: 'inherit' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent dark:from-blue-900/40"></div>
    </div>
    
    {/* Social Media Icons with Tooltips */}
    <motion.div 
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 flex space-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-300"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="https://github.com/Jayita2004" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--theme-primary))] transition-colors p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <Github size={20} />
          </a>
        </TooltipTrigger>
        <TooltipContent>GitHub</TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="https://www.linkedin.com/in/jayita-maji-56a221303" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--theme-primary))] transition-colors p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
        </TooltipTrigger>
        <TooltipContent>LinkedIn</TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="https://www.instagram.com/ms10__.4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--theme-primary))] transition-colors p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
        </TooltipTrigger>
        <TooltipContent>Instagram</TooltipContent>
      </Tooltip>
    </motion.div>
  </div>
);

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 dark:from-cyan-600/30 dark:to-teal-600/30 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
      
      {/* Main content */}
      <div className="container-max section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          <motion.div 
            className="text-center md:text-left px-2 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">Hello I'm</h2> 
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 gradient-text">Jayita Maji</h1>
              <p className="text-lg lg:text-xl font-roboto-slab text-gray-700 dark:text-gray-300">
                Web Development Enthusiast | Aspiring Software Developer
              </p>
            </div>
            
            {/* New Intro Paragraph */}
            <div className="mb-8">
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                I'm a Computer Science student passionate about building responsive web interfaces. 
                Currently working on full-stack projects using React and modern web technologies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="btn-primary group">
                <Link to="/portfolio"> 
                  View Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-[hsl(var(--theme-primary))] text-[hsl(var(--theme-primary))] hover:bg-[hsl(var(--theme-primary))] hover:text-white dark:btn-outline-fix group transition-all duration-300">
                <a href="/JAYITA_MAJI_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume <Download className="ml-2 h-5 w-5 group-hover:rotate-[15deg] transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileImagePlaceholder />
          </motion.div>
        </div>

        {/* Focus Areas Section */}
        <motion.div 
          className="mt-24 py-12 glass-card" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 gradient-text">My Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto px-4">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Brain size={48} className="mb-4 text-[hsl(var(--theme-accent))]" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">AI & Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deeply passionate about leveraging AI and ML to solve real-world problems and create intelligent systems.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Code size={48} className="mb-4 text-[hsl(var(--theme-accent))]" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Software Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enthusiastic about full-stack web development, with growing expertise in frontend and backend technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
