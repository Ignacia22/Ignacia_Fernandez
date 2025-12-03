"use client"

import { motion } from "framer-motion";

interface ProjectActionsProps {
  demoLink: string;
  codeLink?: string;
}

const ProjectActions = ({ demoLink, codeLink }: ProjectActionsProps) => {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
        style={{ fontFamily: 'Open Sans' }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        Ver Demo
      </motion.a>

      {codeLink && (
        <motion.a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
          style={{ fontFamily: 'Open Sans' }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          CÓDIGO
        </motion.a>
      )}
    </motion.div>
  );
};

export default ProjectActions;