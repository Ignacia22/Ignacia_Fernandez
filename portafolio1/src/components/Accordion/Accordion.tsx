"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { accordionItems } from "@/data/accordion";
import { AccordionItem } from "./AccordionItem";

export const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "habilidades-blandas"
  );

  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-16 lg:py-24 flex flex-col ">
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-8xl font-regular text-start mb-12 text-white"
        style={{ fontFamily: "Javanese Text" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Aquí <br/>encontrarás...
      </motion.h2>

      {/* Accordion Container */}
      <motion.div
        className="w-full space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openAccordion === item.id}
            onToggle={() =>
              setOpenAccordion(openAccordion === item.id ? null : item.id)
            }
          />
        ))}
      </motion.div>
    </div>
  );
};