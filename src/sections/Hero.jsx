import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { text } from "../constants/textData"

const Hero = () => {
  const heroLine = text["hero-text"]
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row mx-auto items-start gap-5`}>
        <Art />
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi,I'm <span className='text-[#915eff]'>Arnab</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {heroLine}
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

const Art = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      {/* a circle */}
      <div className='w-5 h-5 rounded-full bg-[#915eff]' />
      {/* a gradient line */}
      <div className='w-1 sm:h-80 h-40 violet-gradient' />
    </div>
  )
}
export default Hero