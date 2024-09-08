import React, {useState}from 'react'
import { toast } from 'react-toastify'
export default function Structure({title}) {
  const [option,setOption]=useState(null)
  function opt1(){
    setOption('opt1')
   }
   function opt2(){
    setOption('opt2')
   }  
   function opt3(){
    setOption('opt3')
   }




   switch(option){
    case 'opt1' : document.querySelector('.optA').style.backgroundColor="green"
    document.querySelector(".optA").style.color="white"
    toast.success("Correct answer")
    break
    case 'opt2' : document.querySelector(".optB").style.backgroundColor="red"
    document.querySelector(".optB").style.color="white"
    toast.warn("Incorrect answer")
    break
    case 'opt3' : document.querySelector(".optC").style.backgroundColor="red"
    document.querySelector(".optC").style.color="white"
    toast.warn("Incorrect answer")
    break
   }
  return (
    <div className='w-[1000px]'>
    
      <div className='text-[40px] font-bold  text-black400 mt-[40px] ml-[40px] rt'>Structure of {title} Project</div>
      <p    >
        
        <p className=' ml-[50px]   mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line'>
        In a React project, there are primarily two main working folders: src and public.
                 <p>  <span className='bg-yellow-300 text-white' > Public Folder:</span> Contains the index.html file, which is the entry point for the entire UI. The root element in this
                 HTML file is where  we mount our React components. </p>       
             <p> <span className='bg-yellow-300 text-white'>Src Folder:</span> Where all the React components are created. These components have either a .jsx or .js extension.

                <p className='font-semibold text-black'>Within the src folder, there are two key files: </p> 
        <p>
     <span className='bg-yellow-300 text-white' >App.js:</span>    This file is responsible for rendering all the components used to encapsulate all the components.
          </p>
          <p>
            <span className='bg-yellow-300 text-white'>Index.js:</span>
           This file renders the App component into the root element defined in index.html.
          </p>
       
        </p>   
            </p></p>

            <p className=' ml-[50px] mt-[30px] leading-10 text-blue-800 text-[26px]  font-medium'>Answer a question , before you proceed-: </p>
<p className=' ml-[50px] mt-[10px] leading-10 text-blue-800 text-[26px]  font-light'>Which of the following file is most important file in public folder ?</p>
<div className="flex flex-col mt-[20px] ml-[40px] gap-7" >
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] optA block" onClick={opt1}>a. Index.html</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] optB block" onClick={opt2}>b. Index.js</button>
<button className="h-[50px] w-[530px] bg-gray-300 rounded-[50px] optC block" onClick={opt3}>c. App.js</button>
</div>
    
    </div>
  
   

  )
}
