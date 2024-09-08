import React from 'react'

export default function Reactdrop() {
  return (
    <>
        <ul className='bg-gray-300 p-[20px] text-[18px] rounded-[26px] z-10 '>
            <li>Introduction</li>
            <li>Getting Started</li>
            <li>Structure</li>
            <li>Components
                <ol className='list-disc ml-[50px] text-[17px]'>
                <li>Functional Comp.</li>
                <li>Class Comp.</li>
                </ol>
            </li>
            <li>LifeCycle</li>
            <li>Props</li>
            <li>Hooks
                <ol className='list-disc ml-[50px] text-[17px]' >
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useContext</li>
                    <li>useRef</li>
                    <li>useReducer</li>
                </ol>
            </li>
         
          
            <li>Router</li>
            <li>Optimizations</li>
        </ul>
    </>
  )
}
