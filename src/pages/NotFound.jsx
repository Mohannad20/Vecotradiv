import React from "react";
import { useNavigate } from "react-router-dom";
import MarqueeBanner from "../components/MarqueeBanner";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="font-[Monument] font-bold tracking-widest ">
        <MarqueeBanner
          position="top"
          bg="bg-transparent"
          textColor="text-black"
          size="text-[5.8rem]"
          text="&nbsp;&nbsp; Perdu dans l'espace &nbsp;&nbsp;
                • &nbsp;&nbsp; Page introuvable &nbsp;&nbsp;
                • &nbsp;&nbsp; Erreur 404 &nbsp;&nbsp;
                • &nbsp;&nbsp; Retour à l'accueil &nbsp;&nbsp;"
        />
      </div>

      {/* Main Content */}
      <div 
        className="flex flex-col md:flex-row min-h-[calc(100vh-200px)] justify-center items-center  px-6 py-8 md:py-1 mt-40 container mx-auto"
      
      >
        <div className="text-center">
          <h1 className="font-[Monument] text-[4rem] md:text-[8rem] leading-none mb-8">
            4<span className="text-red-500">0</span>4
          </h1>
          
          <p className="font-[nippo] text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            Vous avez atteint le néant. Cette page n'existe pas,
            mais vous trouverez peut-être ce que vous cherchez sur notre page d'accueil.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="border-2 border-black py-3 px-6 uppercase font-[nippo] 
              hover:bg-black hover:text-white transition-colors"
            >
              Retour
            </button>
            
            <button
              onClick={() => navigate("/")}
              className="border-2 border-dashed border-black py-3 px-6 uppercase 
              font-[nippo] hover:bg-black hover:text-white transition-colors"
            >
              Accueil
            </button>
          </div>
        </div>
      </div>

      <div className="mt-auto pb-20 text-center font-[nippo] text-sm">
        <p>Toujours perdu ? Essayez l'une de ces pages :</p>
        <div className="flex justify-center gap-4 mt-2">
          <button 
            onClick={() => navigate("/about")} 
            className="underline hover:text-red-500 transition-colors"
          >
            À Propos
          </button>
          <button 
            onClick={() => navigate("/services")} 
            className="underline hover:text-red-500 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => navigate("/contact")} 
            className="underline hover:text-red-500 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>

    </div>
  );
};

export default NotFound;