import React, { useState } from 'react'

export default function Progressbar() {
    // console.log("hello")
  const[percent,setPercent] = useState(0)
  return (
    <div className='flex'>
     <p className='text-[30px] text-black'>  My Progress:  </p> 
    <p className='h-[50px] w-[500px] bg-gray-300 rounded-[30px]'></p>

     <p className='text-[30px] text-black'>{percent}%</p>
    </div>
  )
}
