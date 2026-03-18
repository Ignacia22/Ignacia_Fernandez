"use client"

import { motion } from "framer-motion";

import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import ProjectContent from "./ProjectContent";

interface ProjectCardProps {
  id: number;
  title: string;
  tagline: string;
  description: string;
  characteristics: string[];
  images: string[];
  activeImageIndex: number;
  technologies: string[];
  demoLink: string;
  codeLink?: string;
  isEvenIndex: boolean;
  onPrevImage: (e: React.MouseEvent) => void;
  onNextImage: (e: React.MouseEvent) => void;
  onImageIndexChange: (index: number) => void;
}

const ProjectCard = ({
  id,
  title,
  tagline,
  description,
  images,
  activeImageIndex,
  characteristics,
  technologies,
  demoLink,
  codeLink,
  isEvenIndex,
  onPrevImage,
  onNextImage,
  onImageIndexChange,
}: ProjectCardProps) => {

  const gridCols = isEvenIndex
  ? "lg:grid-cols-[1.2fr_1fr]"
  : "lg:grid-cols-[1fr_1.2fr]";


  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-200px" }}
      className={`grid grid-cols-1 ${gridCols} gap-12 lg:gap-24 items-start py-24 relative max-w-6xl mx-auto`}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Efecto de profundidad - círculos de fondo */}
      <motion.div
        className="absolute -left-40 -top-40 w-80 h-80 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute -right-40 -bottom-40 w-80 h-80 bg-gradient-to-tl from-blue-400/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      />

      <motion.div
        className={`relative w-full lg:sticky lg:top-24 ${
          isEvenIndex ? "lg:order-1" : "lg:order-2"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
          style={{ transformPerspective: "1000px" }}
        >
          {/* Brillo frontal */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent z-20 pointer-events-none" />

          <ProjectCarousel
            images={images}
            activeIndex={activeImageIndex}
            onPrev={onPrevImage}
            onNext={onNextImage}
            onDotClick={onImageIndexChange}
            title={title}
          />
        </motion.div>
      </motion.div>

      {/* Contenido */}
      <ProjectContent
        title={title}
        tagline={tagline}
        description={description}
        characteristics={characteristics}
        technologies={technologies}
        demoLink={demoLink}
        codeLink={codeLink}
        isEvenIndex={isEvenIndex}
      />
    </motion.div>
  );
};

export default ProjectCard;