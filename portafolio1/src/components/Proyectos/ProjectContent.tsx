"use client"

import { motion } from "framer-motion";
import TechStack from "./TechStack";
import ProjectActions from "./ProjectActions";
import Characteristics from "./Characteristics";

interface ProjectContentProps {
  title: string;
  tagline: string;
  description: string;
  characteristics: string[];
  technologies: string[];
  demoLink: string;
  codeLink?: string;
  isEvenIndex: boolean;
}

const ProjectContent = ({
  title,
  tagline,
  description,
  characteristics,
  technologies,
  demoLink,
  codeLink,
  isEvenIndex,
}: ProjectContentProps) => {
  return (
    <motion.div
      className={`flex flex-col justify-center max-w-xl ${
        isEvenIndex ? 'lg:order-2' : 'lg:order-1'
      }`}
      initial={{ opacity: 0, x: isEvenIndex ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Nombre del Proyecto */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-5xl font-bold mb-4"
        style={{ fontFamily: 'Javanese Text' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <div className="mt-2 mb-8">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200">
          <span className="mr-2 h-2 w-2 rounded-full bg-sky-400" />
          {tagline}
        </span>
      </div>

      {/* Descripción */}
      <motion.p
        className="text-white text-base leading-relaxed mb-6 whitespace-pre-line max-w-3xl"
        style={{ fontFamily: 'Open Sans', fontWeight: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>

      {/* Caracteristicas */}
      <Characteristics characteristics={characteristics} />

      {/* Stack Tecnológico */}
      <TechStack technologies={technologies} />

      {/* Botones de Acción */}
      <ProjectActions demoLink={demoLink} codeLink={codeLink} />
    </motion.div>
  );
};

export default ProjectContent;