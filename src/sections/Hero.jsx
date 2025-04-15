import React from 'react'

export const Hero = () => {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Votre agence de confiance</h1>
        <p className="mt-4 text-lg md:text-xl">Immobilier & travaux divers — tout en un</p>
        <div className="mt-6 space-x-4">
          <a href="#services" className="px-4 py-2 bg-white text-black rounded">Voir nos services</a>
          <a href="#contact" className="px-4 py-2 border border-white rounded">Contactez-nous</a>
        </div>
      </div>
    )
  }