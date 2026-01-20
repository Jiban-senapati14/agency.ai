import React from 'react'
import Title from './Title';
import ServiceCard from './ServiceCard';
import assets from '../assets/assets';

const Services = () => {

    const servicesData = [
        {
            title: "Web Development",
            description: "Building responsive and dynamic websites tailored to your business needs.",
            icon:assets.ads_icon,
        },
        {
            title: "Digital Marketing",
            description: "Creating effective marketing strategies to boost your online presence.",
            icon:assets.marketing_icon , 
        },
        {
            title: "content creation",  
            description: "Designing user-friendly interfaces that enhance user experience.",
            icon:assets.content_icon,
        },
        {
            title: "social media management",  
            description: "Improving your website's visibility on search engines to attract more traffic.",
            icon:assets.social_icon,
        }
    ];


  return (
    <div id='services' className='relative flex flex-col items-center gap-7 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white bg-white dark:bg-black'>
      <img src={assets.bgImage2} alt='services background' className='absolute -top-110 -left-70 -z-1 dark:hidden w-20 h-20'/>

      <Title  Title="How can we help?" desc=" We offer a wide range of services to help your business thrive in the digital world."/>

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>


    </div>
  )
}

export default Services
