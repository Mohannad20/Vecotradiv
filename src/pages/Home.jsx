import React from 'react'
import { Hero, Services, Gallery, Contact } from '../sections';


const Home = () => {
  return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      {/* <section id="travaux"><Travaux /></section> */}
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
    </main>
  )
}

export default Home