"use client"

import { HeroAbout } from "@/components/About/HeroAbout"
import { StudiesSection } from "@/components/About/StudiesSection"
import { motion } from "framer-motion"


export default function AboutPage() {
  return (
    <motion.div 
      className="min-h-screen bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroAbout />
      <StudiesSection />
    </motion.div>
  )
}