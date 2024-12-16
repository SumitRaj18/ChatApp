import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import sendMessage from '../../context/sendMessage';
const Type = () => {
  const{sendMessages} = sendMessage();
  const [message,setMessage]= useState('');
   const handleSubmit= async(e)=>{
     e.preventDefault();
           await sendMessages(message);
           setMessage('')
   }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className=' flex ml-10  h-[10vh] text-center '>
    <div className='inp w-[70%] mx-4 '>
      <input type="text" value={message} onChange={(e)=>{
        setMessage(e.target.value)
      }} placeholder="Type here" className="inp2 input flex items-center bg-white   w-full py-3 px-3 rounded-xl grow outline-none  text-black" />
    </div>
    <button className=' send text-3xl mb-4'>
    <IoSend  />

    </button>
    </div>
    </form>
    </>
  )
}

export default Type
