import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CornerDots from "./CornerDots";
import MarqueeBanner from "./MarqueeBanner";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
  ];

  const navigation = [
    { name: t("services"), path: "/services" },
    { name: t("gallery"), path: "/gallery" }, 
    { name: t("about"), path: "/about" }, 
    { name: t("contact"), path: "/contact" },
    { name: t("careers"), path: "/careers" },
  ];

  const terms = [
    { name: t("privacyPolicy"), path: "#pp" },
    { name: t("termsAndConditions"), path: "#tc" },
  ];

  return (
    <footer className="relative bg-neutral-900 text-white font-[Nippo] font-light py-2 pb-6 overflow-hidden">
      <div className="flex justify-between items-center  px-6 text-xs md:text-sm">
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 text-sm hover:text-amber-300 transition-colors duration-300"
            >
              <CornerDots  />
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex gap-6">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group relative p-1.5 hover:text-amber-300 transition-colors duration-300"
            >
              <CornerDots />

              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center my-6">
        <Link
          to="/"
          className="text-[2.5rem] md:text-[4rem] font-[Monument] font-bold tracking-widest hover:text-amber-300 transition-colors duration-300"
        >
          VECOTRADIV
        </Link>
      </div>

      {/* Bottom Orbiting Links */}
      <div className="flex justify-between items-center text-[0.7rem] md:text-xs px-6 pb-2 mt-6">
        <a
          href="mailto:mohannadmoujiib@gmail.com"
          className="hover:underline hover:text-amber-300"
        >
          {t("developedBy")}: Mohannad Moujib
        </a>
        <p>Vecotradiv &copy; {new Date().getFullYear()} {t("realEstateAgency")} </p>
        <div className="flex gap-6 ">
          {terms.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:underline hover:text-amber-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Scrolling Marquee Banner */}

      <MarqueeBanner
        text="
       🚀 VECOTRADIV - Innovation. Immobilier. Impact. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          🌍 Découvrez nos services - Contactez-nous aujourd’hui &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          🏠 Rejoignez-nous pour bâtir l’avenir &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        "/>
    </footer>
  );
};

export default Footer;
