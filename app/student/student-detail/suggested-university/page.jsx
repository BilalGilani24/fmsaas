'use client'
import Image from 'next/image';
import React from 'react'
import Suggestuni from './Suggestuni/suggestuni';

const Suggesteduni = () => {
  return (
    <div className='flex ml-96  flex-col'>
    <div className="flex justify-center mt-5"> {/* Center horizontally */}
    <Image
      src={'/sus.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
<Suggestuni/>
  </div>
  )
}

export default Suggesteduni;