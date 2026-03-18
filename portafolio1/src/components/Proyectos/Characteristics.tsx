import { motion } from "framer-motion";

interface CharacteristicsProps {
    characteristics: string[]
}

const Characteristics = ({characteristics}: CharacteristicsProps) => {
    if(!characteristics || characteristics.length === 0) return null;

    return (
        <motion.div
        className="mb-6 max-w-xl"
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        viewport={{once: true}}
        >
            <h3
            className="text-white font-normal mt-8 mb-3 text-lg uppercase"
            style={{fontFamily: 'Javanese Text'}}
            >
                Características principales
            </h3>

            <ul
            className="list-disc pl-5  text-gray-200 mt-4 space-y-1 marker:text-sky-400"
            style={{fontWeight: 100, fontSize: "medium"}}
            >
                {characteristics.map((chars, index) => (
                    <motion.li
                    key={index}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5 + index * 0.05}}
                    viewport={{once: true}}
                    >
                        {chars}
                    </motion.li>
                ))}

            </ul>
        </motion.div>
    );
};

export default Characteristics;