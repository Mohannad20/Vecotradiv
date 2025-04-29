import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

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
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const animationModule = await import(
          `../assets/animations/${animation}.json`
        );
        setAnimationData(animationModule.default);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };

    if (animation) {
      loadAnimation();
    }
  }, [animation]);

  return (
    <motion.div
      className={`w-full bg-white font-[nippo] border border-black p-4 group ${
        isExpanded ? "col-span-4" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        height: "h-fit",
      }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="flex justify-between items-center mb-2">
        <span className="inline-block transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-[-2px]">
          →
        </span>
        <span className="text-[12px] font-light tracking-widest uppercase">
          #{index + 1}
        </span>
      </div>

      <div className="border-t border-dashed border-black my-2" />

      <motion.div layout="position">
        <h3 className="font-bold uppercase text-md w-fit my-3 hover:text-yellow-400">
          {title}
        </h3>

        <p className="text-sm mb-4 lowercase font-light">
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          magni maxime, ipsum alias consequuntur harum nemo quasi modi error
          esse in officiis. Error molestiae dolore labore quos, rem commodi
          vitae.
        </p>
      </motion.div>

      {animationData && (
        <div className="my-3 flex justify-center items-center">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ height: "100px", width: "100px" }}
          />
        </div>
      )}

      <motion.div
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-sm lowercase font-light">
          <div>
            <h3 className="font-bold uppercase mb-2">Cas d'utilisation</h3>
            <p>{useCase}</p>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-2">Outils</h3>
            <p>{tool}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold uppercase mb-2">Contact</h3>
            <a href="mailto:vecotradiv.34@gmail.com" className="link-underline w-fit">
              Envoyer un email
            </a>
            <Link to="/contact" className="link-underline w-fit">
              Écrivez-nous
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between items-center mt-4">
        <span className="inline-block transition-all duration-300 group-hover:-rotate-45 group-hover:translate-y-[-2px]">
          →
        </span>
        <button
          onClick={onExpandToggle}
          className="text-xs font-light uppercase p-0.5 tracking-wide underline underline-offset-4 decoration-dotted hover:text-yellow-400 transition cursor-pointer"
        >
          {isExpanded ? "Fermer" : "Plus d'info"}
        </button>
        <span className="inline-block transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-[-2px]">
          ←
        </span>
      </div>
    </motion.div>
  );
};

export default BrutalistCardA;
