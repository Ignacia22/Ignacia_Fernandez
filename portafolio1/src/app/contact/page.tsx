/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const ContactPage = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const text = "¡Hola, contactame!";


    const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? '';

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('Faltan las credenciales de EmailJS');
        return;
    }

    if (form.current) {
        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form.current,
          PUBLIC_KEY
        )
          .then((result) => {
            setSuccess(true)
            form.current?.reset()
          })
          .catch((error) => {
            setError(true)
          });
      }
}


    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration: 1}}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                  <div>
                    {text.split("").map((letter, index) => (
                        <motion.span 
                        key={index} 
                        initial={{opacity: 1}} 
                        animate={{opacity: 0}} 
                        transition={{duration: 3, repeat: Infinity, delay: index * 0.1}}
                        >{letter}
                        </motion.span>
                    ))}
                    😋
                  </div>
                </div>
                {/* FORM CONTAINER */}
                <form 
                onSubmit={sendEmail}
                ref={form} 
                className="h-1/2 lg:h-[90%] lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 m-8"
                >
                <span>Estimada Igna Design 😊</span>
                <textarea 
                rows={6} 
                className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                name="user_message"
                />
                <span>Mi mail es:</span>
                <input 
                name="user_email"
                type="text" 
                className="bg-transparent border-b-2 border-b-black outline-none"
                />
                <span>Saludos</span>
                <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Enviar</button>
                {success && <span className="text-green-600 font-semibold">Tu mensaje a sido enviado!!</span>}
                {error && <span className="text-red-600 font-semibold">Algo paso 😞</span>}
                </form>
            </div>
        </motion.div>
    )
}

export default ContactPage;