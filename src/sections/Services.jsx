import React, { useRef } from "react";
import { BrickScroller } from "../components/BrickScroller";
import Cards from "../components/Cards";

export const Services = () => {
  const cardRef = useRef();

  return (
    <section className="relative w-full min-h-1/2 bg-white px-6 py-12 flex flex-col items-center justify-between">
      <h1
          className="text-[2.5rem] md:text-[4rem] font-[Monument] uppercase text-transparent font-bold tracking-widest hover:text-amber-300 transition-colors duration-300 "
          style={{
            WebkitTextStroke: "2px black", 
          }}
      >
        Nos Services
      </h1>
      <Cards ref={cardRef} />
      <BrickScroller targetRef={cardRef} />
    </section>
  );
};

export default Services;
