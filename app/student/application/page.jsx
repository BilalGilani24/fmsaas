import Image from 'next/image';
import React from 'react'
import Displayapplication from './displayapplication/displayapplication';

const Application = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex justify-center ml-80 mt-[-100px]"> {/* Center horizontally */}
    <Image
      src={'/A.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
  <Displayapplication/>
  </div>
  )
}

export default Application;