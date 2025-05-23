import React, { useState, useEffect } from "react";
import BrutalistCardA from "../components/BrutalistCardA";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [services, setServices] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const { t } = useTranslation('services');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`http://localhost:3001/services`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen text-neutral-900 bg-white px-6 py-12">
      <h1 className="text-center my-10 font-[Monument] font-bold text-[3rem] md:text-[5rem] leading-tight tracking-tight">
        {t('title')}
      </h1>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-min">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-300  ${
                expandedCard === index ? "lg:col-span-2 " : ""
              }`}
            >
              <BrutalistCardA
                index={index}
                // title={service.title}
                // description={service.description}
                // useCase={service.useCase}
                // tool={service.tool}
                title={t(`services.${index}.title`)} // Translate title
                description={t(`services.${index}.description`)} // Translate description
                useCase={t(`services.${index}.useCase`)} // Translate use case
                tool={t(`services.${index}.tool`)}
                animation={service.animation}
                isExpanded={expandedCard === index}
                onExpandToggle={() => toggleExpand(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
