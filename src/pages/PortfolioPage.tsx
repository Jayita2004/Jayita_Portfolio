
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "University Portal (Group Frontend Project)",
    description: "Developed key frontend components for a comprehensive university portal. Focused on user interface design, responsiveness, and interactive elements to enhance user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer, UI/UX Contributor",
    link: "#", // Placeholder link
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  // Add more projects as they are completed
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Glass card effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsla(var(--theme-primary),0.1)] to-[hsla(var(--theme-accent),0.1)] backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="bg-card/60 dark:bg-card/40 backdrop-blur-md border border-[hsl(var(--border)/0.2)] rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:border-[hsl(var(--theme-accent))]">
        <div className="relative">
          <div className="overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-2">
              <Button size="sm" variant="default" className="bg-[hsl(var(--theme-primary))] hover:bg-[hsl(var(--theme-accent))]">
                <ExternalLink className="h-4 w-4 mr-2" /> View Project
              </Button>
              <Button size="sm" variant="outline" className="bg-black/30 hover:bg-black/50 text-white border-white/20">
                <Github className="h-4 w-4 mr-2" /> Code
              </Button>
            </div>
          </div>
          
          <div className="absolute top-3 left-3 flex gap-2">
            {project.technologies[0] && (
              <span className="px-3 py-1 bg-[hsl(var(--theme-accent))] text-[hsl(var(--accent-foreground))] text-xs font-semibold rounded-full shadow-md">
                {project.technologies[0]}
              </span>
            )}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-2 text-[hsl(var(--card-foreground))] group-hover:text-[hsl(var(--theme-primary))] transition-colors">{project.title}</h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1"><strong>Role:</strong> {project.role}</p>
          <p className="text-[hsl(var(--card-foreground))] text-sm mb-4 flex-grow">{project.description}</p>
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-[hsl(var(--muted-foreground))] mb-2">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 bg-[hsla(var(--theme-secondary),0.3)] text-[hsl(var(--secondary-foreground))] text-xs rounded-md">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Enhanced background with animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-teal-800/10 to-purple-900/20 dark:from-indigo-950/30 dark:via-teal-950/30 dark:to-purple-950/40 z-0">
        <div className="absolute inset-0 bg-[url('/assets/circuit-pattern.svg')] opacity-15 dark:opacity-10"></div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {projects.length === 0 && (
          <p className="text-center text-xl col-span-full text-[hsl(var(--muted-foreground))] mt-8">More projects coming soon!</p>
        )}

        <motion.p 
          className="text-3xl font-semibold text-center mt-16 text-[hsl(var(--theme-text))]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: projects.length * 0.1 + 0.5 }}
        >
          Let's start a new project!
        </motion.p>
      </div>
    </div>
  );
};
export default PortfolioPage;
