"use client"

import { motion } from "framer-motion";
import TechStack from "./TechStack";
import ProjectActions from "./ProjectActions";

interface ProjectContentProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink?: string;
  isEvenIndex: boolean;
}

const ProjectContent = ({
  title,
  description,
  technologies,
  demoLink,
  codeLink,
  isEvenIndex,
}: ProjectContentProps) => {
  return (
    <motion.div
      className={`flex flex-col justify-center ${
        isEvenIndex ? 'lg:order-2' : 'lg:order-1'
      }`}
      initial={{ opacity: 0, x: isEvenIndex ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Nombre del Proyecto */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-6"
        style={{ fontFamily: 'Javanese Text' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {/* Descripción */}
      <motion.p
        className="text-white text-lg leading-relaxed mb-8"
        style={{ fontFamily: 'Open Sans', fontWeight: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>

      {/* Stack Tecnológico */}
      <TechStack technologies={technologies} />

      {/* Botones de Acción */}
      <ProjectActions demoLink={demoLink} codeLink={codeLink} />
    </motion.div>
  );
};

export default ProjectContent;