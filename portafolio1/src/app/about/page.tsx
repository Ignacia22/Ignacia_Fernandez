"use client"

import Cartoon from "@/components/cartoon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
    const skillRef = useRef<HTMLDivElement | null>(null)
    const isSkillRefInView = useInView(skillRef, {margin:"-100px"})

    const experienceRef = useRef<HTMLDivElement | null>(null)
    const isExperienceRefInView = useInView(experienceRef, {margin:"-100px"})

    return (
        <motion.div 
        className="min-h-screen" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration: 1}}
        >
           {/* CONTAINER */}
           <div className="min-h-screen lg:flex">
            {/* TEXT CONTAINER */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2 text-blue-950">
                {/* Bio CONTAINER */}
                <div className="flex flex-col gap-12 justify-center">
                    {/* TITLE */}
                    <h1 className="font-bold text-3xl">BIOGRAFIA</h1>
                    {/* DESCRIPTION */}
                    <p className="text-lg">
                       Soy una desarrolladora Frontend Junior y diseñadora web que transforma ideas en experiencias digitales cautivadoras. Mi enfoque combina código limpio con principios de diseño centrado en el usuario, creando interfaces que no solo se ven increíbles sino que también funcionan de manera intuitiva. A través de mi trabajo, busco el equilibrio perfecto entre estética y funcionalidad, utilizando las últimas tecnologías web para dar vida a proyectos únicos que destacan en el mundo digital.
                    </p>
                    {/* QUOTE */}
                    <span className="italic">
                        Transformando visiones en experiencias web memorables, una línea de código a la vez.
                    </span>
                    <div className="">
                    <motion.svg 
                    initial={{opacity: 0.2, y: 0}}
                    animate={{opacity: 1, y: "10px"}}
                    transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect 
                    x="2" 
                    y="2" 
                    width="20" 
                    height="20" 
                    stroke="#000000" 
                    strokeWidth="1" 
                    fill="none" 
                    rx="2"
                    />
                    <path 
                    d="M12 6L12 15M12 15L10 13M12 15L14 13" 
                    stroke="#000000" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    />
                    </motion.svg>
                    </div>
                </div>

                {/* SKILLS CONTAINER*/}
                <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                    {/*SKILL TITLE */}
                    <motion.h1 
                    initial={{x:"-300px"}} 
                    animate={isSkillRefInView ? {x:0} : {}} 
                    transition={{delay: 0.2}} 
                    className="font-bold text-3xl"
                    >SKILLS
                    </motion.h1>
                    {/* SKILL LIST */}
                    <motion.div 
                    initial={{x:"-300px"}} 
                    animate={isSkillRefInView ? {x:0} : {}} 
                    className="flex gap-4 flex-wrap"
                    >
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Javascript</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">TypeScript</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Next.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">React.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">HTML</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Angular</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Node.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">PostgresSQL</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">MongoDB</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Tailwind</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Bootstrap</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Wordpress</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Elementor</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-blue-950 text-white hover:bg-slate-200 hover:text-black">Figma</div>
                    </motion.div>

                    {/* SKILL SCROLL SVG */}
                    <motion.svg 
                    initial={{opacity: 0.2, y: 0}}
                    animate={{opacity: 1, y: "10px"}}
                    transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect 
                    x="2" 
                    y="2" 
                    width="20" 
                    height="20" 
                    stroke="#000000" 
                    strokeWidth="1" 
                    fill="none" 
                    rx="2"
                    />
                    <path 
                    d="M12 6L12 15M12 15L10 13M12 15L14 13" 
                    stroke="#000000" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    />
                    </motion.svg>
                </div>

                {/* EXPERIENCE CONTAINER */}
                <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                    {/*EXPERIENCE TITLE */}
                    <motion.h1 
                    initial={{x:"-300px"}} 
                    animate={isExperienceRefInView ? {x:"0"} : {}} 
                    transition={{delay:0.2}} 
                    className="font-bold text-3xl"
                    >ESTUDIOS
                    </motion.h1>
                    {/* EXPERIENCE LIST */}
                    <motion.div 
                    initial={{x:"-300px"}} 
                    animate={isExperienceRefInView ? {x:"0"} : {}} 
                    className=""
                    >
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48">
                            {/* LEFT */}
                            <div className="w-1/3">
                                {/* TITLE */}
                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                    Técnico en Nivel Superior en Diseño Web
                                </div>
                                {/* DESCRIPTION */}
                                <div className="p-3 text-sm italic">Especialización en diseño UX/UI y desarrollo de interfaces web atractivas y funcionales orientadas al usuario.</div>
                                {/* DATE */}
                                <div className="p-3 text-red-500 text-sm font-semibold">mar. 2020 - jun. 2022</div>
                                {/* INSTITUTION */}
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">INACAP (Centro de Formación Técnica de Chile)</div>
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/* CIRCLE */}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3"></div>
                        </div>

                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48">
                            {/* LEFT */}
                            <div className="w-1/3"></div>
                            {/* CENTER */}
                            <div className="w-1/6">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/* CIRCLE */}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3">
                              {/* TITLE */}
                              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                    Desarrolladora Frontend Junior
                                </div>
                                {/* DESCRIPTION */}
                                <div className="p-3 text-sm italic">Formación intensiva en React JS, Next JS, JavaScript y desarrollo de sitios web interactivas y responsivas.</div>
                                {/* DATE */}
                                <div className="p-3 text-red-500 text-sm font-semibold">oct. 2024 - feb. 2025</div>
                                {/* INSTITUTION */}
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Henry Bootcamp</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* IMAGE CONTAINER - STICKY CORREGIDO */}
            <div className="hidden lg:block lg:w-1/3 xl:w-1/2">
                <div className="sticky top-24 h-screen flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                        <Cartoon/>
                    </div>
                </div>
            </div>
           </div>
        </motion.div>
    )
}

export default AboutPage;