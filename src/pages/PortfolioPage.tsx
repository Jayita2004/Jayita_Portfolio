
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"; // Changed from ExternalLink to Plus

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
        My Projects {/* Kept consistent with nav, reference image shows "Recent Works" */}
      </motion.h1>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="bg-card rounded-xl shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"/>
              {project.technologies[0] && (
                <span className="absolute top-3 left-3 px-3 py-1 bg-[hsl(var(--theme-accent))] text-[hsl(var(--accent-foreground))] text-xs font-semibold rounded-full shadow-md">
                  {project.technologies[0]}
                </span>
              )}
              {project.link && project.link !== "#" && (
                <Button asChild size="icon" className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white rounded-full w-9 h-9 shadow-lg transition-all duration-300 group-hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                    <Plus className="h-5 w-5"/>
                  </a>
                </Button>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 text-[hsl(var(--card-foreground))] group-hover:text-[hsl(var(--theme-primary))] transition-colors">{project.title}</h2>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1"><strong>Role:</strong> {project.role}</p>
              <p className="text-[hsl(var(--card-foreground))] text-sm mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-[hsl(var(--muted-foreground))] mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-[hsl(var(--theme-secondary))] text-[hsl(var(--secondary-foreground))] text-xs rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {projects.length === 0 && (
        <p className="text-center text-xl col-span-full text-[hsl(var(--muted-foreground))] mt-8">More projects coming soon!</p>
      )}

      <motion.p 
        className="text-2xl font-semibold text-center mt-16 text-[hsl(var(--theme-text))]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: projects.length * 0.1 + 0.5 }}
      >
        Let's start a new project!
      </motion.p>
    </div>
  );
};
export default PortfolioPage;
