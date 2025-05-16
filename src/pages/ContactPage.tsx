
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send, Instagram } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form handling, can be expanded with emailjs or backend
    alert("Message sent (not really, this is a demo)!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen">
      {/* Enhanced background with animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-800/10 to-indigo-900/20 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-indigo-950/40 z-0">
        <div className="absolute inset-0 bg-[url('/assets/wave-pattern.svg')] opacity-15 dark:opacity-10"></div>
      </div>
      
      {/* Background decoration elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-purple-400/10 dark:from-pink-700/5 dark:to-purple-700/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-700/5 dark:to-cyan-700/5 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
      
      <div className="container-max section-padding relative z-10">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.form 
            onSubmit={handleSubmit} 
            className="bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--theme-text))]">Full Name</label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="bg-[hsla(var(--theme-bg-end),0.3)] border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))]" 
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--theme-text))]">Email Address</label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="bg-[hsla(var(--theme-bg-end),0.3)] border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))]" 
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--theme-text))]">Message</label>
                <Textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required 
                  className="bg-[hsla(var(--theme-bg-end),0.3)] border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))]" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] text-[hsl(var(--primary-foreground))] hover:from-[hsl(var(--theme-accent))] hover:to-[hsl(var(--theme-primary))] transition-all duration-300 group"
              >
                Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.form>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]">
              <h2 className="text-2xl font-semibold mb-6 text-[hsl(var(--theme-text))]">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[hsla(var(--theme-primary),0.2)] text-[hsl(var(--theme-primary))] group-hover:bg-[hsl(var(--theme-primary))] group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href="mailto:jayitamaji2004@gmail.com" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors">
                    jayitamaji2004@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[hsla(var(--theme-primary),0.2)] text-[hsl(var(--theme-primary))] group-hover:bg-[hsl(var(--theme-primary))] group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-[hsl(var(--theme-text))]">+91 9832816778</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[hsla(var(--theme-primary),0.2)] text-[hsl(var(--theme-primary))] group-hover:bg-[hsl(var(--theme-primary))] group-hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--theme-text))] hover:text-[hsl(var(--theme-primary))] transition-colors">
                    github.com/Jayita2004
                  </a>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-[hsl(var(--theme-text))]">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-lg bg-[hsla(var(--theme-secondary),0.3)] hover:bg-[hsl(var(--theme-primary))] text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:scale-110">
                    <Github size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/jayita-maji-56a221303" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-lg bg-[hsla(var(--theme-secondary),0.3)] hover:bg-[hsl(var(--theme-primary))] text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:scale-110">
                    <Linkedin size={22} />
                  </a>
                  <a href="https://www.instagram.com/ms10__.4" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 rounded-lg bg-[hsla(var(--theme-secondary),0.3)] hover:bg-[hsl(var(--theme-primary))] text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:scale-110">
                    <Instagram size={22} />
                  </a>
                  <a href="mailto:jayitamaji2004@gmail.com" aria-label="Email" className="p-3 rounded-lg bg-[hsla(var(--theme-secondary),0.3)] hover:bg-[hsl(var(--theme-primary))] text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:scale-110">
                    <Mail size={22} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]">
              <h2 className="text-2xl font-semibold mb-4 text-[hsl(var(--theme-text))]">Let's Build Something Amazing</h2>
              <p className="text-[hsl(var(--muted-foreground))]">
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
