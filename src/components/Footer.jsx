import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        <div className='flex justify-between lg:items-center mx-lg:flex-col gap-10'>
            <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme==='dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt='logo'/>
                <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>

                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href='#hero'>Home</a></li>
                    <li><a className='hover:text-primary' href='#hero'>Services</a></li>
                    <li><a className='hover:text-primary' href='#hero'>our work</a></li>
                    <li><a className='hover:text-primary' href='#hero'>Contact</a></li>

                </ul>

            </div>
            <div className='text-gray-600 dark:text-gray-400'> 
                <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                <p className='font-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-2 text-sm'>
                    <input type="email" placeholder='Enter your email' className='px-4 py-3  p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64 sm:w-80 lg:w-96'/>
                    <button className='bg-primary text-white px-6 rounded-r-md bg-blue-900'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6'/>

        <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
            <p>Copyright 2025 © Jiban Kumar Senapati - All Right Reserved.</p>
            <div className='flex items-center justify-between gap-4'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.instagram_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Footer
