"use client"

import { motion } from "framer-motion";

import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import ProjectContent from "./ProjectContent";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
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
  description,
  images,
  activeImageIndex,
  technologies,
  demoLink,
  codeLink,
  isEvenIndex,
  onPrevImage,
  onNextImage,
  onImageIndexChange,
}: ProjectCardProps) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-200px" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 relative"
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

      {/* Imagen con efecto parallax */}
      <motion.div
        className={`relative rounded-2xl overflow-hidden shadow-2xl group ${
          isEvenIndex ? "lg:order-1" : "lg:order-2"
        }`}
        whileHover={{ y: -15, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        style={{
          rotateX: 0,
          transformPerspective: "1000px",
        }}
      >
        {/* Brillo frontal */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent z-20 pointer-events-none rounded-2xl" />

        <ProjectCarousel
          images={images}
          activeIndex={activeImageIndex}
          onPrev={onPrevImage}
          onNext={onNextImage}
          onDotClick={onImageIndexChange}
          title={title}
        />
      </motion.div>

      {/* Contenido */}
      <ProjectContent
        title={title}
        description={description}
        technologies={technologies}
        demoLink={demoLink}
        codeLink={codeLink}
        isEvenIndex={isEvenIndex}
      />
    </motion.div>
  );
};

export default ProjectCard;