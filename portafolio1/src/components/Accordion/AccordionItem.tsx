import { motion } from "framer-motion";

import { AccordionItem as AccordionItemType } from "@/data/accordion";
import { ChevronDownIcon } from "./icons";

interface AccordionItemProps {
  item: AccordionItemType;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
  const IconComponent = item.icon;
  return (
    <motion.div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 text-left gap-4 text-black"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="w-8 h-8 flex-shrink-0 text-black">
            <IconComponent />
          </div>
          <span 
            className="text-base font-semibold text-black"
            style={{fontFamily: 'Open Sans'}}
          >
            {item.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-black"
        >
          <ChevronDownIcon />
        </motion.div>
      </button>

      {/* Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-12 py-4 border-t border-gray-200 bg-gray-50">
          {/* Text content */}
          <p 
            className="text-sm text-gray-700 leading-relaxed mb-4"
            style={{fontFamily: 'Open Sans'}}
          >
            {item.content}
          </p>

          {/* Skills (if available) */}
          {item.skills && item.skills.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p 
                className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide"
                style={{fontFamily: 'Open Sans'}}
              >
                Tecnologías
              </p>
              <div className="flex gap-2 flex-wrap">
                {item.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-lg px-3 py-1 text-xs font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                    style={{fontFamily: 'Open Sans'}}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};