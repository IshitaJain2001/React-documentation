import React from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react'
export default function Why({title,why}) {
  const [option,setOption]=useState(null)
  const [option2,setOption2] = useState(null)
  console.log(option)
  function opt1(){
   setOption('opt1')
  }
  function opt2(){
   setOption('opt2')
  }  
  function opt3(){
   setOption('opt3')
  }
  
 function opt4() {
  setOption('opt4')
 }
 function opt5() {
  setOption('opt5')
 }
 function opt6() {
  setOption('opt6')
 }
  switch(option) {
   case 'opt1' : document.querySelector('.opt1').style.backgroundColor="red"
   document.querySelector('.opt1').style.color="white"
   toast.warn('Incorrect answer')
   break
     case 'opt2' :document.querySelector('.opt2').style.backgroundColor="red"
   document.querySelector('.opt2').style.color="white"
   toast.warn('Incorrect answer')
   break
       case 'opt3' :document.querySelector('.opt3').style.backgroundColor="green"
   document.querySelector('.opt3').style.color="white"
   toast.success('Correct answer')
   break
   case 'opt4' :document.querySelector('.opt4').style.backgroundColor="red"
   document.querySelector('.opt4').style.color="white"
   toast.warn('incorrect answer')
   break
   case 'opt5' :document.querySelector('.opt5').style.backgroundColor="green"
   document.querySelector('.opt5').style.color="white"
   toast.success('Correct answer')
   break
   case 'opt6' :document.querySelector('.opt6').style.backgroundColor="red"
   document.querySelector('.opt6').style.color="white"
   toast.warn('incorrect answer')
   break
  }
  return (
    <div className='w-[1000px]'>
      <div className='text-[40px] font-bold  text-black400 mt-[40px] ml-[40px]' >Why we needed {title} ?</div>
      <p    >
        
        <p className=' ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line' >
        {why}
            </p>

            <p className=' ml-[50px] mt-[30px] leading-10 text-blue-800 text-[26px]  font-medium'>Answer a question , before you proceed-: </p>
<p className=' ml-[50px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-light'>Which of the following statements about React is incorrect?</p>
<div className="flex flex-col mt-[20px] ml-[40px] gap-7" >
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] opt1 block" onClick={opt1}>a. React is developed and maintained by Facebook.</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] opt2 block" onClick={opt2}>b. React is primarily designed to work on single-page applications (SPAs).</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] opt3 block" onClick={opt3}>c. React updates the entire DOM to ensure optimal performance.</button>
</div>
            <p className='text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]' > Concept of Virtual DOM</p>
           <p className=' ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>React works on virtual DOM , React doesn't causes unneccesary re-renders , it creates a Virtual DOM on first render , which is lightweight and is stored in RAM memory of computer because of which it can be accessed faster than actual DOM. On every re-render whenever any prop or state chnages , a new virtual DOM is created and Reconcilation takes place in which minimal number of changes are spotted by comparing new and previous virtual DOMs. Then takes place diffing where actual DOM is manipulated with those reconciled changes. </p> 
            </p>
      
            <p className=' ml-[50px] mt-[30px] leading-10 text-blue-800 text-[26px]  font-medium'>Answer a question , before you proceed-: </p>
<p className=' ml-[50px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-light'>Which of the following statements about Virtual DOM is correct?</p>
<div className="flex flex-col mt-[20px] ml-[40px] gap-7" >
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] opt4 block" onClick={opt4}>a. It is lightweight but stored at a non-accessible place.</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] opt5 block" onClick={opt5}>b. It is primarily designed to optimize performance.</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] opt6 block" onClick={opt6}>c. It updates the entire DOM as soon as it is created on a re-render.</button>
</div>
    </div>
  
  
  )
}
