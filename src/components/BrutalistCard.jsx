import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";


const BrutalistCard = ({ title, description, index , tool , useCase, animation  }) => {
  const [showMore, setShowMore] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const { t } = useTranslation('services');
  

  useEffect(() => {
    const loadAnimation = async () => {
      const animationModule = await import(`../assets/animations/${animation}.json`);
      setAnimationData(animationModule.default);
  
    }
    loadAnimation();
  }, [animation]);

  return (
    <div className="relative flex flex-col justify-between min-w-[280px] bg-white font-[nippo] text-black border border-black p-4 hover:bg-neutral-100 transition group overflow-hidden">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="inline-block transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-[-2px]">
            →
          </span>
          <span className="text-[12px] font-light tracking-widest uppercase">
            #{index + 1}
          </span>
        </div>

        <div className="border-t border-dashed border-black my-2" />

        {/* Title and description */}
        <h3 className="font-bold uppercase text-md w-fit my-3 hover:text-yellow-400">
          {t(`services.${index}.title`)}
        </h3>
        <p className="text-sm mb-1 lowercase font-light">{t(`services.${index}.description`)}</p>

        {/* Lottie animation */}
        <div className="my-3 flex justify-center items-center">
          <Lottie
            animationData={animationData }
            loop
            autoplay
            style={{ height: "100px", width: "100px" }}
          />
        </div>
      </div>

      {/* Footer with hover arrows and toggle button */}
      <div className="flex justify-between items-center">
        <span className="inline-block transition-all duration-300 group-hover:-rotate-45 group-hover:translate-y-[-2px]">
          →
        </span>
        <span
          onClick={() => setShowMore((prev) => !prev)}
          className="text-xs font-light uppercase p-0.5 tracking-wide underline underline-offset-4 decoration-dotted hover:text-yellow-400 transition cursor-pointer"
        >
          {t('moreInfo')}
        </span>
        <span className="inline-block transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-[-2px]">
          ←
        </span>
      </div>

      {/* Expandable info section */}
      <div
        className={`absolute bottom-0 left-0 w-full px-4 py-3 bg-neutral-200 text-xs font-light overflow-hidden transition-all duration-500 ${
          showMore ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>🔧 {t('tools')}: {t(`services.${index}.tool`)}</p>
        <p className="mt-1">
          💡 {t('useCase')}: {t(`services.${index}.useCase`)}
        </p>
        <p className="mt-1 flex flex-row justify-between items-center">
          🌐 {t('contact')}: <a href="mailto:vecotradiv.34@gmail.com" className="underline">{t('sendEmail')}</a>
          <span
            onClick={() => setShowMore(false)}
            className="text-xs font-light uppercase tracking-wide underline underline-offset-4 decoration-dotted hover:text-yellow-400 transition cursor-pointer"
          >
            {t('close')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BrutalistCard;
