import React, { useState } from 'react'
import { toast } from 'react-toastify'
export default function Lifecycle() {

  const [optionn,settOption] = useState(null)


  switch(optionn) {
    case "opt7" : document.querySelector('.option7').style.backgroundColor="red"
    document.querySelector('.option7').style.color="white"
    toast.warn('Incorrect answer')
    break
      case "opt8" :document.querySelector('.option8').style.backgroundColor="green"
    document.querySelector('.option8').style.color="white"
    toast.success("Correct answer")
    break

        case "opt9" :document.querySelector('.option9').style.backgroundColor="red"
    document.querySelector('.option9').style.color="white"
    toast.warn('Incorrect answer')

  }
  return (
    <div className='w-[1000px]'>
      <div className='text-[40px] font-bold  text-black400 mt-[40px] ml-[40px]' >Lifecycle in Class Components</div>
    <div className=' ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>

  
 It's a sequence of stages a component undergoes from creation to removal, via it developers can understand re-rendering and many other happenings, involves 3 main phases-:
   <p > MOUNTING-: <span className='bg-yellow-300 text-white' >Creation and insertion into DOM. </span></p>
   <p> UPDATION-: <span className='bg-yellow-300 text-white' >State or props change. </span> </p> 
   <p>UNMOUNTING-: <span className='bg-yellow-300 text-white'> Component removed from DOM. </span> </p> 

   



    </div>
<div className='text-[30px] font-bold  text-black400 mt-[40px] ml-[40px] '>Mounting</div>

<div className='ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>
Methods-:
<p>Constructor(): states and events are binded here.</p>
<p>Render()-: returns jsx that makes up the UI.</p>
<p>componentDidMount()-: invoked as soon as component is inserted in DOM.</p>
</div>


<div className='text-[30px] font-bold  text-black400 mt-[40px] ml-[40px] '>Updating</div>

<div className='ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>
Methods-:
<p>render() : it is called everytime states or props chnage, component re-renders as states or props change.</p>

<p>componentDidUpdate() : occurs as soon as updation occurs.</p>

</div>


<div className='text-[30px] font-bold  text-black400 mt-[40px] ml-[40px] '>Unmounting</div>

<div className='ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>
Methods-:
<p>componentWillUnmount() : invoked immediately before component is unmounted.</p>



</div>


<p className='  mt-[30px] leading-10 text-blue-800 text-[26px]  font-medium  ml-[50px]'>Answer a question , before you proceed-: </p>
<p className=' mt-[10px] leading-10 text-blue-800 text-[26px]  font-light  ml-[50px]'>
Which lifecycle method is called only once in entire lifecycle?
</p>
<div className="flex flex-col mt-[20px] text-[16px] text-black gap-7 font-normal  ml-[50px]" >
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option7 block" onClick={()=>settOption('opt7')} >a. componentDidUpdate().</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option8 block" onClick={()=>settOption('opt8')}>b. componentDidMount().</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] option9 block" onClick={()=>settOption('opt9')}>c. render().</button>
</div>

    </div>
  

  )
}
