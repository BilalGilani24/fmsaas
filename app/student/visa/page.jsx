import Image from 'next/image';
import React from 'react'
import Displayvisa from './displayvisa/displayvisa';

const Visa = () => {
  return (
    <div className='flex flex-col'>

   
    <div className="flex justify-center ml-80 mt-[-100px]"> {/* Center horizontally */}
    <Image
      src={'/V.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
<Displayvisa/>
  </div>
  )
}

export default Visa;