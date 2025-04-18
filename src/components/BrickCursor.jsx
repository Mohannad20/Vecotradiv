import React, { useEffect, useRef, useState } from "react";
import brick1 from '../../public/images/brick1.png';

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
    let interval;
  
    if (isClicking && !shrinkDone) {
      let currentScale = 1;
      interval = setInterval(() => {
        currentScale -= 0.01;
        if (currentScale <= 0.6) {
          currentScale = 0.6;
          clearInterval(interval);
          setShrinkDone(true);
          onCompleteShrink?.();
        }
        setScale(currentScale);
      }, 45);
    } else if (!isClicking && !shrinkDone) {
      // Grow back smoothly
      let currentScale = scale;
      interval = setInterval(() => {
        currentScale += 0.02;
        if (currentScale >= 1) {
          currentScale = 1;
          clearInterval(interval);
        }
        setScale(currentScale);
      }, 30);
    }
  
    return () => clearInterval(interval);
  }, [isClicking, shrinkDone]);  

  return (
    <>
      <div
        ref={brickRef}
        className="pointer-events-none fixed z-[9999]"
        style={{
          width: "250px", // Adjusted size for visibility (can be smaller/larger)
          height: "auto",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transition: "transform 0.05s ease-out",
        }}
      >
        <img
          src= {brick1} // Replace with your actual path
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