
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Brain, Code, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Updated ProfileImagePlaceholder
const ProfileImagePlaceholder = () => (
  <div className="relative group">
    <div 
      className="w-64 h-64 md:w-80 md:h-80 shadow-lg 
                 transition-all duration-300 group-hover:shadow-xl overflow-hidden"
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
    </div>
    <motion.div 
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 flex space-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-300"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
        <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors p-2 bg-[hsla(var(--theme-bg-start)/0.7)] dark:bg-[hsla(var(--theme-bg-start)/0.5)] backdrop-blur-sm rounded-full shadow-md hover:shadow-lg">
            <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/jayita-maji-56a221303" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors p-2 bg-[hsla(var(--theme-bg-start)/0.7)] dark:bg-[hsla(var(--theme-bg-start)/0.5)] backdrop-blur-sm rounded-full shadow-md hover:shadow-lg">
            <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/ms10__.4" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors p-2 bg-[hsla(var(--theme-bg-start)/0.7)] dark:bg-[hsla(var(--theme-bg-start)/0.5)] backdrop-blur-sm rounded-full shadow-md hover:shadow-lg">
            <Instagram size={20} />
        </a>
    </motion.div>
  </div>
);

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Simplified background - relies on global body style now */}
      {/* Removed specific gradient overlay and pattern SVG */}
      
      {/* Animated shapes for background - kept these */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-purple-400/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-700/10 dark:to-cyan-700/10 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
      
      {/* Main content */}
      <div className="container-max section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          <motion.div 
            className="text-center md:text-left px-2 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-medium text-[hsl(var(--theme-text))] mb-1">Hello I'm</h2> 
              <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--theme-primary))]">Jayita Maji</h1>
            </div>
            <div className="mb-8">
              <p className="text-base lg:text-lg font-roboto-slab text-[hsl(var(--theme-text))] whitespace-nowrap">
                Web Development Enthusiast | Aspiring Software Developer
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-[hsl(var(--theme-primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--theme-accent))] transition-all duration-300 group">
                <Link to="/portfolio"> 
                  View Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-[hsl(var(--theme-primary))] text-[hsl(var(--theme-primary))] hover:bg-[hsla(var(--theme-primary),0.1)] hover:text-[hsl(var(--theme-accent))] group">
                <a href="/Jayita_Maji_Resume.pdf" download="Jayita_Maji_CV.pdf">
                  Download CV <Download className="ml-2 h-5 w-5 group-hover:rotate-[15deg] transition-transform" />
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

        <motion.div 
          className="mt-24 py-12 bg-[hsla(var(--theme-secondary),0.15)] backdrop-blur-md border border-[hsl(var(--border)/0.1)] rounded-xl shadow-lg" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-[hsl(var(--theme-primary))]">My Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto px-4">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[hsla(var(--theme-bg-start),0.4)] shadow-md hover:shadow-xl transition-shadow">
              <Brain size={48} className="mb-4 text-[hsl(var(--theme-accent))]" />
              <h3 className="text-2xl font-semibold mb-2 text-[hsl(var(--theme-text))]">AI & Machine Learning</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Deeply passionate about leveraging AI and ML to solve real-world problems and create intelligent systems.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[hsla(var(--theme-bg-start),0.4)] shadow-md hover:shadow-xl transition-shadow">
              <Code size={48} className="mb-4 text-[hsl(var(--theme-accent))]" />
              <h3 className="text-2xl font-semibold mb-2 text-[hsl(var(--theme-text))]">Software Development</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
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

