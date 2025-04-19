import React from "react";

const CornerDots = ({ bg = "bg-white", width = 'w-[4px]', height = 'h-[4px]' }) => {
  return (
    <>
      {/* Corner hover dots */}
      <span
        className={`absolute top-0 left-0 ${width} ${height} ${bg} opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin`}
      ></span>
      <span
        className={`absolute top-0 right-0 ${width} ${height} ${bg} opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin`}
      ></span>
      <span
        className={`absolute bottom-0 left-0 ${width} ${height} ${bg} opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin`}
      ></span>
      <span
        className={`absolute bottom-0 right-0 ${width} ${height} ${bg} opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin`}
      ></span>
    </>
  );
};

export default CornerDots;
