"use client"

import { Sites } from "@/data/sites";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortafolioPage = () => {

    const ref = useRef<HTMLDivElement | null>(null)

    const {scrollYProgress} = useScroll({target: ref})

    const x = useTransform(scrollYProgress, [0,1], ["0%", "-75%"])

    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration: 1}}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-blue-950">
                    Mis Trabajos
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                  <motion.div style={{x}} className="flex">
                    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
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
                       <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{Site.title}</h1>
                       <div className="relative w-70 h-56 md:h-60 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[330px]">
                         <Image
                           src={Site.img}
                           alt=""
                           fill
                           className="object-cover"
                         />
                       </div>
                       <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{Site.desc}</p>
                       <Link 
                       href={Site.link}
                       className="flex justify-end"
                       >
                        <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                          Ver demo
                        </button>
                        </Link>
                     </div>
                   </div>
                 );
               })}
               </motion.div>
                </div>
            </div>
               <div className="w-screen h-screen flex flex-col gap-16 items-center  justify-center text-center">
                <h1 className="text-8xl">Tienes un proyecto?</h1>
                <div className="relative">
                <motion.svg animate={{rotate: 360}} transition={{duration: 8, ease:"linear", repeat: Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="circlePath" d="M150 90 a 60,60 0 1,0 0 120 a 60,60 0 1,0 0 -120" stroke="#000000" strokeWidth="1" fill="none"/>
                  </defs>
                  <text fill="#000000">
                    <textPath xlinkHref="#circlePath" className="text-xl">
                      Front-end Developer and Web Designer
                    </textPath>
                  </text>
                </motion.svg>
                  <Link 
                  href="/contact" 
                  className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                  >CONTACTAME
                  </Link>
                </div>
               </div>
        </motion.div>
    )
}

export default PortafolioPage;