import { motion } from "framer-motion"

interface ErrorMessageProps {
  isLimitReached: boolean
}

export const ErrorMessage = ({ isLimitReached }: ErrorMessageProps) => {
  return (
    <motion.div
      className="fixed bottom-8 left-4 right-4 max-w-md mx-auto bg-red-50 border-2 border-red-400 rounded-lg p-4 shadow-lg z-50"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <p className="text-red-700 font-semibold text-center" style={{ fontFamily: 'Open Sans' }}>
        ❌ {isLimitReached ? 'Límite de mensajes alcanzado' : 'Algo salió mal'}
      </p>
      <p className="text-red-600 text-sm text-center mt-1" style={{ fontFamily: 'Open Sans' }}>
        {isLimitReached
          ? 'Vuelve en 24 horas para enviar más mensajes.'
          : 'Por favor intenta nuevamente o contáctame en redes.'}
      </p>
    </motion.div>
  )
}