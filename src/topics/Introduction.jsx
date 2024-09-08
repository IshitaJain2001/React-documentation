import React, { useState ,useEffect} from 'react'
import { toast } from 'react-toastify'
import lock from '../images/lockimg.png'
import tick from '../images/tick1.png'

export default function Introduction({title,definition}) {
 const [option,setOption]= useState(null)
 const [unread1,setRead1]=useState(true)
const [unread2, setRead2] = useState(true)


  switch(unread1){

      case false: 

        document.querySelector('.btnread').style.backgroundColor='green'
      document.querySelector('.locked').textContent="YOUR QUESTION UNLOCKED"
            document.querySelector('.hid').style.display= "inline"
            document.querySelector('.lock1').style.display="none"
                   document.querySelector('.container1').style.width='450px'
                   document.querySelector('.ques1').style.display="block"
  }

  
  switch(unread2){

    case false: 

      document.querySelector('.btnread2').style.backgroundColor='green'
    document.querySelector('.locked2').textContent="YOUR QUESTION UNLOCKED"
          document.querySelector('.hid2').style.display= "inline"
           document.querySelector('.lock2').style.display="none"
                 document.querySelector('.container2').style.width='450px'
                //  document.querySelector('.ques1').style.display="block"
}


switch(option){
  case 'opt1': document.querySelector(".option1").style.backgroundColor="green"
  document.querySelector(".option1").style.color="white"
  toast.success("Correct answer")
  break
    case 'opt2': document.querySelector(".option2").style.backgroundColor="red"
      document.querySelector(".option2").style.color="white"
      toast.warn("Incorrect answer")
    break
      case 'opt3': document.querySelector(".option3").style.backgroundColor="red"
        document.querySelector(".option3").style.color="white"
        toast.warn("Incorrect answer")
        break
        case 'opt4' :document.querySelector(".option4").style.backgroundColor="green"
        document.querySelector(".option4").style.color="white"
        toast.success("Correct answer")
        break
        case 'opt5': document.querySelector(".option5").style.backgroundColor="red"
        document.querySelector(".option5").style.color="white"
        toast.warn("Incorrect answer")
        break
        
}

  return (

    <div className='w-[1000px]'>
  
     <div className='flex mt-[100px] '> 
     <h1 className='text-[48px] font-bold  text-black-300 ml-[50px] mt-[30px] ' >Introduction To {title}</h1>
<button className='text-[25px] mt-[40px] bg-gray-300 h-[50px] px-[10px] rounded-[20px] btnread ml-[100px] ' onClick={()=>setRead1(false)}>Module done </button>
  <img src={tick} className="h-[40px] shadow-none bg-white mt-[50px] hidden hid" />
  </div>



  <div className=' ml-[50px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight' >
    <div className='flex'>
    <p >
  
  { definition } 
   </p>
  
    </div>
   
    <div className='flex gap-[10px] mt-[40px] '>
    

 </div>

    <p  className='text-[30px] font-bold  text-black-300  mt-[30px]  '>Library VS framework</p>
    <p className='  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight'>
Think of Library as a box , which provides all the tools to construct something and think of a framework as a blueprint, that provides the predefined structure, which still allows for retouching.
    </p>
    <p className='flex gap-5 mt-[20px] bg-yellow-300 w-[600px] pl-[37px] container1'>

   
    <img src={lock} className="shadow-none h-[40px] lock2 " />
  
  <p className='locked'>QUESTION STAYS LOCKED TILL YOU READ</p>
   
   </p>
   <div className='hidden ques1'>
   <p className='  mt-[30px] leading-10 text-blue-800 text-[26px]  font-medium '>Answer a question , before you proceed-: </p>
<p className=' mt-[10px] leading-10 text-blue-800 text-[26px]  font-light'>
React is a library or a framework?
</p>
<div className="flex flex-col mt-[20px] text-[16px] text-black gap-7 font-normal" >
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option4 block" onClick={()=>setOption('opt4')} >a. Library.</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option5 block" onClick={()=>setOption('opt5')}>b. Framework.</button>

</div>
   </div>
  


  <div>  
    

  <div className='flex mt-[100px] font-normal'> 
  <p  className='text-[36px] font-bold  text-black-300  mt-[30px]  '>Understanding DOM</p>
<button className='text-[25px] mt-[20px] bg-gray-300 h-[50px] px-[10px] rounded-[20px] btnread2 ml-[100px]  text-black' onClick={()=>setRead2(false)}>Module done </button>
  <img src={tick} className="h-[40px] shadow-none bg-white mt-[20px] hidden hid2" />
  </div>




    

    <p className='  mt-[20px] leading-10 text-blue-800 text-[26px]  font-extralight'>
Interface which enables representation of structure of HTML as a tree of object, where each tag acts as node. Through DOM JS interacts with HTML content to dynamically update it.
    </p> 
 
   
    <p className='flex gap-5 mt-[20px] bg-yellow-300 w-[600px] pl-[37px] container2'>

   
<img src={lock} className="shadow-none h-[40px] lock1 " />

<p className='locked2'>QUESTION STAYS LOCKED TILL YOU READ</p>

</p>

  <p className=' mt-[30px] leading-10 text-blue-800 text-[26px]  font-medium'>Answer a question , before you proceed-: </p>
<p className='  mt-[10px] leading-10 text-blue-800 text-[26px]  font-light'>
  How to change text dynamically using DOM?
</p>
<div className="flex flex-col mt-[20px]  gap-7" >
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option1 block" onClick={()=>setOption('opt1')} >a. Using textContent.</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option2 block" onClick={()=>setOption('opt2')}>b. Using innerHTML .</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option3 block" onClick={()=>setOption('opt3')}>c. Using outerHTML </button>
</div> </div>


    </div>
   </div>
   
   
  )
}
