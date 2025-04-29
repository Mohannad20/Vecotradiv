import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between px-8 md:px-20 py-10 bg-gray-50">
      {/* Grand Slogan */}
      <div className="text-center my-18 font-[Monument] font-bold text-[3rem] md:text-[5rem] leading-tight tracking-tight">
        Réaliser des Rêves <br /> Sans Frontières
      </div>

      {/* Paragraphe d'introduction */}
      <div className="max-w-2xl mx-auto text-center font-[nippo] text-[0.9rem] md:text-[1.2rem]">
        Nous connectons immobilier, construction et solutions domestiques avec des approches innovantes.
        Des transactions immobilières aux rénovations complètes, nous offrons des services intégrés
        avec professionnalisme et attention.
      </div>

      {/* Statistiques/Expérience */}
      <div className="grid grid-cols-3 gap-4 mt-16 max-w-4xl mx-auto text-center font-[nippo]">
        <div className="p-4">
          <div className="font-[Monument] text-3xl mb-2">100+</div>
          <div className="text-sm">Biens Gérés</div>
        </div>
        <div className="p-4">
          <div className="font-[Monument] text-3xl mb-2">10+</div>
          <div className="text-sm">Ans d'Expérience Combinée</div>
        </div>
        <div className="p-4">
          <div className="font-[Monument] text-3xl mb-2">360°</div>
          <div className="text-sm">Solutions Complètes</div>
        </div>
      </div>

      {/* Section Valeurs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 font-[nippo] text-[1rem] max-w-4xl mx-auto">
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">Expertise</h3>
          <p>Connaissance approfondie des marchés immobiliers et des normes de construction.</p>
        </div>
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">Transparence</h3>
          <p>Communication claire et évaluations honnêtes dans chaque transaction.</p>
        </div>
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">Savoir-Faire</h3>
          <p>Des évaluations immobilières aux finitions de construction, nous visons l'excellence.</p>
        </div>
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">Solutions Intégrées</h3>
          <p>Service complet de la recherche de bien à l'aménagement clé en main.</p>
        </div>
      </div>

      {/* Petit À Propos */}
      <div className="max-w-2xl mx-auto text-center mt-20 font-[nippo] text-[0.9rem] md:text-[1.2rem]">
        Servant des clients à travers <span className="font-bold">Agadir, Inezgane, Ait Melloul</span> , nous combinons expertise immobilière et
        savoir-faire en construction pour offrir des solutions immobilières complètes.
      </div>

      {/* Appel à l'action */}
      <div className="flex justify-center mt-16 mb-20">
        <Link
          to="/contact"
          className="border-2 border-dashed border-black py-3 px-8 uppercase font-bold hover:bg-black hover:text-white transition-colors duration-300 font-[nippo]"
        >
          Commencez Votre Projet
        </Link>
      </div>
    </div>
  );
};

export default About;