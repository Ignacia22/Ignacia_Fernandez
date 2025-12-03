import { motion } from "framer-motion"

export const StudiesSection = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-16 lg:py-24">
      
      {/* SECTION TITLE */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        style={{fontFamily: 'Javanese Text'}}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Estudios
      </motion.h2>

      {/* STUDIES CONTAINER */}
      <div className="space-y-8">
        
        {/* STUDY 1 */}
        <motion.div
          className="border border-gray-800 rounded-lg p-6 lg:p-8 hover:border-gray-600 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="text-2xl">→</div>
            <div className="flex-1">
              <h3 
                className="text-lg sm:text-xl font-semibold text-white mb-2"
                style={{fontFamily: 'Open Sans'}}
              >
                Técnico en Nivel Superior en Diseño Web
              </h3>
              <p 
                className="text-sm text-gray-400 mb-3"
                style={{fontFamily: 'Open Sans'}}
              >
                Especialización en diseño UX/UI y desarrollo de interfaces web atractivas y funcionales orientadas al usuario.
              </p>
              <div className="flex flex-col gap-1">
                <p 
                  className="text-sm font-semibold text-gray-300"
                  style={{fontFamily: 'Open Sans'}}
                >
                  mar. 2020 - jun. 2022
                </p>
                <p 
                  className="text-sm text-gray-500"
                  style={{fontFamily: 'Open Sans'}}
                >
                  INACAP (Centro de Formación Técnica de Chile)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* STUDY 2 */}
        <motion.div
          className="border border-gray-800 rounded-lg p-6 lg:p-8 hover:border-gray-600 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="text-2xl">→</div>
            <div className="flex-1">
              <h3 
                className="text-lg sm:text-xl font-semibold text-white mb-2"
                style={{fontFamily: 'Open Sans'}}
              >
                Desarrolladora Frontend
              </h3>
              <p 
                className="text-sm text-gray-400 mb-3"
                style={{fontFamily: 'Open Sans'}}
              >
                Formación intensiva en React JS, Next JS, JavaScript y desarrollo de sitios web interactivos y responsivos.
              </p>
              <div className="flex flex-col gap-1">
                <p 
                  className="text-sm font-semibold text-gray-300"
                  style={{fontFamily: 'Open Sans'}}
                >
                  oct. 2024 - feb. 2025
                </p>
                <p 
                  className="text-sm text-gray-500"
                  style={{fontFamily: 'Open Sans'}}
                >
                  Henry Bootcamp
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}