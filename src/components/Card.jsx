import React, { forwardRef } from "react";

export const Card = forwardRef((_, ref) => {
  const services = [
    { title: "AMENAGEMENT EXTERIEUR", description: "JARDINAGE" },
    { title: "ELECTRECITE", description: "RESEAU ELECTRIQUE-RESEAU TELEPHONE-." },
    { title: "MENUSERIE", description: "BOIS, Alluminium, Pvc, Inox" },
    { title: "PEINTURE", description: "INTÉRIEUR, EXTÉRIEUR" },
    { title: "PLOMBERIE", description: "INSTALLATION & ENTRETIEN" },
    { title: "NETTOYAGE", description: "APRÈS-TRAVAUX, FAÇADES, etc." },
    { title: "AMENAGEMENT EXTERIEUR", description: "JARDINAGE" },
    { title: "ELECTRECITE", description: "RESEAU ELECTRIQUE-RESEAU TELEPHONE-." },
    { title: "MENUSERIE", description: "BOIS, Alluminium, Pvc, Inox" },
    { title: "PEINTURE", description: "INTÉRIEUR, EXTÉRIEUR" },
    { title: "PLOMBERIE", description: "INSTALLATION & ENTRETIEN" },
    { title: "NETTOYAGE", description: "APRÈS-TRAVAUX, FAÇADES, etc." },
    { title: "AMENAGEMENT EXTERIEUR", description: "JARDINAGE" },
    { title: "ELECTRECITE", description: "RESEAU ELECTRIQUE-RESEAU TELEPHONE-." },
    { title: "MENUSERIE", description: "BOIS, Alluminium, Pvc, Inox" },
    { title: "PEINTURE", description: "INTÉRIEUR, EXTÉRIEUR" },
    { title: "PLOMBERIE", description: "INSTALLATION & ENTRETIEN" },
    { title: "NETTOYAGE", description: "APRÈS-TRAVAUX, FAÇADES, etc." },
  ];

  return (
    <div
      ref={ref}
      className="flex gap-6 overflow-x-scroll no-scrollbar px-4 py-6 w-full"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-neutral-800 min-w-[280px] p-6 rounded-xl hover:bg-neutral-700 transition"
        >
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-sm text-neutral-300 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  );
});
