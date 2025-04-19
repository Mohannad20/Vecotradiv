import React from 'react'

const CornerDots = () => {
  return (
    <>
        {/* Corner hover dots */}
        <span className="absolute top-0 left-0 w-[5px] h-[5px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin"></span>
              <span className="absolute top-0 right-0 w-[5px] h-[5px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin"></span>
              <span className="absolute bottom-0 left-0 w-[5px] h-[5px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin"></span>
              <span className="absolute bottom-0 right-0 w-[5px] h-[5px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-spin"></span>

    </>
  )
}

export default CornerDots