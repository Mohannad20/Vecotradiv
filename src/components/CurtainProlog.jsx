import React, { useState } from "react";

const CurtainProlog = ({ onFinish }) => {
  const [pull, setPull] = useState(false);

  const handleClick = () => {
    setPull(true);
    setTimeout(() => {
      onFinish();
    }, 1200);
  };

  // The word you want to repeat
  const word = "VECOTRADIV";
  const repeatCount = 15;
  const fontSize = 85;
  const lineHeight = fontSize * 0.67; // Small line spacing for tight vertical stack

  return (
    <div
      onClick={handleClick}
      className={`fixed top-0 left-0 w-full h-screen z-50 transition-transform duration-[1200ms]  ${
        pull ? "-translate-y-full" : ""
      }`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="text-mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />

            {/* Repeat same word vertically with same width */}
            {Array.from({ length: repeatCount }).map((_, i) => (
              <text
                key={i}
                x="35%" 
                y={100 + i * lineHeight}
                fontSize={fontSize}
                fontWeight="800"
                textAnchor="middle"
                fill=""
                // fontFamily="'Space Grotesk', 'Futura', 'Arial Black', sans-serif"
                letterSpacing="0"
              >
                {word}
              </text>
            ))}
          </mask>
        </defs>

        {/* Apply the mask to a curtain */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#ffffff"
          mask="url(#text-mask)"
        />
      </svg>
    </div>
  );
};

export default CurtainProlog;
