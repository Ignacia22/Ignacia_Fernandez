"use client"

import { motion } from "framer-motion";

const PortafolioPage = () => {
    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration: 1}}
        >
            ABOUT
        </motion.div>
    )
}

export default PortafolioPage;