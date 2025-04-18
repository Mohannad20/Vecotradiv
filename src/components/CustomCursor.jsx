import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };
    const mouseEnter = () => setHovered(true);
    const mouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        top: pos.y,
        left: pos.x,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`w-6 h-6 relative transition-all duration-150 animate-pulse ${
          clicked ? "scale-[1.4] rotate-12" : ""
        } ${hovered ? "scale-125" : ""}`}
      >
        {/* Square outline dots */}
        <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-black" />
        <div className="absolute top-0 right-0 w-[2px] h-[2px] bg-black" />
        <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black" />
        <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black" />

        {/* Cross lines */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black" />
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-black" />
      </div>
    </div>
  );
};

export default CustomCursor;
