import { motion } from "framer-motion"

export const SuccessMessage = () => {
  return (
    <motion.div
      className="fixed bottom-8 left-4 right-4 max-w-md mx-auto bg-green-50 border-2 border-green-400 rounded-lg p-4 shadow-lg z-50"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <p className="text-green-700 font-semibold text-center" style={{ fontFamily: 'Open Sans' }}>
        ✅ ¡Tu mensaje ha sido enviado!
      </p>
      <p className="text-green-600 text-sm text-center mt-1" style={{ fontFamily: 'Open Sans' }}>
        Me pondré en contacto pronto.
      </p>
    </motion.div>
  )
}