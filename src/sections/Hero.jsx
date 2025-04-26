import React from "react";
import Scene from "../components/Scene";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      <div className="relative z-10 text-center space-y-4  px-4">
        <h1 
        style= {{ webkitTextStroke: "2px white" }}
        className="text-2xl md:text-6xl font-[Monument] text-transparent uppercase tracking-widest">
          Construisons ensemble
        </h1>
        <p className="text-md md:text-lg max-w-xl mx-auto font-[nippo] text-white">
          Une vision brute, des structures solides, un avenir construit avec style.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-black uppercase font-semibold rounded-md shadow hover:scale-105 transition">
          Commencer
        </button>
      </div>
    </div>
  );
};
