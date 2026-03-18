"use client"

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative isolate">
      {/* CARROUSEL */}
      <motion.div
        className="relative w-full aspect-[4/3] md:aspect-[5/3] lg:aspect-[16/9] bg-gray-900 overflow-hidden border border-white/10 rounded-xl group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {images[activeIndex] && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 w-full h-full cursor-zoom-in"
            aria-label="Abrir imagen en pantalla completa"
          >
            {/* Fondo blur */}
            <motion.div
              key={`blur-${activeIndex}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={images[activeIndex]}
                alt=""
                fill
                className="object-cover blur-xl opacity-40 scale-110"
                sizes="100vw"
              />
            </motion.div>

            {/* Imagen principal */}
            <motion.div
              key={`main-${activeIndex}`}
              className="relative z-10 w-full h-full"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={images[activeIndex]}
                alt={`${title} - Imagen ${activeIndex + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>

            {/* Gradiente inferior para dots */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-20" />
          </button>
        )}

        {/* Indicador */}
        <div className="absolute bottom-4 right-4 z-30 text-white text-sm font-mono bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
          {activeIndex + 1}/{images.length}
        </div>

        {/* Flechas */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full flex items-center justify-center
                         bg-black/55 border border-white/15 backdrop-blur-md text-white
                         opacity-0 group-hover:opacity-100 transition-opacity
                         shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
              aria-label="Imagen anterior"
            >
              <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">←</span>
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full flex items-center justify-center
                         bg-black/55 border border-white/15 backdrop-blur-md text-white
                         opacity-0 group-hover:opacity-100 transition-opacity
                         shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
              aria-label="Imagen siguiente"
            >
              <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">→</span>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
              <div className="flex gap-3 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onDotClick(idx)}
                    className={`rounded-full transition-all ${
                      activeIndex === idx ? "bg-sky-400 w-3 h-3" : "bg-gray-500 w-2 h-2"
                    }`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </motion.div>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      className="absolute inset-0 z-50 rounded-xl bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsOpen(false)}
    >
      {/* Contenedor del overlay: MISMO tamaño del carrusel */}
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <Image
          src={images[activeIndex]}
          alt={`${title} - Imagen ${activeIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />

        {/* Cerrar */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-[80] w-10 h-10 rounded-full
                     bg-black/60 border border-white/20 backdrop-blur-md
                     text-white text-xl flex items-center justify-center"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Flechas */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[80]
                         w-10 h-10 rounded-full flex items-center justify-center
                         bg-black/55 border border-white/15 backdrop-blur-md text-white"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[80]
                         w-10 h-10 rounded-full flex items-center justify-center
                         bg-black/55 border border-white/15 backdrop-blur-md text-white"
              aria-label="Siguiente"
            >
              →
            </button>
          </>
        )}

        {/* Indicador */}
        <div className="absolute bottom-4 right-4 z-[80] text-white text-sm font-mono
                        bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
          {activeIndex + 1}/{images.length}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default ProjectCarousel;