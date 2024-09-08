import React from 'react'
import parent from '../images/parentfile.png'
import child from '../images/childfile.png'

export default function Props() {
  return (
    <div className='w-[1000px]'>
         <div className='text-[40px] font-bold  text-black400 mt-[40px] ml-[40px]' >Props </div>
         <p className=' ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight ' >Props is short for properties, its a mechanism for passing data from 1 component to another, they are readonly and immutable and because of them components can be reused with dynamic data. </p>
         <p className='text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]'>Key Features</p>
         <p className='ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight'>
            <p>1. They are immutable.</p>
            <p>2. Allow to pass data from parent to child.</p>

         </p>
<p className='flex gap-[350px] ml-[230px] mt-[20px] text-[34px]  text-blue-400 '>
  <p>Parent</p>
  <p>Child</p>
</p>
         <p className='flex gap-[100px] ml-[100px] mt-[20px] w-[600px]' >
<img src={parent} alt="" className='rounded-2xl h-[230px] w-[350px]'/>
<img src={child} alt="" className='rounded-2xl h-[230px] w-[350px]'/>
         </p>
   
    </div>
  )
}
