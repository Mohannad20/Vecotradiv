import React, { forwardRef, useEffect, useState } from "react";
import BrutalistCard from "./BrutalistCard";

const Cards = forwardRef((_, ref) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/services`
        );
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);
  

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
      <div
        ref={ref}
        className="flex w-full gap-8 px-4 py-4 overflow-x-auto no-scrollbar"


      >
        {services.map((service, index) => (
            <BrutalistCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              useCase={service.useCase}
              tool={service.tool}
              animation={service.animation}
            />
          ))}
      </div>
    </div>
  );
});

export default Cards;