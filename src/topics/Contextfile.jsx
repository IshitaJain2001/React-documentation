import React from 'react'
import img from '../images/arrow_downward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
export default function Contextfile() {

  return (
    <>
<article className='w-[1000px]'> 

    
<p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
  useContext
</p>

<p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line" >
  Hook useState is one of the most commonly used hook , used to get rid of Prop-Drilling
<p className='className="text-[28px] font-bold mt-[10px] '>Prop-Drilling</p>
It happens when passing data from parent to a component which is a deeply nested component,
<p className='whitespace-pre-line bg-black w-[180px] py-[20px] pl-[24px] mt-[20px] mb-[20px] rounded-[20px] text-cyan-300'> 
    {
        ` App`}
        <img src={img} className='h-[40px] border-none shadow-none ' />
 
{`Parent`}
 <img src={img} className='h-[40px] border-none shadow-none '/>
{`Child`}
 <img src={img} className='h-[40px] border-none shadow-none ' />
{`Grandchild
        `
    }
 </p>
  Suppose a prop is to be delivered from app to grandchild, then prop drilling will provide props to parent and child too unnecessarily , prop drilling leads to unnecessary re-render, which can be resolved by Context till you know redux.
  <p className="text-[28px] font-bold "> steps:</p>
  <p>step-1: Create a context using createContext from react .</p>
  <p>
    step-2: Create a custom provider component which will wrap the components that need the context and it accepts a value attribute which takes up an object. 
  </p>
  <p>step-3: Using context in a component, that needs to access the context.</p>
  <p>step-4: Wrapping Application in custom provider.</p>
  <p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
    // for ex-: Let's creating a Counter using context
  </p>
  <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose" >
     {`import {createContext} from 'react'
    export const context= createContext()  
    export const ContextProvider= ({children})=>{
      const [count,setCount] = useState(0)
      return(
      <context.Provider value={{count,setCount}}>
      {children}
      </context.Provider>
      )
      }
      `}  </p>

      <p className='bg-yellow-300 ml-[50px]'>The children refers to all the components that will be enclosed ever in this Provider.</p>
   

 
</p>
</article>
    </>
  )
}
