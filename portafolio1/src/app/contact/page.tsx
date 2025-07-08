"use client"

import { motion } from "framer-motion";
import RecaptchaScript from "@/components/RecaptchaScript";
import MessageAnimation from "@/components/MessageAnimation";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
    return (
        <motion.div 
            className="min-h-full" // Cambiado de h-full a min-h-full
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration: 1}}
        >
            <RecaptchaScript />
            
            <div className="min-h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-10 sm:py-12 lg:py-0"> {/* Añadido padding vertical y min-h-full */}
                {/* TEXT CONTAINER - En móvil con altura automática */}
                <div className="flex-none lg:h-full lg:w-1/2 flex items-center justify-center text-6xl pb-10 lg:pb-0"> {/* Cambiado h-1/2 a flex-none con padding bottom */}
                    <MessageAnimation text="¡Hola, contactame!" />
                </div>
                
                {/* FORM CONTAINER - Con margen superior en móvil */}
                <div className="flex-none lg:h-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0"> {/* Cambiado h-1/2 a flex-none con margen arriba */}
                    <ContactForm />
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;