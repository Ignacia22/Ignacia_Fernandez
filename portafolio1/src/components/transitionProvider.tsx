"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Navbar from "./navbar"
import { usePathname } from "next/navigation"

const TransitionProvider = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathName} className="w-screen h-screen">
                <motion.div 
                    className="h-screen w-screen fixed bg-blue-950 rounded-b-[100px] z-40" 
                    animate={{height: "0vh"}} 
                    exit={{height: "140vh"}}
                    transition={{duration: 0.5, ease:"easeOut"}}
                />

                <motion.div 
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit" 
                    initial={{opacity: 1}} 
                    animate={{opacity: 0}} 
                    exit={{opacity:0}}
                    transition={{duration: 0.8, ease:"easeOut"}}
                >
                    {pathName.substring(1)}
                </motion.div>

                <motion.div 
                    className="h-screen w-screen fixed bg-blue-950 rounded-t-[100px] bottom-0 z-40" 
                    initial={{height: "140vh"}} 
                    animate={{height: "0vh", transition:{ delay: 0.5 }}}
                />
                
                {/* IMAGEN DE FONDO */}
                <div className="absolute inset-0 -z-10">
                    <Image 
                        src="https://res.cloudinary.com/dosbg5xdd/image/upload/v1741316520/paisaje_h3eusy.jpg" 
                        alt="" 
                        fill 
                        priority 
                        className="object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-300/70 to-blue-200/70 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 h-full">
                    <div className="h-24 bg-white"><Navbar/></div>
                    <div className="h-[calc(100vh-6rem)]">{children}</div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default TransitionProvider