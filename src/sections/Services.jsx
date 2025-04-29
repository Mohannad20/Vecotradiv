import React, { useRef } from "react";
import { BrickScroller } from "../components/BrickScroller";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

export const Services = () => {
  const cardRef = useRef();

  return (
    <section className="relative w-full min-h-1/2 bg-white px-6 py-12 flex flex-col items-center justify-between">
      <Link to="/services">
        <h1 className="uppercase text-center my-5 text-neutral-900 font-[Monument] font-bold text-[2.4rem] md:text-[4.5rem] leading-tight tracking-wider">
          Nos Services
        </h1>
      </Link>
      <Cards ref={cardRef} />
      <BrickScroller targetRef={cardRef} />
    </section>
  );
};

export default Services;
