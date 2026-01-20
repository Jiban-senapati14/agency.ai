import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title: "Mobile app marketing",
            description: "A cutting-edge web application that revolutionizes user engagement.",
            image: assets.work_mobile_app 
        },
        {
            title: "Dashboard description",
            description: "A comprehensive dashboard for real-time data visualization.",
            image: assets.work_dashboard_management 
        },
        {
            title: "Mobile app marketing",
            description: "web application that revolutionizes user engagement.",
            image: assets.work_fitness_app
        },
    ]

  return (
    <div id='our-work ' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title Title='our latest work' desc='Explore our portfolio of innovative projects and see how we bring ideas to life'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                workData.map((work, index) => (
                    <div key={index} className='hover:scale-105 transition-transform cursor-pointer'>
                        <img src={work.image} alt='' className='w-full rounded-xl'/>
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default OurWork
