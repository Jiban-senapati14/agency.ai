import React from 'react'

const Title = ({Title, desc}) => {
  return (
    <div className='flex flex-col items-center gap-6 mt-6'>
      <h2 className='text-3xl sm:text-5xl font-medium'>{Title}</h2>
      <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</p>

    </div>
  )
}

export default Title
