import React from 'react'
import { motion } from "motion/react";


const Title = ({Title, desc}) => {
  return (
    <div className='flex flex-col items-center gap-6 mt-6'>
      <motion.h2
          initial={{ y: 30 , opacity: 0 }}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 0.6}}
          viewport={{once: true}}
       className='text-3xl sm:text-5xl font-medium'>{Title}</motion.h2>
      <motion.p 
          initial={{ y: 20 , opacity: 0 }}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{once: true}}
      className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</motion.p>

    </div>
  )
}

export default Title
