"use client"

import { motion } from "framer-motion";

interface MessageAnimationProps {
    text: string;
}

const MessageAnimation = ({ text }: MessageAnimationProps) => {
    return (
        <div className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-gray-700"> {/* Añadido z-10 y tamaños de texto responsivos */}
            {text.split("").map((letter, index) => (
                <motion.span 
                    key={index} 
                    initial={{opacity: 1}} 
                    animate={{opacity: 0}} 
                    transition={{duration: 3, repeat: Infinity, delay: index * 0.1}}
                >
                    {letter}
                </motion.span>
            ))}
            <span className="absolute -right-14 text-4xl sm:text-5xl md:text-6xl">😋</span>
        </div>
    );
};

export default MessageAnimation;