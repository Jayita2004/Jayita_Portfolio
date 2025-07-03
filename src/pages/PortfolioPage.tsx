import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Shield,
  Globe,
  User,
  Palette,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Fact-Checker Website",
    description:
      "Developed a comprehensive Flask web application that ingests news URLs, extracts claims and cross-verifies them against trusted fact-checking APIs. Features intelligent misinformation flagging with confidence scores and displays verified sources for enhanced credibility.",
    technologies: [
      "Python",
      "Flask",
      "BeautifulSoup",
      "Fact-Check API",
      "MySQL",
      "Heroku",
      "GitHub Actions",
    ],
    role: "👨‍💻 Full Stack Developer",
    timeline: "Feb 2025 - Present",
    status: "In Progress",
    link: "#",
    github: "#",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Student Welfare Portal",
    description:
      "Built a comprehensive prototype featuring essential modules including interactive campus navigation map, student marketplace for peer-to-peer transactions, and creativity showcase platform. Developed an efficient hostel leave management system to streamline requests and ensure transparent administration communication.",
    technologies: ["HTML", "React", "TypeScript", "Vite"],
    role: "🧑‍🎨 Frontend Developer",
    timeline: "April 2025",
    status: "Completed",
    link: "https://github.com/Jayita2004/Modern-Student-Well-Fare-Site---UniSphere.git",
    github: "https://github.com/Jayita2004/Modern-Student-Well-Fare-Site---UniSphere.git",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => {
  const IconComponent = project.icon;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-scale"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-600/20 dark:to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card content */}
      <div className="glass-card flex flex-col h-full transition-all duration-500 group-hover:border-[hsl(var(--theme-primary))] overflow-hidden">
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
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${
                      project.status === "In Progress"
                        ? "bg-yellow-500/90 text-yellow-900"
                        : "bg-green-500/90 text-green-900"
                    }`}
                  >
                    {project.status === "In Progress" ? "🔄" : "✅"}{" "}
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center text-white/80 text-sm bg-black/30 rounded-full px-3 py-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.timeline}
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons - appear on hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="default" className="btn-primary text-sm">
                    🔗 Live Demo
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>View Live Project</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-black/30 hover:bg-black/50 text-white border-white/30 shadow-lg text-sm"
                  >
                    Source Code
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub Repository</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-[hsl(var(--theme-primary))] transition-colors">
              {project.title}
            </h2>
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--theme-primary))] to-[hsl(var(--theme-accent))] rounded-full flex items-center justify-center shadow-lg">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-[hsl(var(--theme-primary))] font-semibold mb-2 flex items-center gap-1">
              {project.role}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed flex-grow">
              {project.description}
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mt-auto">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700 hover:border-[hsl(var(--theme-primary))] transition-colors font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.4 + index * 0.2 + techIndex * 0.1,
                  }}
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
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 dark:from-cyan-600/30 dark:to-teal-600/30 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-indigo-400/15 to-pink-400/15 dark:from-indigo-600/25 dark:to-pink-600/25 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my latest web development projects, highlighting
            practical problem-solving and hands-on learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center glass-card p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Globe className="h-16 w-16 text-[hsl(var(--theme-primary))] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Ready to Start Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with
            innovative teams. Let's build something incredible together!
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Let's Collaborate
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
