import React from 'react'

const Loader = () => {
  return (
<div class="flex flex-row gap-2">
 
  <div class="flex flex-col gap-2">
    <div class="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
    <div class="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
  </div>
</div>

  )
}

export default Loader;