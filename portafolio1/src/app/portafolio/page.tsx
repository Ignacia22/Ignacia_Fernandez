/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Sites } from "@/data/sites";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortafolioPage = () => {

    const ref = useRef<HTMLDivElement | null>(null)

    const {scrollYProgress} = useScroll({target: ref})

    const x = useTransform(scrollYProgress, [0,1], ["0%", "100%"])

    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration: 1}}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-blue-950">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center">
                {Sites.map(Site => {
                 // Determinar el color basado en el ID
                 let gradientClass = "";
                 if (Site.id === 1) gradientClass = "bg-gradient-to-r from-red-300 to-blue-300";
                 else if (Site.id === 2) gradientClass = "bg-gradient-to-r from-blue-300 to-violet-300";
                 else if (Site.id === 3) gradientClass = "bg-gradient-to-r from-violet-300 to-purple-300";
  
                 return (
                   <div 
                     className={`h-screen w-screen flex items-center justify-center ${gradientClass}`} 
                     key={Site.id}
                   >
                     {/* Resto del contenido */}
                     <div className="flex flex-col gap-8 text-white">
                       <h1>{Site.title}</h1>
                       <div className="relative w-full h-64">
                         <Image
                           src={Site.img}
                           alt=""
                           fill
                           className="object-cover"
                         />
                       </div>
                       <p>{Site.desc}</p>
                       <Link href={Site.link}><button>See demo</button></Link>
                     </div>
                   </div>
                 );
               })}
                </div>
            </div>
        </motion.div>
    )
}

export default PortafolioPage;