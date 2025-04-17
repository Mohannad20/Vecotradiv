import React, { useEffect, useRef, useState } from "react";
import brick from '../../public/images/brick.png';

const BrickCursor = ({ onCompleteShrink }) => {
  const brickRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);
  const [scale, setScale] = useState(1);
  const [shrinkDone, setShrinkDone] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (brickRef.current) {
        brickRef.current.style.left = `${e.clientX}px`;
        brickRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let shrinkInterval;

    if (isClicking && !shrinkDone) {
      let currentScale = 1;
      shrinkInterval = setInterval(() => {
        currentScale -= 0.01;
        if (currentScale <= 0.6) {
          currentScale = 0.6;
          clearInterval(shrinkInterval);
          setShrinkDone(true);
          onCompleteShrink?.();
        }
        setScale(currentScale);
      }, 60);
    }

    return () => clearInterval(shrinkInterval);
  }, [isClicking, shrinkDone]);

  return (
    <>
      <div
        ref={brickRef}
        className="pointer-events-none fixed z-[9999]"
        style={{
          width: "90px", // Adjusted size for visibility (can be smaller/larger)
          height: "auto",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transition: "transform 0.05s ease-out",
        }}
      >
        <img
          src= {brick} // Replace with your actual path
          alt="brick"
          draggable={false}
          className="select-none"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Hide native cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>

      {/* Click detection */}
      <div
        className="fixed inset-0 z-[9998]"
        onMouseDown={() => setIsClicking(true)}
        onMouseUp={() => setIsClicking(false)}
      />
    </>
  );
};

export default BrickCursor;