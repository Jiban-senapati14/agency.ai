import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"


const Hero = () => {
  return (
    <motion.div
    initial={{ y: 20 , opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    viewport={{once: true}}
     className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
      <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img src={assets.group_profile} alt='group profile' className='w-20 h-8 rounded-full'/>
        <p className='text-xs font-medium'>Join 1,600+ designers and developers getting our monthly newsletter.</p>
      </div>
      <div className='flex flex-col items-center gap-6 mt-6'>
        <motion.h1 
          initial={{ y: 40 , opacity: 0 }}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{once: true}}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'> digital </span> impact.</motion.h1>

        <motion.p 
         initial={{ y: 30 , opacity: 0 }}
         whileInView={{opacity:1, y:0}}
         transition={{ duration: 0.5, delay: 1 }}
         viewport={{once: true}} 
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3 '>Creating meaningful connections and turning big ideas into interactive digital experiences</motion.p>

         <motion.div
          initial={{ y: 30 , opacity: 0 }}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{once: true}}
          className='relative mt-10'>
            <img src={assets.hero_img}  className='w-full max-w-6xl'/>
            <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:top-100 sm:-right-70 -z-1 dark:hidden '/>
         </motion.div>

      </div>
    </motion.div>
  )
}

export default Hero  
