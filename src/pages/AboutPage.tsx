
import { motion } from "framer-motion";
import { School, Briefcase, Lightbulb, UserCircle } from "lucide-react"; // Added icons for sections

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="container-max section-padding">
      <motion.h1 
        className="text-4xl lg:text-5xl font-bold mb-12 text-center text-[hsl(var(--theme-primary))]"
        initial={{ opacity: 0, y: -20 }} // Keeping this title animation for now, or change to simple fade if preferred
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Image Section - takes up 2 cols on lg screens */}
        <motion.div
          className="lg:col-span-2 flex flex-col items-center justify-center p-6 bg-[hsla(var(--theme-bg-start),0.3)] rounded-xl shadow-lg backdrop-blur-sm"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {/* Replace with actual image or a more styled placeholder */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[hsl(var(--theme-secondary))] to-[hsl(var(--theme-primary))] rounded-full shadow-xl flex items-center justify-center mb-6">
            {/* <img src="/path/to/your-image.jpg" alt="Jayita Maji" className="w-full h-full object-cover rounded-full"/> */}
            <UserCircle size={100} className="text-white opacity-70" />
          </div>
          <p className="text-center text-lg text-[hsl(var(--theme-text))]">
            A glimpse of the person behind the code.
          </p>
        </motion.div>

        {/* Text Content - takes up 3 cols on lg screens */}
        <motion.div
          className="lg:col-span-3 space-y-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <div className="bg-[hsla(var(--theme-bg-start),0.5)] p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-sm space-y-4">
            <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-[hsl(var(--theme-primary))] mb-3">
              <Lightbulb className="mr-3 h-7 w-7" /> Introduction
            </h2>
            <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed text-justify">
              Hello! I'm Jayita Maji, a third-year B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence & Machine Learning at Brainware University, Barasat. I am projected to graduate in 2026.
            </p>
            <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed text-justify">
              From a young age, I've been captivated by the power of technology to transform ideas into reality. This fascination led me to pursue a career in software development, where I can combine my analytical skills with my passion for creating innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Education Section - Full Width */}
      <motion.div 
        className="mt-10 lg:mt-16 bg-[hsla(var(--theme-bg-start),0.5)] p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-sm"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <h2 className="flex items-center text-2xl sm:text-3xl font-bold mb-6 text-[hsl(var(--theme-primary))]">
          <School className="mr-3 h-7 w-7" /> My Academic Journey
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))]">Brainware University, Barasat</h3>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              B.Tech in Computer Science & Engineering (Specialization: AI & ML)
            </p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">Projected Graduation: 2026 | Current SGPA: 9+</p>
          </div>
          <hr className="border-[hsl(var(--border))] my-4" />
          <div>
            <h3 className="text-xl font-semibold text-[hsl(var(--theme-text))]">Dakshin Moyna High School (H.S), East Medinipur</h3>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Higher Secondary (WBCHSE Board) - Science Stream
            </p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">Secured: 96.4%</p>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mt-2">
              Secondary (WBBSE Board)
            </p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">Secured: 92.7%</p>
          </div>
        </div>
      </motion.div>

      {/* Aspirations & Interests Section - Full Width */}
      <motion.div 
        className="mt-10 lg:mt-16 bg-[hsla(var(--theme-bg-start),0.5)] p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-sm"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <h2 className="flex items-center text-2xl sm:text-3xl font-bold mb-6 text-[hsl(var(--theme-primary))]">
          <Briefcase className="mr-3 h-7 w-7" /> Aspirations & Interests
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed text-justify">
            My academic journey has equipped me with a strong foundation in computer science principles and specialized knowledge in AI/ML. I am driven by challenges and continuously seek opportunities to learn and grow in this ever-evolving field. My goal is to contribute to impactful projects that make a difference.
          </p>
          <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed text-justify">
            Outside of academics and coding, I enjoy exploring new technologies, reading tech blogs, and occasionally diving into competitive programming challenges. I believe in a balanced approach to life and work, constantly striving for excellence in all my endeavors.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default AboutPage;

