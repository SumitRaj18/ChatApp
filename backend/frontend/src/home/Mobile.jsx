import React, { useState } from 'react'
import Left from './left/Left'
import image from '../assets/chat.jpg'
import useConversation from '../statemanage/userConversation'
import { useEffect } from 'react'
import Chatuser from './right/Chatuser'
import Messages from './right/Messages'
import { GoArrowLeft } from "react-icons/go";

import Type from './right/Type'
const Mobile = () => {
 
    const {selectedConvo,setSelectedConvo}= useConversation();
    useEffect(()=>{
      return setSelectedConvo(null);
        
    },
  [setSelectedConvo])
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
        <div style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className=' w-full  text-white' >
    {!selectedConvo?  <div  className='left h-screen'> <Left/> </div>  : ( <>
     <div className='h-full w-full overflow-hidden'>
      <div className='h-1/4  flex w-full bg-slate-950'> <GoArrowLeft onClick={refreshPage} className='text-4xl ml-1  mt-20 bg-slate-950' /> 
       <Chatuser/>
     
      </div>
    <div  className='tan h-3/4 py-2  overflow-y-auto ' >

    <Messages/>
    </div>
    <div className='h-1/5'>
    <Type/>
    </div>
    </div>
    </>  )}
    </div>
    </div>
  )
}

export default Mobile
