
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send, Instagram } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form handling, can be expanded with emailjs or backend
    alert("Message sent (this is a demo)!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen">
      {/* Background decoration elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 dark:from-cyan-600/30 dark:to-indigo-600/30 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
      
      <div className="container-max section-padding relative z-10">
        <motion.h1 
          className="text-4xl lg:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.form 
            onSubmit={handleSubmit} 
            className="glass-card p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-base font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 focus:ring-[hsl(var(--theme-primary))] focus:border-[hsl(var(--theme-primary))] transition-all duration-300" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 focus:ring-[hsl(var(--theme-primary))] focus:border-[hsl(var(--theme-primary))] transition-all duration-300" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-base font-medium text-gray-700 dark:text-gray-300">Message</label>
                <Textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required 
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 focus:ring-[hsl(var(--theme-primary))] focus:border-[hsl(var(--theme-primary))] transition-all duration-300" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full btn-primary text-lg py-3 group"
              >
                Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.form>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[hsl(var(--theme-primary))] group-hover:bg-[hsl(var(--theme-primary))] group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href="mailto:jayitamaji2004@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--theme-primary))] transition-colors text-base">
                    jayitamaji2004@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[hsl(var(--theme-primary))] group-hover:bg-[hsl(var(--theme-primary))] group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a href="tel:+919832816778" className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--theme-primary))] transition-colors text-base">
                    +91 9832816778
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[hsl(var(--theme-primary))] group-hover:bg-[hsl(var(--theme-primary))] group-hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--theme-primary))] transition-colors text-base">
                    github.com/Jayita2004
                  </a>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">Connect With Me</h3>
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-[hsl(var(--theme-primary))] text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                        <Github size={22} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://www.linkedin.com/in/jayita-maji-56a221303" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-[hsl(var(--theme-primary))] text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                        <Linkedin size={22} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://www.instagram.com/ms10__.4" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-[hsl(var(--theme-primary))] text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                        <Instagram size={22} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Instagram</TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="mailto:jayitamaji2004@gmail.com" className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-[hsl(var(--theme-primary))] text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                        <Mail size={22} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Email</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Let's Build Something Amazing</h2>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
