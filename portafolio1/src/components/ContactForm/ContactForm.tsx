/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { FormEvent, useRef, useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
import Link from "next/link"
import { isBotSubmission } from "@/utils/botDetection"
import { ContactFormHeader } from "./ContactFormHeader"
import { ContactFormFields } from "./ContactFormFields"
import { ContactFormButton } from "./ContactFormButton"
import { SuccessMessage } from "./SuccessMessage"
import { ErrorMessage } from "./ErrorMessage"

interface FormData {
  user_name: string
  user_email: string
  user_message: string
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    user_message: ""
  })
  
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Partial<FormData>>({})
  const [honeypot, setHoneypot] = useState("")
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const [submissionCount, setSubmissionCount] = useState(0)
  const [formLoadTime, setFormLoadTime] = useState(0)
  
  const form = useRef<HTMLFormElement>(null)
  const MAX_SUBMISSIONS = 100
  const SUBMISSION_TIMEOUT = 86400000 // 24 horas

  useEffect(() => {
    (window as any).handleRecaptchaCallback = (token: string) => {
      setRecaptchaToken(token)
    }

    setFormLoadTime(Date.now())

    const storedCount = localStorage.getItem('formSubmissionCount')
    const storedTime = localStorage.getItem('lastFormSubmission')

    if (storedCount) setSubmissionCount(parseInt(storedCount))

    if (storedTime && Date.now() - parseInt(storedTime) > SUBMISSION_TIMEOUT) {
      localStorage.setItem('formSubmissionCount', '0')
      setSubmissionCount(0)
    }
  }, [])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {}

    if (!formData.user_name.trim()) {
      errors.user_name = "El nombre es obligatorio"
    }

    if (!formData.user_email.trim()) {
      errors.user_email = "El email es obligatorio"
    } else if (!validateEmail(formData.user_email)) {
      errors.user_email = "Por favor ingresa un email válido"
    }

    if (!formData.user_message.trim()) {
      errors.user_message = "Por favor escribe un mensaje"
    }

    if (submissionCount >= MAX_SUBMISSIONS) {
      setError(null)
      return false
    }

    if (isBotSubmission(honeypot, formLoadTime, recaptchaToken)) {
      console.log("Posible envío de bot detectado")
      setError(null)
      return false
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (fieldErrors[name as keyof FormData]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    try {
      (window as any).grecaptcha.execute()
    } catch (err) {
      console.error("Error executing reCAPTCHA", err)
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID ?? ''
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? ''
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Faltan las credenciales de EmailJS')
      setError(null)
      setIsSubmitting(false)
      return
    }

    const newCount = submissionCount + 1
    setSubmissionCount(newCount)
    localStorage.setItem('formSubmissionCount', newCount.toString())
    localStorage.setItem('lastFormSubmission', Date.now().toString())

    if (form.current) {
      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form.current,
          PUBLIC_KEY
        )

        setSuccess(true)
        setFormData({ user_name: "", user_email: "", user_message: "" })
        form.current.reset()
        setHoneypot("")
        setRecaptchaToken("")
        setFormLoadTime(Date.now())

        setTimeout(() => setSuccess(false), 5000)
      } catch (error) {
        console.error('Error enviando email:', error)
        setError(null)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const isLimitReached = submissionCount >= MAX_SUBMISSIONS

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-16 lg:py-24 flex flex-col items-center justify-center gap-12">

      {/* SECTION TITLE */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          style={{ fontFamily: 'Javanese Text' }}
        >
          Hablemos <span className="text-yellow-400">✨</span>
        </h1>
        <p
          className="text-gray-400 text-sm sm:text-base max-w-xl text-center mx-auto mt-2"
          style={{ fontFamily: 'Open Sans' }}
        >
          Prometo responder más rápido que cuando el deploy falla. Escríbeme y vemos qué podemos crear junt@s.
        </p>
      </motion.div>

      {/* FORM CONTAINER */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full bg-white text-black rounded-2xl p-8 sm:p-10 md:p-12 lg:p-24 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >

        {/* HONEYPOT FIELD - Hidden */}
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

        {/* RECAPTCHA CONTAINER - Hidden */}
        <div id="recaptcha-container" className="hidden"></div>

        {/* HEADER */}
        <ContactFormHeader 
          submissionCount={submissionCount} 
          MAX_SUBMISSIONS={MAX_SUBMISSIONS} 
          isLimitReached={isLimitReached} 
        />

        {/* FIELDS */}
        <ContactFormFields
          formData={formData}
          fieldErrors={fieldErrors}
          handleChange={handleChange}
          isLimitReached={isLimitReached}
          isSubmitting={isSubmitting}
        />

        {/* HIDDEN RECAPTCHA TOKEN */}
        <input
          type="hidden"
          name="g-recaptcha-response"
          value={recaptchaToken}
        />

        {/* SUBMIT BUTTON */}
        <ContactFormButton
          isSubmitting={isSubmitting}
          isLimitReached={isLimitReached}
        />
      </motion.form>

      {/* SUCCESS MESSAGE */}
      {success && <SuccessMessage />}

      {/* ERROR MESSAGE */}
      {error && <ErrorMessage isLimitReached={isLimitReached} error={error} />}

      {/* BACK TO HOME LINK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link href="/">
          <p className="text-gray-500 hover:text-gray-300 transition-colors text-sm" style={{ fontFamily: 'Open Sans' }}>
            ← Volver al inicio
          </p>
        </Link>
      </motion.div>
    </div>
  )
}

export default ContactForm