import { motion } from "framer-motion"

interface ContactFormHeaderProps {
  submissionCount: number
  MAX_SUBMISSIONS: number
  isLimitReached: boolean
}

export const ContactFormHeader = ({
  submissionCount,
  MAX_SUBMISSIONS,
  isLimitReached
}: ContactFormHeaderProps) => {
  return (
    <>
      {/* INTRO TEXT */}
      <motion.div
        className="mb-8 text-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p
          className="text-sm sm:text-lg text-black leading-relaxed uppercase font-medium"
          style={{ fontFamily: 'Open Sans' }}
        >
          ¡Qué emoción que quieras escribirme! 😊 <br/>Déjame tu nombre, tu correo y cuéntame en qué estás pensando. Te respondo apenas pueda.
        </p>
      </motion.div>

      {/* SUBMISSION COUNTER */}
      {submissionCount > 0 && (
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className={`text-xs font-semibold ${
              isLimitReached ? 'text-red-600' : 'text-gray-600'
            }`}
            style={{ fontFamily: 'Open Sans' }}
          >
            {submissionCount} de {MAX_SUBMISSIONS} mensajes enviados
            {isLimitReached && ' (Límite alcanzado)'}
          </p>
        </motion.div>
      )}
    </>
  )
}