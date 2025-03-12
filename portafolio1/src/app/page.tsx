"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {


  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
       <Image 
       src="https://res.cloudinary.com/dosbg5xdd/image/upload/v1741316660/anime_zflcrc.png" 
       alt="portada"
       fill 
       className="object-contain"
       />
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-blue-950">
    {/* TITLE */}
       <h1 className="text-4xl md:text-6xl font-bold">Vive la experiencia digital. Diseña conmigo</h1>
       {/* DESC */}
       <p className="md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod inventore vero quo ea cum et, in harum magnam, saepe fugit ipsam eveniet odit nihil beatae est at aperiam minima.
       </p>
       {/* BUTTONS */}
       <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-blue-950 text-white">Ve mis trabajos</button>
        <button className="p-4 rounded-lg ring-1 ring-blue-950">Contact me</button>
       </div>
    </div>
    </div>
    </motion.div>
  );
}
