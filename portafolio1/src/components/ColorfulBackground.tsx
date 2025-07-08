"use client"

import { motion } from "framer-motion";

const ColorfulBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Burbujas decorativas con gradientes */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 -right-20 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute -bottom-8 left-20 w-36 h-36 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        animate={{
          y: [0, -20, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 2
        }}
      />
      
      {/* Overlay sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-purple-50/30"></div>
    </div>
  );
};

export default ColorfulBackground;