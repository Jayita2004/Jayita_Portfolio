
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "University Portal (Group Frontend Project)",
    description: "Developed key frontend components for a comprehensive university portal. Focused on user interface design, responsiveness, and interactive elements to enhance user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer, UI/UX Contributor",
    link: "#", // Placeholder link
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" // Placeholder
  },
  // Add more projects as they are completed
  // {
  //   title: "Final Year Group Project (Upcoming)",
  //   description: "Details about the final year project will be added upon completion. Aiming to leverage AI/ML concepts for an innovative solution.",
  //   technologies: ["AI/ML", "Python", "Relevant Frameworks"],
  //   role: "To be determined",
  //   link: "#",
  //  image: "..."
  // },
];

const PortfolioPage = () => {
  return (
    <div className="container-max section-padding">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Portfolio
      </motion.h1>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="bg-[hsla(var(--theme-bg-start),0.3)] rounded-xl shadow-lg overflow-hidden backdrop-blur-sm flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-2 text-[hsl(var(--theme-text))]">{project.title}</h2>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1"><strong>Role:</strong> {project.role}</p>
              <p className="text-[hsl(var(--theme-text))] mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[hsl(var(--theme-text))] mb-1">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-[hsl(var(--theme-secondary))] text-[hsl(var(--secondary-foreground))] text-xs rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
              {project.link !== "#" && (
                <Button asChild variant="outline" className="mt-auto border-[hsl(var(--theme-primary))] text-[hsl(var(--theme-primary))] hover:bg-[hsla(var(--theme-primary),0.1)]">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4"/>
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        ))}
         {projects.length === 0 && (
          <p className="text-center text-xl col-span-full text-[hsl(var(--muted-foreground))]">More projects coming soon!</p>
        )}
      </div>
    </div>
  );
};
export default PortfolioPage;
