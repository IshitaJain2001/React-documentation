import React from 'react'

export default function Reducer() {
  return (
    <div className='w-[1000px]'>
<p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
useReducer
</p>

<p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line">
Hook useReducer is somewhat like useState, because it is also somewhere managing state only but commonly in complex cases.The only thing to understand is in State , re-renders are caused by setState while in reducers re-renders are caused by dispatch method.
<p className="text-[28px] font-bold " > steps:</p>
<p>step-1: {` import {useReducer} from 'react'`}</p>
<p>step-2: Creating reducer function and passing to it initialState.</p>
<p>step-3: Returning State.</p>


<p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
    // for ex-: Let's creating a Counter using reducer
  </p>
  <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line leading-loose" >
     {`import {useReducer} from 'react'
   function Counter() {
   let initialState= {
     count:0; }
     function reducer(state,action){
switch(action.type){
case 'increment' :return{
count:state.count+1}
default:  return state;
} }
const [state,dispatch] = useReducer(reducer,initialState)
return(
<button onClick={()=>{
    dispatch({
    type:"increment})}}>  increase </button>
)};
      `}  </p>
</p>


    </div>
  )
}

