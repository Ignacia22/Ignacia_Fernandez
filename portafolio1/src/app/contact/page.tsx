"use client"

import { motion } from "framer-motion";
import RecaptchaScript from "@/components/RecaptchaScript";
import MessageAnimation from "@/components/MessageAnimation";
import ContactForm from "@/components/ContactForm";


const ContactPage = () => {
    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration: 1}}
        >
            <RecaptchaScript />
            
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    <MessageAnimation text="¡Hola, contactame!" />
                </div>
                
                {/* FORM CONTAINER */}
                <ContactForm />
            </div>
        </motion.div>
    );
};

export default ContactPage;