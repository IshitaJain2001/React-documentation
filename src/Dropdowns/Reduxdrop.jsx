import React from 'react'

export default function Reduxdrop() {
  return (
    <>
    <ul  className='bg-gray-300 p-[20px] text-[18px] rounded-[26px] h-[310px] '>
        <li>Introduction</li>
        <li>Store</li>
        <li>Dispatching Action</li>
        <li>Reducers</li>
        <li>Middleware</li>
        <li>Hooks
            <ol className='list-disc ml-[50px] text-[17px]' >
                <li>useSelector</li>
                <li>useDispatch</li>
            </ol>
        </li>
        <li>Redux-thunk</li>
        <li>Redux-saga</li>

    </ul>
    </>
  )
}
