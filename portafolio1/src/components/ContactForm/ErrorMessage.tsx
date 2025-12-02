import { motion } from "framer-motion"

interface ErrorMessageProps {
  isLimitReached: boolean
  error: string | null 
}

export const ErrorMessage = ({ isLimitReached, error }: ErrorMessageProps) => {
  if (!error && !isLimitReached) return null

  return (
    <motion.div
      className="
        fixed bottom-8 left-1/2 -translate-x-1/2 
        max-w-md w-[90%] 
        bg-black/85 backdrop-blur-md 
        border border-red-600/40 
        rounded-xl p-5 
        shadow-[0_0_20px_rgba(255,0,0,0.25)]
        z-50
      "
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <p 
        className="text-red-300 font-semibold text-center text-lg"
        style={{ fontFamily: "Open Sans" }}
      >
        ❌ {isLimitReached ? "Límite de mensajes alcanzado" : "Ocurrió un error"}
      </p>

      <p 
        className="text-red-400 text-sm text-center mt-2 leading-relaxed"
        style={{ fontFamily: "Open Sans" }}
      >
        {isLimitReached
          ? "Puedes volver a enviar mensajes en 24 horas."
          : error || "Por favor intenta nuevamente o contáctame por LinkedIn."}
      </p>
    </motion.div>
  )
}
