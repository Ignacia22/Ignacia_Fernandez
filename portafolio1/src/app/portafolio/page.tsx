"use client"

import { Sites } from "@/data/sites";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "@/components/Portafolio/HeroSection";
import ProjectCard from "@/components/Portafolio/ProjectCard";

interface ActiveImagesType {
  [key: number]: number;
}

const PortafolioPage = () => {
  const [activeImages, setActiveImages] = useState<ActiveImagesType>({});

  useEffect(() => {
    const initialState = Sites.reduce<ActiveImagesType>((acc, site) => {
      acc[site.id] = 0;
      return acc;
    }, {});
    setActiveImages(initialState);
  }, []);

  const nextImage = (siteId: number, e?: React.MouseEvent): void => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    const site = Sites.find((s) => s.id === siteId);
    if (!site?.carouselImages?.length || site.carouselImages.length <= 1) return;

    const currentIndex = activeImages[siteId] || 0;
    const newIndex =
      currentIndex >= site.carouselImages.length - 1 ? 0 : currentIndex + 1;

    setActiveImages((prevState) => ({
      ...prevState,
      [siteId]: newIndex,
    }));
  };

  const prevImage = (siteId: number, e?: React.MouseEvent): void => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    const site = Sites.find((s) => s.id === siteId);
    if (!site?.carouselImages?.length || site.carouselImages.length <= 1)
      return;

    const currentIndex = activeImages[siteId] || 0;
    const newIndex =
      currentIndex <= 0 ? site.carouselImages.length - 1 : currentIndex - 1;

    setActiveImages((prevState) => ({
      ...prevState,
      [siteId]: newIndex,
    }));
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <HeroSection
        heroImage={Sites[0]?.carouselImages?.[0] || ""}
        title="Proyectos
        Hechos con
        Paciencia y 
        Café ☕"
        description="Este es mi camino en código: cosas que me salieron bien, cosas que aprendí arreglando, y cosas que hice porque me dieron ganas. Si decides entrar, no digo que no te sorprendas… pero aviso que todo fue hecho con cariño y mucha curiosidad."
      />

      {/* Projects Section */}
      <section
        id="proyectos"
        className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 py-20 space-y-40 perspective"
      >
        {Sites.map((site, index) => {
          const technologies = site.technologies;
          const activeIndex = activeImages[site.id] || 0;
          const isEvenIndex = index % 2 === 0;

          return (
            <ProjectCard
              key={site.id}
              id={site.id}
              title={site.title}
              description={site.desc}
              images={site.carouselImages}
              activeImageIndex={activeIndex}
              technologies={technologies}
              demoLink={site.link}
              codeLink={site.github || undefined}
              isEvenIndex={isEvenIndex}
              onPrevImage={(e) => prevImage(site.id, e)}
              onNextImage={(e) => nextImage(site.id, e)}
              onImageIndexChange={(idx) => {
                setActiveImages((prev) => ({
                  ...prev,
                  [site.id]: idx,
                }));
              }}
            />
          );
        })}
      </section>
    </motion.div>
  );
};

export default PortafolioPage;