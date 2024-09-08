import react from 'react'

export default function States() {

return(

<>

<article className='w-[1000px]'> 

    
<p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
  useState
</p>

<p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line">
  Hook useState is one of the most commonly used hook , used to manage
  state which without useState was only possible in class component,
  syntax={`>`} // useState(), it is called with an initial value os state,
  it returns an array of state and function updating state, where state
  gets initialised with initial value and gets keep updating by that
  function and its destructured there itself while calling state.
  <p className="text-[28px] font-bold "> steps:</p>
  <p>step-1: {` import {useState} from 'react'`}</p>
  <p>
    step-2: Call useState above return in function and intialise it with
    some value.
  </p>
  <p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
    // for ex-: let's create a counter using useState.{" "}
  </p>
  <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose" >
     {`import {useState} from 'react'
       export default function usinguseState(){
    const [count,setCount] = useState(0) `} <span  className="text-[20px] bg-blue-600 text-white p-[5px]" > initialised state with 0 </span> </p>
   
<p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose ">    
   {`  return(
       <> `} <span className="text-[20px] bg-blue-600 text-white p-[5px]">  using empty fragments to store all statements together as only 1 statement can be returned </span> </p>
 <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose">    {`count: {count}`} <span className="text-[20px] bg-blue-600 text-white p-[5px]">rendering a JS variable in html part by using {} literals. </span> 
 </p>
 <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose">  {`   <button onClick={()=>setCount(count+1)}>inc. </button> `}  <span  className="text-[20px] bg-blue-600 text-white p-[5px]">calling setCount with how to update count for increment </span> </p>
    <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose ">  {`<button onClick={()=>setCount(count-1)}>inc. </button> `} <span className="text-[20px] bg-blue-600 text-white p-[5px]">calling setCount with how to update count for decrement </span>

<p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose">{ `)}`} </p>


  </p>
</p>
</article>
</>
)
}