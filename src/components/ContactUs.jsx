import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react";


const ContactUs = () => {

   
    const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     toast.success("Message sent successfully!");
      event.target.reset();
    } else {
     toast.error(data.message)
    }
        
    } catch (error) {
       toast.error(error.message) 
    }

    formData.append("access_key", "35a47842-135e-4eb0-ba42-cc3a1f58638a");

    
  };


  return (
    <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{staggerChildren:0.2}}
     className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-15 text-gray-800 dark:text-white '>
      <Title  Title='Contact Us' desc=' From strategy to execution, we craft digital solutions that move your business forward.'/>
        <motion.form 
          initial={{ y: 30 , opacity: 0 }}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{once: true}}
        onSubmit={onsubmit} className='flex flex-col gap-6 w-full max-w-2xl mb-20'>
          
              <div>
                <p className='mb-2 text-sm font-medium'> your name </p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:bordergray-600'>
                    <img src={assets.person_icon} alt=''/>
                    <input name='name' type="text" placeholder=" Enter your name" className="w-full p-3 text-sm outline-none" required/>
                </div>          
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'> Email id </p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:bordergray-600'>
                    <img src={assets.email_icon} alt=''/>
                    <input  name='email' type="email" placeholder=" Enter your email" className="w-full p-3 text-sm outline-none" required/>
                </div>
            </div>
          
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'> Message </p>
                <textarea placeholder="Message" rows={6} className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-gray-100 dark:shadow-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-all cursor-pointer hover:scale-105 transition-all bg-blue-700 rounded-full">Submit
                <img src={assets.arrow_icon} alt='arrow icon' className='w-4 h-4 mt-1'/>
            </button >
        </motion.form>
    </motion.div>
  )
}

export default ContactUs
