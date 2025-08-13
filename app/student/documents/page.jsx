import Image from 'next/image';
import React from 'react'
import Doc from './Applicationdoc/Doc';
import Visadoc from './Visadoc/visadoc';

const Documents = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex justify-center ml-64 mt-5"> {/* Center horizontally */}
    <Image
      src={'/D.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
  <Doc/>
  <Visadoc/>
  </div>
  )
}

export default Documents;