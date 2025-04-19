import React from "react";

const MarqueeBanner = ({ text, bg = "bg-amber-300", textColor = "text-black",}) => (
  <div
    className={`absolute bottom-0 left-0 w-full ${bg} ${textColor} text-xs py-1.5`}
  >
    <div className="marquee-container overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap px-6">{text}</div>
    </div>
    <style jsx>{`
      .marquee-container {
        mask-image: linear-gradient(
          to right,
          transparent,
          black 10%,
          black 90%,
          transparent
        );
        -webkit-mask-image: linear-gradient(
          to right,
          transparent,
          black 10%,
          black 90%,
          transparent
        );
      }

      .animate-marquee {
        display: inline-block;
        animation: scrollLeft 30s linear infinite;
      }

      .animate-marquee:hover {
        animation-play-state: paused;
        cursor: pointer;
      }

      @keyframes scrollLeft {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}</style>
  </div>
);

export default MarqueeBanner;
