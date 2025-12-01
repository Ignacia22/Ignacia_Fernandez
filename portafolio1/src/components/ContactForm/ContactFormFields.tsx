import { motion } from "framer-motion"

interface FormData {
  user_name: string
  user_email: string
  user_message: string
}

interface ContactFormFieldsProps {
  formData: FormData
  fieldErrors: Partial<FormData>
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  isLimitReached: boolean
  isSubmitting: boolean
}

export const ContactFormFields = ({
  formData,
  fieldErrors,
  handleChange,
  isLimitReached,
  isSubmitting
}: ContactFormFieldsProps) => {
  return (
    <>
      {/* NAME FIELD */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <label
          className="block text-sm font-black text-black mb-3 focus:ring-2 focus:ring-white/30"
          style={{ fontFamily: 'Open Sans' }}
        >
          Nombre:
        </label>
        <input
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
        placeholder="Tu nombre"
        disabled={isLimitReached || isSubmitting}
        className={`w-full px-5 py-3 rounded-lg border transition-colors outline-none 
          text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed
          ${
            fieldErrors.user_name
              ? 'border-red-500 focus:border-red-600'
              : 'border-gray-300 focus:border-gray-500'
          }`}
        style={{ fontFamily: 'Open Sans' }}
      />

        {fieldErrors.user_name && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors.user_name}</p>
        )}
      </motion.div>

      {/* EMAIL FIELD */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <label
          className="block text-sm font-semibold text-black mb-3"
          style={{ fontFamily: 'Open Sans' }}
        >
          ¿Dónde te escribo? *
        </label>
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="tu@email.com"
          disabled={isLimitReached || isSubmitting}
          className={`w-full px-5 py-3 rounded-lg border transition-colors outline-none 
          text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed ${
            fieldErrors.user_email
              ? 'border-red-500 focus:border-red-600'
              : 'border-gray-300 focus:border-gray-500'
          }`}
          style={{ fontFamily: 'Open Sans' }}
        />
        {fieldErrors.user_email && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors.user_email}</p>
        )}
      </motion.div>

      {/* MESSAGE FIELD */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <label
          className="block text-sm font-semibold text-black mb-3"
          style={{ fontFamily: 'Open Sans' }}
        >
          Tu mensaje *
        </label>
        <textarea
          name="user_message"
          value={formData.user_message}
          onChange={handleChange}
          placeholder="Cuéntame qué tienes en mente..."
          rows={6}
          disabled={isLimitReached || isSubmitting}
          className={`w-full px-5 py-3 rounded-lg border transition-colors outline-none 
          text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed ${
            fieldErrors.user_message
              ? 'border-red-500 focus:border-red-600'
              : 'border-gray-300 focus:border-gray-500'
          }`}
          style={{ fontFamily: 'Open Sans' }}
        />
        {fieldErrors.user_message && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors.user_message}</p>
        )}
      </motion.div>
    </>
  )
}