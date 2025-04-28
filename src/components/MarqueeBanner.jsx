import React from "react";

const MarqueeBanner = ({
  text,
  bg = "bg-amber-300",
  textColor = "text-black",
  position = "bottom",
  size = "text-xs",
}) => {

  const longText = Array(10).fill(text).join(" • ");

  return (
    <div
      className={`absolute ${
        position === "top" ? "top-20" : "bottom-0"
      } left-0 w-full ${bg} ${textColor} ${size} py-1.5`}
    >
      <div className="marquee-container overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap">
          {longText}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;