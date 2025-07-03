import { motion } from "framer-motion";
import { School, Github, Linkedin, Mail, Award, Users } from "lucide-react";

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative min-h-screen">
      <div className="container-max section-padding relative z-10">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Image Section */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center justify-center p-6"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl transition-all duration-300 group-hover:shadow-3xl overflow-hidden border-4 border-white/50 dark:border-gray-700/50"
                style={{
                  borderRadius: "40% 60% 55% 45% / 60% 50% 55% 45%",
                }}
              >
                <img
                  src="/lovable-uploads/5ff9315d-16b2-4aa1-bd45-06c2e352463e.png"
                  alt="Jayita Maji"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ borderRadius: "inherit" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent dark:from-blue-900/40"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-4">
              <a
                href="mailto:jayitamaji2004@gmail.com"
                className="p-3 bg-[hsla(var(--theme-bg-start),0.5)] backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110"
              >
                <Mail className="h-6 w-6 text-[hsl(var(--theme-primary))]" />
              </a>
              <a
                href="https://github.com/Jayita2004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[hsla(var(--theme-bg-start),0.5)] backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110"
              >
                <Github className="h-6 w-6 text-[hsl(var(--theme-primary))]" />
              </a>
              <a
                href="https://www.linkedin.com/in/jayita-maji-56a221303"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[hsla(var(--theme-bg-start),0.5)] backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-[hsl(var(--theme-primary))]" />
              </a>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed text-justify sm:text-left">
              A creative web developer merging intelligent design with modern technologies to build impactful digital experiences.
            </p>
            <div className="bg-gradient-to-r from-[hsla(var(--theme-primary),0.1)] to-[hsla(var(--theme-accent),0.1)] p-6 rounded-xl border-l-4 border-[hsl(var(--theme-primary))]">
              <p className="text-[hsl(var(--theme-text))] leading-relaxed">
                Detail-oriented and academically strong Computer Science undergraduate with a keen interest in web development and cybersecurity. Proficient in programming languages and web technologies, with foundational knowledge in data structures and algorithms. Actively engaged in university-level projects and tech fests, aiming to contribute to real-world software systems while continuously enhancing skills.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-[hsla(var(--theme-bg-start),0.3)] to-[hsla(var(--theme-accent),0.05)] p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h2 className="flex items-center text-3xl font-bold mb-8 text-[hsl(var(--theme-primary))]">
            <School className="mr-3 h-8 w-8" /> Education
          </h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-[hsl(var(--theme-accent))]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[hsl(var(--theme-accent))] rounded-full"></div>
              <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))] mb-2">BTech CSE (AI&ML)</h3>
              <p className="text-lg text-[hsl(var(--theme-primary))] font-medium">Brainware University</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Aug 2022 - July 2026 (Expected)</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">Current SGPA: 9.23 (average up to 5th semester)</p>
            </div>
            <div className="relative pl-6 border-l-2 border-[hsl(var(--theme-secondary))]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[hsl(var(--theme-secondary))] rounded-full"></div>
              <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))] mb-2">Higher Secondary (WBCHSE)</h3>
              <p className="text-lg text-[hsl(var(--theme-primary))] font-medium">Dakshin Moyna High School (H.S.)</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">2022 | Score: 96.4%</p>
            </div>
            <div className="relative pl-6 border-l-2 border-[hsl(var(--theme-primary))]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[hsl(var(--theme-primary))] rounded-full"></div>
              <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))] mb-2">Secondary (WBBSE)</h3>
              <p className="text-lg text-[hsl(var(--theme-primary))] font-medium">Dakshin Moyna High School (H.S.)</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">2020 | Score: 92.71%</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-[hsla(var(--theme-accent),0.1)] to-[hsla(var(--theme-secondary),0.05)] p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <h2 className="flex items-center text-3xl font-bold mb-8 text-[hsl(var(--theme-primary))]">
            <Award className="mr-3 h-8 w-8" /> Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Intel® Unnati Training", org: "Intel", file: "Intel_Certificate.pdf", color: "--theme-primary" },
              { title: "Spoken Tutorial Project - Java", org: "IIT Bombay", file: "Spoken_Tutorial-Java.pdf", color: "--theme-accent" },
              { title: "Spoken Tutorial Project - PHP & MySQL", org: "IIT Bombay", file: "Spoken_Tutorial-php_sql.pdf", color: "--theme-secondary" },
              { title: "Advanced Software Engineering", org: "Walmart Global Tech & Forage", file: "Walmart_Certificate.pdf", color: "--theme-primary" },
              { title: "Angular", org: "Infosys Springboard", file: "infosys_angular.pdf", color: "--theme-accent" },
              { title: "Twitter Bootstrap", org: "Infosys Springboard", file: "infosys_twitter_bootstrap.pdf", color: "--theme-secondary" },
            ].map((cert, i) => (
              <div
                key={i}
                onClick={() => window.open(`/${cert.file}`, "_blank")}
                className="cursor-pointer bg-white/50 dark:bg-black/20 p-6 rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--theme-primary))] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 bg-[hsl(var(${cert.color}))] rounded-full mt-2 flex-shrink-0`}></div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--theme-text))] mb-1">{cert.title}</h3>
                    <p className="text-sm text-[hsl(var(--theme-primary))] font-medium">{cert.org}</p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">May 2025</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activities */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-[hsla(var(--theme-secondary),0.1)] to-[hsla(var(--theme-primary),0.05)] p-8 rounded-xl shadow-lg backdrop-blur-sm border border-[hsl(var(--border)/0.1)]"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <h2 className="flex items-center text-3xl font-bold mb-8 text-[hsl(var(--theme-primary))]">
            <Users className="mr-3 h-8 w-8" /> Activities & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))] mb-4">Volunteer Experience</h3>
              <ul className="space-y-3 text-[hsl(var(--theme-text))]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[hsl(var(--theme-accent))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>ICCRET 2022 & 2023 – International Conference on Computing Research (Registration & Logistics)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[hsl(var(--theme-accent))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Texibition 2024 Annual Tech Fest – Demo stalls management and attendee assistance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))] mb-4">Languages & Interests</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-[hsl(var(--theme-text))]">Languages:</h4>
                  <p className="text-[hsl(var(--muted-foreground))]">Bengali (Native), English (Fluent), Hindi (Conversational)</p>
                </div>
                <div>
                  <h4 className="font-medium text-[hsl(var(--theme-text))]">Interests:</h4>
                  <p className="text-[hsl(var(--muted-foreground))]">Photography, Video Editing, Painting</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
