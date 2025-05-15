
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-transparent py-8">
      <div className="container-max text-center text-[hsl(var(--muted-foreground))]">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Jayita2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[hsl(var(--theme-primary))] transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:jayitamaji2004@gmail.com" aria-label="Email" className="hover:text-[hsl(var(--theme-primary))] transition-colors">
            <Mail size={24} />
          </a>
          <a href="tel:9832816778" aria-label="Phone" className="hover:text-[hsl(var(--theme-primary))] transition-colors">
            <Phone size={24} />
          </a>
          {/* Add LinkedIn link when available */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[hsl(var(--theme-primary))] transition-colors">
            <Linkedin size={24} />
          </a> */}
        </div>
        <p className="text-sm">
          &copy; {year} Jayita Maji. All rights reserved.
        </p>
         <p className="text-xs mt-1">
          Aspiring Software Developer | Web Development Enthusiast
        </p>
      </div>
    </footer>
  );
}
