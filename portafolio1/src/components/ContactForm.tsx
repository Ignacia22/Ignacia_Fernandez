/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

import { isBotSubmission } from "@/utils/botDetection";
import { validateEmail } from "@/utils/emailValidator";


const ContactForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [honeypot, setHoneypot] = useState(""); // Campo trampa para bots
    const [submissionCount, setSubmissionCount] = useState(0);
    const [lastSubmission, setLastSubmission] = useState(0);
    const [formLoadTime, setFormLoadTime] = useState(0);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    
    const form = useRef<HTMLFormElement>(null);
    const MAX_SUBMISSIONS = 3; // Máximo de envíos permitidos por sesión
    const SUBMISSION_TIMEOUT = 86400000; // 24 horas en milisegundos

    // Inicializar datos del formulario
    useEffect(() => {
        // Definir una función global que será llamada por reCAPTCHA
        window.handleRecaptchaCallback = (token: string) => {
            setRecaptchaToken(token);
        };
        
        // Registrar el tiempo de carga del formulario
        setFormLoadTime(Date.now());
        
        // Cargar datos de limitación de localStorage
        const storedCount = localStorage.getItem('formSubmissionCount');
        const storedTime = localStorage.getItem('lastFormSubmission');
        
        if (storedCount) setSubmissionCount(parseInt(storedCount));
        if (storedTime) setLastSubmission(parseInt(storedTime));
        
        // Resetear contador si ha pasado el tiempo de timeout
        if (storedTime && Date.now() - parseInt(storedTime) > SUBMISSION_TIMEOUT) {
            localStorage.setItem('formSubmissionCount', '0');
            setSubmissionCount(0);
        }
    }, []);

    // Validar el formulario completo
    const validateForm = (): boolean => {
        let isValid = true;
        
        // Validar email
        if (!email.trim()) {
            setEmailError("El email es obligatorio");
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Por favor ingresa un email válido");
            isValid = false;
        } else {
            setEmailError("");
        }
        
        // Validar mensaje
        if (!message.trim()) {
            setMessageError("Por favor escribe un mensaje");
            isValid = false;
        } else {
            setMessageError("");
        }
        
        // Verificar límite de envíos
        if (submissionCount >= MAX_SUBMISSIONS) {
            setError(true);
            alert("Has alcanzado el límite de envíos. Por favor intenta más tarde.");
            isValid = false;
        }
        
        // Verificar si parece ser un bot
        if (isBotSubmission(honeypot, formLoadTime, recaptchaToken)) {
            // No mostrar error al usuario, simplemente bloquear silenciosamente
            console.log("Posible envío de bot detectado");
            isValid = false;
        }
        
        return isValid;
    };

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        
        // Ejecutar reCAPTCHA manualmente
        try {
            // @ts-ignore
            grecaptcha.execute();
        } catch (err) {
            console.error("Error executing reCAPTCHA", err);
        }
        
        // Validar el formulario
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);

        const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? '';

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error('Faltan las credenciales de EmailJS');
            setError(true);
            setIsSubmitting(false);
            return;
        }

        // Actualizar contador de envíos
        const newCount = submissionCount + 1;
        setSubmissionCount(newCount);
        localStorage.setItem('formSubmissionCount', newCount.toString());
        localStorage.setItem('lastFormSubmission', Date.now().toString());

        if (form.current) {
            try {
                const result = await emailjs.sendForm(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    form.current,
                    PUBLIC_KEY
                );
                
                setSuccess(true);
                form.current?.reset();
                setEmail("");
                setMessage("");
                setHoneypot("");
                setFormLoadTime(Date.now()); // Resetear tiempo para futuros envíos
            } catch (error) {
                console.error('Error enviando email:', error);
                setError(true);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <form 
            onSubmit={sendEmail}
            ref={form} 
            className="w-full lg:w-1/2 bg-red-50 rounded-xl text-base sm:text-lg md:text-xl flex flex-col gap-4 justify-center p-6 sm:p-8 md:p-12 lg:p-16 m-4 sm:m-6 md:m-8 relative shadow-md"
        >
            {/* Campo oculto para reCAPTCHA */}
            <div id="recaptcha-container" className="hidden"></div>
            
            {/* Campo honeypot (trampa para bots) - estilizado para ser invisible para humanos */}
            <div className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10 overflow-hidden">
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            
            <span className="text-center sm:text-left">Estimada Igna Design <span className="text-xl sm:text-2xl">😊</span></span>
            
            <div className="flex flex-col">
                <textarea 
                    className={`bg-transparent border-b-2 ${messageError ? 'border-b-red-500' : 'border-b-black'} outline-none resize-none p-2 mb-1`}
                    name="user_message"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        if (e.target.value.trim()) setMessageError("");
                    }}
                    placeholder="Escribe tu mensaje aquí... *"
                    required
                    aria-required="true"
                    // En lugar de fijar rows, usamos altura mínima que se adapta
                    style={{ minHeight: "80px", height: "15vh", maxHeight: "25vh" }}
                />
                {messageError && (
                    <span className="text-red-500 text-sm mt-1">{messageError}</span>
                )}
            </div>
            
            <span className="mt-2 sm:mt-4">Mi mail es:</span>
            
            <div className="flex flex-col">
                <input 
                    name="user_email"
                    type="email"  // Cambio a type="email" para validación básica HTML
                    className={`bg-transparent border-b-2 ${emailError ? 'border-b-red-500' : 'border-b-black'} outline-none p-2`}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (validateEmail(e.target.value)) setEmailError("");
                    }}
                    placeholder="tu@email.com *"
                    required
                    aria-required="true"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  // Patrón HTML para validación
                />
                {emailError && (
                    <span className="text-red-500 text-sm mt-1">{emailError}</span>
                )}
            </div>
            
            {/* Campo oculto para almacenar token de reCAPTCHA */}
            <input
                type="hidden"
                name="g-recaptcha-response"
                value={recaptchaToken}
            />
            
            <span className="mt-2 sm:mt-4">Saludos</span>
            
            <div className="flex flex-col items-center w-full mt-2 sm:mt-4">
                <button 
                    type="submit" 
                    className={`w-full sm:w-2/3 bg-purple-200 rounded font-semibold text-gray-600 p-3 sm:p-4 transition-all ${isSubmitting || submissionCount >= MAX_SUBMISSIONS ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-300'}`}
                    disabled={isSubmitting || submissionCount >= MAX_SUBMISSIONS}
                >
                    {isSubmitting ? 'Enviando...' : submissionCount >= MAX_SUBMISSIONS ? 'Límite alcanzado' : 'Enviar'}
                </button>
                
                {submissionCount > 0 && submissionCount < MAX_SUBMISSIONS && (
                    <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">
                        Has enviado {submissionCount} de {MAX_SUBMISSIONS} mensajes permitidos.
                    </p>
                )}
                
                <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">* Campos obligatorios</p>
            </div>
            
            {success && (
                <motion.div 
                    className="fixed bottom-4 left-4 right-4 mx-auto w-[90%] max-w-md bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center shadow-md z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-semibold">¡Tu mensaje ha sido enviado!</span>
                    <p className="text-sm">Me pondré en contacto contigo pronto.</p>
                </motion.div>
            )}
            
            {error && (
                <motion.div 
                    className="fixed bottom-4 left-4 right-4 mx-auto w-[90%] max-w-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center shadow-md z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-semibold">Algo salió mal 😞</span>
                    <p className="text-sm">Por favor intenta nuevamente más tarde o contáctame directamente.</p>
                </motion.div>
            )}
        </form>
    );
};

export default ContactForm;