"use client"

import { motion } from "framer-motion";
import { useRef } from "react";

const PortafolioPage = () => {

    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration: 1}}
        >
            <div className="h-[600vh]" ref={ref}></div>
        </motion.div>
    )
}

export default PortafolioPage;