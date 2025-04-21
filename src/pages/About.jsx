import React from 'react'

const About = () => {
  return (
    <div className="p-4 h-screen  m-10">
      <h1
          className="text-[2.5rem] md:text-[4rem] font-[Monument] uppercase text-transparent font-bold tracking-widest hover:text-amber-300 transition-colors duration-300 "
          style={{
            WebkitTextStroke: "2px black", 
          }}
      >
        À propos
      </h1>
    </div>
  )
}

export default About