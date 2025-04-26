import React from "react";
import { motion } from "framer-motion";

const BrutalistCardA = ({
  index,
  title,
  description,
  useCase,
  tool,
  animation,
  isExpanded,
  onExpandToggle,
}) => {
  return (
    <motion.div
      className={`w-full bg-white border-2 border-black p-6 shadow-brutal ${
        isExpanded ? "col-span-4" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        height: isExpanded ? "auto" : "16rem", // Fixed height when collapsed
      }}
      transition={{ duration: 0.3 }}
      layout // This enables smooth layout transitions
    >
      <motion.div layout="position">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
      </motion.div>

      <motion.div
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div>
            <h3 className="font-bold mb-2">Cas d'utilisation</h3>
            <p>{useCase}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Outils</h3>
            <p>{tool}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Animation</h3>
            <p>{animation}</p>
          </div>
        </div>
      </motion.div>

      <button
        onClick={onExpandToggle}
        className={`mt-4 px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 transition-colors ${
          isExpanded ? "w-full" : ""
        }`}
      >
        {isExpanded ? "Fermer" : "Plus d'info"}
      </button>
    </motion.div>
  );
};

export default BrutalistCardA;