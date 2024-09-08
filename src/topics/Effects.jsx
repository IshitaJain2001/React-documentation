import React,{useState} from 'react'
import { toast } from 'react-toastify';

export default function Effects() {
    const [selectedopt,setSelectedopt]=useState(null)

  switch(selectedopt){
    case 'option1' : document.querySelector(".option1").style.backgroundColor='red';
    document.querySelector(".option1").style.color='white'
    toast.warn("incorrect answer")
   
    break
      case 'option2':document.querySelector(".option2").style.backgroundColor='red'
      document.querySelector(".option2").style.color='white'
      toast.warn("incorrect answer")
      break
        case 'option3': document.querySelector(".option3").style.backgroundColor='green'
        document.querySelector(".option3").style.color='white'
        toast.success("correct answer")
        break
      
  }

function option1() {
  setSelectedopt('option1')

}
function option2() {
  setSelectedopt('option2')

}
function option3() {
  setSelectedopt('option3')

}
  return (
    <>
  <article className='w-[1000px]'> 

{/* useEffect */}
<p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
useEffect
</p>

<p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line">
Hook useEffect is also a commonly used hook , used to manage
side-effects in functional component , for ex-: data-fetching,  
suppose there is an activity which is to be triggered on completion of some other independent activity or in change of a state or a prop,etc., this will be carried out by using useEffect.
syntax={`>`} // useEffect(), it is called with a callback function,
may or may take up dependency array.
<p className="text-[28px] font-bold " > steps:</p>
<p>step-1: {` import {useEffect} from 'react'`}</p>
<p>
  step-2: Call useEffect above return in function and pass a callback function to it

</p>
<p>
 step-3: Pass to it dependency array if required.
</p>
<p className="text-[28px] font-bold mt-[20px]">When do we need dependency array?</p> 
<p>useEffect runs as soon as component is mounted and continues to run on every re-render if no dependency is passed, but if we want it to run only during mounting time, we pass to it an empty array and if we want to run it on change of any specific state or prop we pass them as dependencies in an array.
  <p className="text-[28px] font-bold mt-[20px]" >Answer this.</p>
<p >QUES-: There is a counter and on change of count , a console has to be made saying it's changed.</p>
<p>{` a. // no dependency array
useEffect(()=>{
console.log("it's changed")
})
b. //empty dependency array
useEffect(()=>{
  console.log("it's changed")
  })
c. // dependency.
useEffect(()=>{
console.log("it's changed")
},[count])
`
}</p>

<p className="flex flex-col mt-[20px] ml-[40px] gap-7" >
<button className="h-[50px] w-[300px] bg-gray-300 rounded-[50px] option1 " onClick={option1} >Option A</button>
<button className="h-[50px] w-[300px] bg-gray-300 rounded-[50px] option2" onClick={option2} >Option B</button>
<button className="h-[50px] w-[300px] bg-gray-300 rounded-[50px] option3" onClick={option3} >Option C</button>
</p>
</p>





</p>
</article>

    </>
  )
}
