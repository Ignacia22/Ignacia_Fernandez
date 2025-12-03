"use client"

import { motion } from "framer-motion";
import Image from "next/image";
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
    <div className="relative w-full aspect-[4/3] md:aspect-[5/3] lg:aspect-[16/9] bg-gray-900 overflow-hidden border border-white/10 rounded-xl">
      {/* Imagen */}
      {images[activeIndex] && (
        <div className="absolute inset-0 w-full h-full">

          {/* Fondo blur */}
          <motion.div
            key={`blur-${activeIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={images[activeIndex]}
              alt=""
              fill
              className="object-cover blur-xl opacity-40 scale-110"
              sizes="100vw"
            />
          </motion.div>

          {/* Imagen principal sin recortes */}
          <motion.div
            key={`main-${activeIndex}`}
            className="relative z-10 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[activeIndex]}
                alt={`${title} - Imagen ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>

        </div>
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
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            bg-white/10 
            hover:bg-white/20
            text-white 
            w-10 h-10 
            rounded-full 
            flex items-center justify-center
            backdrop-blur-sm 
            transition-all 
            z-10
          "
          aria-label="Previous image"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>


          <motion.button
            onClick={onNext}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              bg-white/10 
              hover:bg-white/20
              text-white 
              w-10 h-10 
              rounded-full 
              flex items-center justify-center
              backdrop-blur-sm 
              transition-all 
              z-10
            "
            aria-label="Next image"
            whileHover={{ scale: 1.1 }}
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