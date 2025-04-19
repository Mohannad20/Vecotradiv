import React, { useRef } from "react";
import { Card } from "../components/Card";
import { BrickScroller } from "../components/BrickScroller";

export const Services = () => {
  const cardRef = useRef();

  return (
    <section className="relative w-full min-h-1/2 bg-neutral-400 text-white px-6 py-12 flex flex-col items-center justify-between">
      <Card ref={cardRef} />
      <BrickScroller targetRef={cardRef} />
    </section>
  );
};

export default Services;
