import { motion } from "framer-motion"

export const SuccessMessage = () => {
  return (
    <motion.div
      className="
        fixed bottom-8 left-1/2 -translate-x-1/2 
        max-w-md w-[90%] 
        bg-white 
        border border-black/20 
        rounded-xl p-5 
        shadow-[0_0_25px_rgba(0,0,0,0.15)]
        z-50
      "
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <p 
        className="text-black font-semibold text-center text-lg"
        style={{ fontFamily: "Open Sans" }}
      >
        ✨ ¡Mensaje enviado!
      </p>

      <p 
        className="text-gray-700 text-sm text-center mt-2 leading-relaxed"
        style={{ fontFamily: "Open Sans" }}
      >
        Gracias por escribirme. Te responderé muy pronto.
      </p>
    </motion.div>
  )
}
