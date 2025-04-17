import React, { useState } from 'react'
import { Hero, Services, Gallery, Contact } from '../sections';
import CurtainProlog from '../components/CurtainProlog';
import PrologCursorCurtain from '../components/PrologCursorCurtain';


const Home = () => {
  const [showCurtain, setShowCurtain] = useState(true);

  return (
    <>
    {showCurtain && <PrologCursorCurtain onFinish={() => setShowCurtain(false)} /> }
    {
    <main>
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      {/* <section id="travaux"><Travaux /></section> */}
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
    </main>}
    </>
  )
}

export default Home