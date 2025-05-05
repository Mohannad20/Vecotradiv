import React from "react";
import Scene from "../components/Scene";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      <div className="relative z-10 text-center space-y-4  px-4">
        <h1 
        className="text-[2rem] md:text-[5rem] font-[Monument] text-white font-bold uppercase tracking-widest">
          {/* Construisons ensemble */}
          {t("heroTitle")}
        </h1>
        <p className="text-md md:text-lg max-w-xl mx-auto font-[monument] text-white">
          {/* Une vision brute, des structures solides, un avenir construit avec style. */}
          {t("heroSubtitle")}
        </p>
        <button
          className="border-2 border-dashed text-white border-white py-3 px-8 uppercase font-bold hover:bg-white hover:text-black transition-colors duration-300 text-lg"
        //  className="mt-4 px-6 py-3 bg-white text-black uppercase font-semibold rounded-md shadow hover:scale-105 transition">
         >
           {/* Commencer ↓ */}
           {t("heroButton")}
        </button>
      </div>
    </div>
  );
};
