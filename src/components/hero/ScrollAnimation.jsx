import React from 'react'
import { motion } from "framer-motion"

export default function ScrollAnimation() {
    return (
        <div className='absolute bottom-16 sm:-bottom-5 w-full flex justify-center items-center'>
            <a href="#about">
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2'>
                    <motion.div
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                        animate={{
                            y: [0, 15, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                </div>
            </a>
        </div>
    )
}
