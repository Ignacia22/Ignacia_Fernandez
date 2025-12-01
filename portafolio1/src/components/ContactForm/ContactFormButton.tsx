import { motion } from "framer-motion"

interface ContactFormButtonProps {
  isSubmitting: boolean
  isLimitReached: boolean
}

export const ContactFormButton = ({
  isSubmitting,
  isLimitReached
}: ContactFormButtonProps) => {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <button
        type="submit"
        disabled={isSubmitting || isLimitReached}
        className={`px-10 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
          isLimitReached
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-black text-white hover:bg-gray-900 hover:scale-105'
        } disabled:opacity-70`}
        style={{ fontFamily: 'Open Sans' }}
      >
        {isSubmitting ? 'Enviando...' : isLimitReached ? 'Límite alcanzado' : 'Enviar'}
      </button>
    </motion.div>
  )
}