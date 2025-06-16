
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Shield, Globe } from "lucide-react";

const projects = [
  {
    title: "Fact-Checker Website",
    description: "Developed a Flask web application that ingests news URLs, extracts claims and cross-verifies them against trusted fact-checking APIs. Features misinformation flagging with confidence scores and displays verified sources. Deployed on Heroku with MySQL backend and CI/CD pipeline via GitHub Actions.",
    technologies: ["Python", "Flask", "BeautifulSoup", "Fact-Check API", "MySQL", "Heroku", "GitHub Actions"],
    role: "Full Stack Developer",
    timeline: "Feb 2025 - Present",
    status: "In Progress",
    link: "#",
    github: "#",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Student Welfare Portal",
    description: "Built an initial prototype featuring key modules including campus navigation map, student marketplace, and creativity showcase. Developed a comprehensive hostel leave management system to streamline leave requests and ensure transparent communication with administration.",
    technologies: ["HTML", "React", "TypeScript", "Vite"],
    role: "Frontend Developer",
    timeline: "April 2025",
    status: "Completed",
    link: "#",
    github: "#",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const IconComponent = project.icon;
  
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsla(var(--theme-primary),0.1)] to-[hsla(var(--theme-accent),0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card content */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-[hsl(var(--border)/0.3)] rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:border-[hsl(var(--theme-accent))] group-hover:bg-white/90 dark:group-hover:bg-gray-900/90">
        
        {/* Image and Status Section */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          
          {/* Overlay with project info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <IconComponent className="h-6 w-6 text-white" />
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'In Progress' 
                      ? 'bg-yellow-500/90 text-yellow-900' 
                      : 'bg-green-500/90 text-green-900'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.timeline}
                </div>
              </div>
            </div>
          </div>
          
          {/* Action buttons - appear on hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" variant="default" className="bg-[hsl(var(--theme-primary))] hover:bg-[hsl(var(--theme-accent))] shadow-lg">
              <ExternalLink className="h-4 w-4 mr-1" /> View
            </Button>
            <Button size="sm" variant="outline" className="bg-black/30 hover:bg-black/50 text-white border-white/30 shadow-lg">
              <Github className="h-4 w-4 mr-1" /> Code
            </Button>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--card-foreground))] group-hover:text-[hsl(var(--theme-primary))] transition-colors">
              {project.title}
            </h2>
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] rounded-full flex items-center justify-center">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-[hsl(var(--theme-primary))] font-semibold mb-1">Role: {project.role}</p>
            <p className="text-[hsl(var(--card-foreground))] text-sm leading-relaxed flex-grow">
              {project.description}
            </p>
          </div>
          
          {/* Technologies Section */}
          <div className="mt-auto">
            <h3 className="text-sm font-semibold text-[hsl(var(--muted-foreground))] mb-3">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span 
                  key={tech} 
                  className="px-3 py-1 bg-gradient-to-r from-[hsla(var(--theme-secondary),0.3)] to-[hsla(var(--theme-primary),0.2)] text-[hsl(var(--secondary-foreground))] text-xs rounded-full border border-[hsl(var(--theme-primary)/0.2)] hover:border-[hsl(var(--theme-primary))] transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.2 + techIndex * 0.1 }}
                >
                  {tech}
                </motion.span>
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 dark:from-cyan-600/10 dark:to-teal-600/10 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-indigo-400/15 to-pink-400/15 dark:from-indigo-600/8 dark:to-pink-600/8 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Explore my journey through innovative web development projects, each showcasing unique challenges and creative solutions.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {/* Call to Action Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-[hsla(var(--theme-primary),0.1)] to-[hsla(var(--theme-accent),0.05)] p-12 rounded-2xl backdrop-blur-sm border border-[hsl(var(--border)/0.2)] shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Globe className="h-16 w-16 text-[hsl(var(--theme-primary))] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[hsl(var(--theme-text))] mb-4">
            Ready to Start Something Amazing?
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with innovative teams. Let's build something incredible together!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] hover:from-[hsl(var(--theme-accent))] hover:to-[hsl(var(--theme-primary))] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Let's Collaborate
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
