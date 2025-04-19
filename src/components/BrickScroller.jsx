import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const BrickScroller = ({ targetRef }) => {
  const scrollerRef = useRef(null);
  const lineRef = useRef(null);
  const brickRef = useRef(null);

  const isDragging = useRef(false);
  const lastX = useRef(0);
  const clickOffsetX = useRef(0);

  const [brickX, setBrickX] = useState(0); // In px
  const controls = useAnimation();

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;

    const brickRect = brickRef.current.getBoundingClientRect();
    clickOffsetX.current = e.clientX - brickRect.left;

    controls.stop();
    controls.start({
      scaleX: 0.95,
      scaleY: 1.05,
      transition: { duration: 0.2 },
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !lineRef.current || !targetRef.current) return;

    const lineRect = lineRef.current.getBoundingClientRect();
    const brickWidth = brickRef.current.offsetWidth;

    let newX = e.clientX - lineRect.left - clickOffsetX.current;
    newX = Math.max(0, Math.min(newX, lineRect.width - brickWidth)); // clamp

    setBrickX(newX);

    const scrollWidth =
      targetRef.current.scrollWidth - targetRef.current.clientWidth;
    const percentage = newX / (lineRect.width - brickWidth);
    targetRef.current.scrollLeft = percentage * scrollWidth;

    // Elastic reaction
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;

    controls.start({
      scaleX: 1 + Math.min(Math.abs(dx) / 100, 0.08),
      scaleY: 1 - Math.min(Math.abs(dx) / 100, 0.08),
      transition: { duration: 0.1 },
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    controls.start({
      scaleX: 5,
      scaleY: 1,
      y: [0, -2.5, 0],
      transition: {
        scaleX: { duration: 0.2 },
        scaleY: { duration: 0.2 },
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2.2,
          ease: "easeInOut",
        },
      },
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    controls.start({
      y: [0, -2.5, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2.2,
        ease: "easeInOut",
      },
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="relative w-full h-24 mt-8 flex items-center justify-center"
    >
      {/* Track Line */}
      <div
        ref={lineRef}
        className="absolute w-[80%] max-w-4xl h-2 bg-neutral-700 rounded-none"
        style={{ top: "65%", transform: "translateY(-50%)" }}
      />

      {/* Brick */}
      <motion.div
        ref={brickRef}
        className="absolute z-10 w-16 h-10 bg-yellow-400 border-4 border-black rounded-md flex items-center justify-center shadow-md cursor-pointer"
        style={{
          left: `${brickX+280}px`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        animate={controls}
        whileHover={{ scale: 1.05 }}
        onMouseDown={handleMouseDown}
      >
        🧱
      </motion.div>
    </div>
  );
};

export default BrickScroller;
