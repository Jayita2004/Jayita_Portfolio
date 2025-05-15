
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming shadcn/ui
import { Textarea } from "@/components/ui/textarea"; // Assuming shadcn/ui
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form handling, can be expanded with emailjs or backend
    alert("Message sent (not really, this is a demo)!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container-max section-padding">
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
          className="space-y-6 bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--theme-text))] mb-1">Full Name</label>
            <Input type="text" name="name" id="name" required className="bg-transparent border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))]" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--theme-text))] mb-1">Email Address</label>
            <Input type="email" name="email" id="email" required className="bg-transparent border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))]" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--theme-text))] mb-1">Message</label>
            <Textarea name="message" id="message" rows={4} required className="bg-transparent border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))]" />
          </div>
          <Button type="submit" className="w-full bg-[hsl(var(--theme-primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--theme-accent))] group">
            Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.form>

        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-[hsla(var(--theme-bg-start),0.3)] p-8 rounded-xl shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-[hsl(var(--theme-text))]">Contact Information</h2>
            <ul className="space-y-3 text-[hsl(var(--theme-text))]">
              <li className="flex items-center"><Mail className="mr-3 h-5 w-5 text-[hsl(var(--theme-primary))]" /> jayitamaji2004@gmail.com</li>
              <li className="flex items-center"><Phone className="mr-3 h-5 w-5 text-[hsl(var(--theme-primary))]" /> +91 9832816778</li>
              <li className="flex items-center"><Github className="mr-3 h-5 w-5 text-[hsl(var(--theme-primary))]" /> <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Jayita2004</a></li>
              {/* Add LinkedIn when available */}
            </ul>
          </div>
          
          <div className="text-center">
             {/* Placeholder image, user can provide one. No box/pattern behind it */}
             <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" 
                alt="Connect with me" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg" 
             />
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Connect with me through:</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full bg-[hsl(var(--theme-secondary))] hover:bg-[hsl(var(--theme-primary))] text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary-foreground))] transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:jayitamaji2004@gmail.com" aria-label="Email" className="p-2 rounded-full bg-[hsl(var(--theme-secondary))] hover:bg-[hsl(var(--theme-primary))] text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary-foreground))] transition-colors">
                <Mail size={20} />
              </a>
               {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-[hsl(var(--theme-secondary))] hover:bg-[hsl(var(--theme-primary))] text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary-foreground))] transition-colors">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactPage;
