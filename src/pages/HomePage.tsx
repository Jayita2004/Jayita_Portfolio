
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Brain, Code, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Updated ProfileImagePlaceholder
const ProfileImagePlaceholder = () => (
  <div className="relative group">
    <div 
      className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[hsl(var(--theme-secondary))] to-[hsl(var(--theme-primary))] p-1 shadow-lg 
                 transition-all duration-300 group-hover:shadow-xl overflow-hidden
                 flex items-center justify-center text-6xl font-bold text-white"
      style={{
        borderRadius: '40% 60% 55% 45% / 60% 50% 55% 45%',
      }}
    >
      <img 
        src="https://aicdn.picsart.com/5f6e9fb0-110c-49e8-ad5b-8c3c21ff0c9f.png" 
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
        <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors p-2 bg-[hsla(var(--theme-bg-start),0.7)] rounded-full shadow-md hover:shadow-lg backdrop-blur-sm">
            <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/jayita-maji-b94360251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors p-2 bg-[hsla(var(--theme-bg-start),0.7)] rounded-full shadow-md hover:shadow-lg backdrop-blur-sm">
            <Linkedin size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors p-2 bg-[hsla(var(--theme-bg-start),0.7)] rounded-full shadow-md hover:shadow-lg backdrop-blur-sm"> {/* TODO: Add actual Twitter URL */}
            <Twitter size={20} />
        </a>
    </motion.div>
  </div>
);

const HomePage = () => {
  return (
    <div className="container-max section-padding">
      <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
        <motion.div 
          className="text-center md:text-left px-2 sm:px-0" // Added small horizontal padding for very small screens
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedText text="Hello, I am Jayita Maji" className="text-4xl lg:text-5xl font-bold mb-4 text-[hsl(var(--theme-primary))]" />
          <p className="text-xl lg:text-2xl text-[hsl(var(--theme-text))] mb-2">
            Aspiring Software Developer | Web Development Enthusiast
          </p>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
            A passionate B.Tech CSE (AI & ML) student at Brainware University, excelling with a 9+ SGPA and eager to build innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-[hsl(var(--theme-primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--theme-accent))] transition-all duration-300 group">
              <Link to="/portfolio"> {/* This path will still work even if nav text changes */}
                View Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-[hsl(var(--theme-primary))] text-[hsl(var(--theme-primary))] hover:bg-[hsla(var(--theme-primary),0.1)] hover:text-[hsl(var(--theme-accent))] group">
              <a href="/Jayita_Maji_Resume.pdf" download="Jayita_Maji_CV.pdf">  {/* Replace # with actual CV path, ensure CV is in public folder */}
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
        className="mt-16 py-12 bg-[hsla(var(--theme-secondary),0.2)] rounded-xl shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-[hsl(var(--theme-primary))]">My Focus Areas</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto px-4">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[hsla(var(--theme-bg-start),0.5)] shadow-md hover:shadow-xl transition-shadow">
            <Brain size={48} className="mb-4 text-[hsl(var(--theme-accent))]" />
            <h3 className="text-2xl font-semibold mb-2 text-[hsl(var(--theme-text))]">AI & Machine Learning</h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Deeply passionate about leveraging AI and ML to solve real-world problems and create intelligent systems. Consistently achieving 9+ SGPA in my specialized B.Tech program.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[hsla(var(--theme-bg-start),0.5)] shadow-md hover:shadow-xl transition-shadow">
            <Code size={48} className="mb-4 text-[hsl(var(--theme-accent))]" />
            <h3 className="text-2xl font-semibold mb-2 text-[hsl(var(--theme-text))]">Software Development</h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Enthusiastic about full-stack web development, with growing expertise in frontend and backend technologies. Committed to building responsive and user-friendly applications.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default HomePage;
