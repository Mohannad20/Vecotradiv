import React, { useEffect } from "react";

const CurtainProlog = ({ startLift, onFinish }) => {
  useEffect(() => {
    if (startLift) {
      const timeout = setTimeout(() => {
        onFinish?.();
      }, 1200); // Match the transition duration
      return () => clearTimeout(timeout);
    }
  }, [startLift]);

  const word = "VECOTRADIV";
  const repeatCount = 51;
  const fontSize = 19;
  const lineHeight = fontSize * 0.76;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-50 transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        startLift ? "-translate-y-full scale-y-105 skew-y-1" : ""
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
            {Array.from({ length: repeatCount }).map((_, i) => (
              <text
                key={i}
                x="25%"
                y={100 + i * lineHeight}
                fontSize={fontSize}
                fontWeight="650"
                textAnchor="middle"
                fontFamily="'Monument'"
                letterSpacing="2.5"
              >
                {word}
              </text>
            ))}
          </mask>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#25497b"
          mask="url(#text-mask)"
        />
      </svg>
    </div>
  );
};

export default CurtainProlog;
