"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  heroImage: string;
  title: string;
  description: string;
}

const HeroSection = ({  description }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-20">
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierdo */}
          <motion.div
            className="w-full order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 uppercase"
              style={{ fontFamily: 'Javanese Text' }}
            >
              Proyectos
              <br />
              Hechos con
              <br />
              Paciencia y
              <br />
              Café ☕
            </h1>

            <p
              className="text-white text-lg leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: 'Open Sans', fontWeight: 100 }}
            >
              {description}
            </p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#proyectos"
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-400 transition-colors"
              >
                Explorar
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contactar
              </Link>
            </motion.div>
          </motion.div>

          {/* Imagen Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full order-1 lg:order-2"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1764436052/mitchell-luo-kXH2437dnJA-unsplash_gseq4i.jpg"
                alt="Featured project"
                fill
                className="object-cover"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;