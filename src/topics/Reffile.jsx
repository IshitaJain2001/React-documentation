import React from 'react'

export default function Reffile() {
  return (
    <div className='w-[1000px]'>
<p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
  useRef
</p>

<p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line">
Hook useRef is used to keep the value across renders, so as to avoid re-rendering , on change in value. It's commonly used to access and manipulate DOM and to store any mutable value that doesn't triggers re-render on change.
<p className="text-[28px] font-bold " > steps:</p>
<p>step-1: {` import {useRef} from 'react'`}</p>
<p>step-2: Calling useRef and initializing it with some value.</p>
<p>step-3: Linking target's ref attribute with the created useRef.</p>


<p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
    // for ex-: Let's creating a Counter using ref
  </p>
  <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose" >
     {`import {useRef} from 'react'
   function Counter() {
const countRef = useRef(0);
const increment = () => {
    countRef.current += 1;
    console.log('Current count:' {countRef.current});
  };
      `}  </p>
</p>


    </div>
  )
}
