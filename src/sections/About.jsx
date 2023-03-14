import React from 'react'
import Tilt from 'react-tilt'
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { text } from "../constants/textData"
import Markdown from '../components/markdown/Markdown'
import useMarkdown from '../services/markdown/useMarkdown'

const About = () => {
  const {data} = useMarkdown("./data/about.md") //targeting the public directory

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}>
        <Markdown text={data}/>
      </motion.p>
    </>
  )
}

export default About