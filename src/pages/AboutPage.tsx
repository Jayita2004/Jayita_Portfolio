
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="container-max section-padding">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-[hsl(var(--theme-primary))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <motion.div 
        className="max-w-3xl mx-auto space-y-6 bg-[hsla(var(--theme-bg-start),0.5)] p-8 rounded-xl shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed">
          Hello! I'm Jayita Maji, a third-year B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence & Machine Learning at Brainware University, Barasat. I am projected to graduate in 2026.
        </p>
        <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed">
          From a young age, I've been captivated by the power of technology to transform ideas into reality. This fascination led me to pursue a career in software development, where I can combine my analytical skills with my passion for creating innovative solutions.
        </p>
        <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed">
          My academic journey has equipped me with a strong foundation in computer science principles and specialized knowledge in AI/ML. I am driven by challenges and continuously seek opportunities to learn and grow in this ever-evolving field. My goal is to contribute to impactful projects that make a difference.
        </p>
         <p className="text-lg text-[hsl(var(--theme-text))] leading-relaxed">
          Outside of academics and coding, I enjoy [mention a hobby or two if desired, e.g., reading tech blogs, solving puzzles, or a creative pursuit]. I believe in a balanced approach to life and work, constantly striving for excellence in all my endeavors.
        </p>
      </motion.div>
    </div>
  );
};
export default AboutPage;
