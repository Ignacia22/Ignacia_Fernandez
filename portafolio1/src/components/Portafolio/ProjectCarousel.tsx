"use client"

import { motion } from "framer-motion";
import React from "react";

interface ProjectCarouselProps {
  images: string[];
  activeIndex: number;
  onPrev: (e: React.MouseEvent) => void;
  onNext: (e: React.MouseEvent) => void;
  onDotClick: (index: number) => void;
  title: string;
}

const ProjectCarousel = ({
  images,
  activeIndex,
  onPrev,
  onNext,
  onDotClick,
  title,
}: ProjectCarouselProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[300px] md:h-[450px] bg-gray-900 overflow-hidden">
      {/* Imagen */}
      {images[activeIndex] && (
        <>
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${title} - Imagen ${activeIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </>
      )}

      {/* Indicador de Imagen */}
      <motion.div
        className="absolute bottom-4 right-4 text-white text-sm font-mono bg-black/50 px-3 py-1 rounded backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {activeIndex + 1}/{images.length}
      </motion.div>

      {/* Botones de Navegación */}
      {images.length > 1 && (
        <>
          <motion.button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Previous image"
            whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>

          <motion.button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Next image"
            whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>

          {/* Indicadores de puntos */}
          <motion.div
            className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => onDotClick(idx)}
                className={`rounded-full transition-all backdrop-blur-sm ${
                  activeIndex === idx
                    ? "bg-white w-3 h-3 shadow-lg shadow-white/50"
                    : "bg-gray-600 w-2 h-2"
                }`}
                aria-label={`Go to image ${idx + 1}`}
                whileHover={{ scale: 1.4 }}
              />
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;