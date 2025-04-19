import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Galerie", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <div
        className="w-fit max-w-screen flex items-center justify-around  px-6 py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* LOGO aligned with the 25% column */}
        <div className="">
          <Link to="/">
            <svg
              width="650"
              height="50"
              viewBox="-23 0.5 100 35"
              style={{
                mixBlendMode: "overlay", // or try 'multiply', 'overlay'
              }}
            >
              <text
                x="50%"
                y="75%"
                textAnchor="middle"
                fontFamily="'Monument'"
                fontSize="19"
                fontWeight="650"
                letterSpacing="2.6"
                fill="none"
                stroke="black"
                strokeWidth="1"
              >
                VECOTRADIV
              </text>
            </svg>
          </Link>
        </div>

        {/* NAV ITEMS */}
        <div
          className={`${
            isHovered ? "opacity-100" : "opacity-0"
          } flex items-center gap-8 transition-opacity duration-300`}
        >
          {navItems.map((item, index) => (
            // </Link>
            <Link
              key={index}
              to={item.path}
              className={`relative px-2 group text-black font-[Nippo] text-[19px] tracking-[2.5px] font-[280] hover:opacity-80 transition-all duration-500
    ${
      isHovered
        ? `translate-x-0 delay-${index * 100}`
        : "-translate-x-4 opacity-0"
    }`}
            >
              {/* Dots in corners */}
              <span className="absolute top-0 left-0 w-[5px] h-[5px] bg-black opacity-0 group-hover:opacity-100 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out animate-spin"></span>
              <span className="absolute top-0 right-0 w-[5px] h-[5px] bg-black opacity-0 group-hover:opacity-100 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out animate-spin"></span>
              <span className="absolute bottom-0 left-0 w-[5px] h-[5px] bg-black opacity-0 group-hover:opacity-100 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out animate-spin"></span>
              <span className="absolute bottom-0 right-0 w-[5px] h-[5px] bg-black opacity-0 group-hover:opacity-100 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out animate-spin"></span>


              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
