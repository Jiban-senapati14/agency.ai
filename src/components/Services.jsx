import React from 'react'
import Title from './Title';
import ServiceCard from './ServiceCard';
import assets from '../assets/assets';
import { motion } from "framer-motion";


const Services = () => {

    const servicesData = [
        {
            title: "Web Development",
            description: "Building responsive and dynamic websites tailored to your business needs.",
            icon: assets.ads_icon,
        },
        {
            title: "Digital Marketing",
            description: "Creating effective marketing strategies to boost your online presence.",
            icon: assets.marketing_icon,
        },
        {
            title: "Content Creation",
            description: "Designing user-friendly interfaces that enhance user experience.",
            icon: assets.content_icon,
        },
        {
            title: "Social Media Management",
            description: "Improving your website's visibility on search engines to attract more traffic.",
            icon: assets.social_icon,
        }
    ];


  return ( 
    <motion.div
      initial={{ y: 30 , opacity: 0 }}
      whileInView={{opacity:1, y:0}}
      transition={{ duration: 0.5 }}
      viewport={{once: true}}
     id='services' className='relative flex flex-col items-center gap-7 py-15 px-2 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white bg-white dark:bg-black'>
      <img src={assets.bgImage2} alt='services background' className='absolute -top-110 -left-70 -z-1 dark:hidden w-20 h-20'/>

      <Title  Title="How can we help?" desc=" We offer a wide range of services to help your business thrive in the digital world."/>

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </div> 


    </motion.div>
  )
}

export default Services
