import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <div className="relative px-8 py-16 flex flex-col md:flex-row justify-center text-neutral-900 min-h-[50vh] max-w-full mx-auto">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute opacity-50 top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-2xl mx-4 h-full space-y-6 z-10">
        <Link to="/contact">
          <h1 className="uppercase font-[Monument] font-bold text-[2.5rem] md:text-[4rem] leading-tight tracking-wide">
            {/* Travaillons ensemble */}
            {t("contactTitle")}
          </h1>
        </Link>

        <p className="text-lg leading-relaxed font-[nippo] text-black">
          {/* Immobilier, rénovations, artisanat ou fournitures — quelle que soit
          votre ambition, nous sommes là pour la concrétiser avec vous.  */}
          {t("contactDescription")}
          <br />
          <Link
            to="/contact"
            className="underline italic hover:text-amber-400 transition"
          >
            {/* Écrivez-nous */}
            {t("writeToUs")}
          </Link>{" "}
          {t("or")}{" "}
          <a
            href="tel:+212676824404"
            className="group underline italic hover:text-amber-400 transition"
          >
            {/* appelez-nous dès maintenant */}
            {t("callUsNow")}
          </a>
          .
        </p>
      </div>

      <div className="hidden md:block w-px border border-black border-dashed mx-12" />

      <div className="flex flex-col w-full md:w-1/2 p-6 space-y-6 font-[nippo] z-10">
        <div className="space-y-2 text-neutral-900">
          <h2 className="uppercase text-[1.5rem] md:text-[2.1rem] font-[Monument] font-medium tracking-widest">
            {/* Contacts */}
            {t("contacts")}
          </h2>
          <div className="flex flex-col space-y-2 text-[0.7rem] md:text-[1rem]">
            {[
              { href: "tel:+212676824404", label: "+212 676-824404" },
              { href: "tel:+212600586822", label: "+212 600-586822" },
              {
                href: "mailto:vecotradiv.34@gmail.com",
                label: "vecotradiv.34@gmail.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="link-underline w-fit"
              >
                <span>
                  {item.label} ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-neutral-900">
          <h2 className="uppercase text-[1.5rem] md:text-[2.1rem] font-[Monument] font-medium tracking-widest">
            {/* Address */}
            {t("address")} 
          </h2>
          <p className="text-[0.9rem] md:text-[1.3rem] ">
            ADR_Av Med 5 N°132, Amougay
            <br />
            Dchiera BP 308, Inezgane
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="link-underline w-fit"
          >
            {t("getDirections")} ↗
          </a>
        </div>
      </div>
    </div>
  );
};
