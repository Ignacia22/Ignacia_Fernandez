"use client"

import { motion } from "framer-motion";

interface TechStackProps {
  technologies: string[];
}

const TechStack = ({ technologies }: TechStackProps) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <p
        className="text-white font-regular mb-4 text-lg uppercase"
        style={{ fontFamily: 'Javanese Text' }}
      >
        Stack Tecnológico
      </p>

      <div
        className="flex flex-wrap gap-1 text-gray-300"
        style={{ fontWeight: 100, fontSize: "medium" }}
      >
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.02 }}
            viewport={{ once: true }}
          >
            {tech}
            {index < technologies.length - 1 && <span className="mx-2">•</span>}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;