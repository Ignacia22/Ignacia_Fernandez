"use client"

import { motion } from "framer-motion";

interface MessageAnimationProps {
    text: string;
}

const MessageAnimation = ({ text }: MessageAnimationProps) => {
    return (
        <div className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-gray-700 mt-8 sm:mt-12 md:mt-16 lg:mt-20 pt-4 sm:pt-6 md:pt-8 inline-block"> 
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
            <span className="ml-2 sm:ml-3 md:ml-4 text-4xl sm:text-5xl md:text-6xl">😋</span>
        </div>
    );
};

export default MessageAnimation;