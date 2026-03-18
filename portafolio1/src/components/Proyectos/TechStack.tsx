"use client"

import { motion } from "framer-motion";

interface TechStackProps {
  technologies: string[];
}

const TechStack = ({ technologies }: TechStackProps) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <motion.div
      className="mb-8 max-w-xl"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <h3
        className="text-white font-regular mt-8 mb-3 text-lg uppercase"
        style={{ fontFamily: 'Javanese Text' }}
      >
        Stack Tecnológico
      </h3>

      <div
        style={{ fontWeight: 100, fontSize: "medium" }}
      >
        <div className="flex flex-wrap gap-2 mt-3 text-gray-200">
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
          >
            {tech}
          </motion.span>
        ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;