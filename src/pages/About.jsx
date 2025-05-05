import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div className="min-h-screen flex flex-col justify-between px-8 md:px-20 py-10 bg-gray-50">
      <div className="text-center my-18 font-[Monument] font-bold text-[3rem] md:text-[5rem] leading-tight tracking-tight">
        {t("slogan")} 
      </div>

      <div className="max-w-2xl mx-auto text-center font-[nippo] text-[0.9rem] md:text-[1.2rem]">
        {t("introduction")} 
      </div>

      <div className="grid grid-cols-3 gap-4 mt-16 max-w-4xl mx-auto text-center font-[nippo]">
        <div className="p-4">
          <div className="font-[Monument] text-3xl mb-2">100+</div>
          <div className="text-sm">{t("stats.managedProperties")}</div>
        </div>
        <div className="p-4">
          <div className="font-[Monument] text-3xl mb-2">10+</div>
          <div className="text-sm">{t("stats.yearsExperience")}</div>
        </div>
        <div className="p-4">
          <div className="font-[Monument] text-3xl mb-2">360°</div>
          <div className="text-sm">{t("stats.completeSolutions")}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 font-[nippo] text-[1rem] max-w-4xl mx-auto">
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">{t("values.expertise.title")}</h3>
          <p>{t("values.expertise.description")}</p>
        </div>
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">{t("values.transparency.title")}</h3>
          <p>{t("values.transparency.description")}</p>
        </div>
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">{t("values.knowHow.title")}</h3>
          <p>{t("values.knowHow.description")}</p>
        </div>
        <div>
          <h3 className="font-[Monument] text-[1.5rem] mb-3">{t("values.integratedSolutions.title")}</h3>
          <p>{t("values.integratedSolutions.description")}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center mt-20 font-[nippo] text-[0.9rem] md:text-[1.2rem]">
        {t("aboutUs")} 
      </div>

      <div className="flex justify-center mt-16 mb-20">
        <Link
          to="/contact"
          className="border-2 border-dashed border-black py-3 px-8 uppercase font-bold hover:bg-black hover:text-white transition-colors duration-300 font-[nippo]"
        >
          {t("cta")} 
        </Link>
      </div>
    </div>
  );
};

export default About;