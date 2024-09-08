import React, { useState } from 'react'
import fc from '../images/fc.png'
import cc from '../images/cc.png'
import det from '../images/default.png'
import mod from '../images/module.png'
import imp from '../images/import1.png'
import imp2 from '../images/import2.png'
import { toast } from 'react-toastify'
export default function Components({components}) {
 const[option,setOption]= useState(null)

 function opt1() {
  setOption('opt1')
 }

 function opt2() {
  setOption('opt2')
 }

switch(option){

  case 'opt1': document.querySelector(".opta").style.backgroundColor="red"
  document.querySelector(".opta").style.color="white"
  toast.warn("Incorrect answer")
  break
    case 'opt2' :document.querySelector(".optb").style.backgroundColor="green"
  document.querySelector(".optb").style.color="white"
  toast.success("Correct answer")
}
  return (
    <div className='w-[1000px]' > 
     <div className='text-[40px] font-bold  text-black400 mt-[40px] ml-[40px] ' >Components</div>
     <p >

       <p className=' ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line' >{components} </p>
   

       <div className='flex gap-[230px] ml-[230px] mt-[10px]'>
       <p className=' text-[25px] text-blue-600 '> EXPORT DEFAULT</p>
       <p className=' text-[25px] text-blue-600'> MODULAR EXPORT</p>
       </div>

<div className='flex gap-[160px] ml-[170px] mt-[20px]'>
<img src={det} className="h-[140px] w-[300px]   rounded-[20px]" /> 
 
 <img src={mod} className="h-[140px] w-[250px]  rounded-[20px]" /> 
</div>
     
       <p className=' ml-[50px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>
        
        <p className='flex ml-[270px] mt-[40px] text-[34px]  font-semibold'>Importing based on type of export</p>
      
        <div className='flex gap-[270px] mt-[20px] ml-[130px] text-blue-600 font-normal'>
          <p>If Module-level Export </p>
          <p>If Export default</p>
        </div>

        <div className='flex gap-[200px] ml-[100px] mt-[20px] '>
<img src={imp} alt="" className='rounded-[10px] w-[300px] h-[200px]'/>
<img src={imp2} alt="" className='rounded-[10px] w-[300px] h-[200px]'/>

        </div>
        <p className='mt-[15px]'>

        {`Components serve alot of features -:
                            1. Reusability.
                            2. Follows Separation Of Concern due to Isolation.  
                            3. Follows Modular level import or export.`}
        </p>
    
       </p>
      <p className=' ml-[50px] w-[1300px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line' >Components are of 2 types-:
       <p > a. FUNCTIONAL </p>
        b. CLASS 
      </p> 
   
   
     </p>
     <div className='text-[48px] font-bold  text-black-300 ml-[50px] mt-[30px]  '>Difference between Functional and Class components</div>
  
      <p className=' ml-[50px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>
      
        

      <p>Basic difference between the 2 lies in-: </p> 
        1. How they are defined -:
              <p  > <span className='bg-yellow-300 text-white'>Function Components(FC) : </span>
             are defined using functions, </p> 
               <p> <span className='bg-yellow-300 text-white'>Class Components(CC) :</span> defined using ES6 Class syntax.  </p> 
       2. Syntax
             <p> <span className='bg-yellow-300 text-white'>FC :</span> have simple syntax, </p>
             <p> <span className='bg-yellow-300 text-white'>CC :</span> have prolix syntax. </p>  
       3. Lifecycle
             <p> <span className='bg-yellow-300 text-white'>FC :</span> maintains lifecycle by useEffect hook, </p>  
           <p><span className='bg-yellow-300 text-white'>CC :</span>  maintains 
           lifecycle by lifecycle methods.</p>  
        4. Performance
             <p> <span className='bg-yellow-300 text-white'>FC :</span>  performs better,</p> 
              <p> <span className='bg-yellow-300 text-white'>CC :</span> have more overhead leading to 
              affected performance. </p>  


      </p>
  
      <div className='flex ml-[150px] gap-[180px] mt-[50px] text-2xl text-blue-400'>
      <p >A SAMPLE FUNCTIONAL COMPONENT</p>
      <p>A SAMPLE CLASS COMPONENT</p>
      </div>

      <div className='flex gap-[80px] ml-[110px] mt-[40px]' >
        <img src={fc} alt="" className='rounded-3xl h-[200px]'  />
        <img src={cc} alt="" className='rounded-3xl h-[200px]'  />
      </div>


      <p className=' ml-[50px] mt-[30px] leading-10 text-blue-800 text-[26px]  font-medium'>Answer a question , before you proceed-: </p>
<p className=' ml-[50px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-light'>In which folder are components created?</p>
<div className="flex flex-col mt-[20px] ml-[40px] gap-7" >
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] opta block" onClick={opt1}>a. Public folder.</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] optb block" onClick={opt2}>b. Src folder.</button>

</div>


    </div>
   
  )
}
