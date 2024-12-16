import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'
import useConversation from '../../statemanage/userConversation'
import { useAuth } from "../../context/AuthProvider.jsx";
import image from '../../assets/chat.jpg'

const Right=()=>  {

  const {selectedConvo,setSelectedConvo}= useConversation();
  useEffect(()=>{
    return setSelectedConvo(null);

  },
[setSelectedConvo])
  return (
    <div style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='bb w-full  text-white' >
    {!selectedConvo? ( <Nochat/> ): ( <>

      <div className='tt h-full'>     
   <Chatuser></Chatuser>
   <div  className='tan py-2  overflow-y-auto ' style={{maxHeight:'calc(88vh - 15vh)'}} >
   <Messages></Messages>
   </div>
   <Type></Type>
   </div> 
    </>  )}
    </div>

  )
 
}
export default Right;

const Nochat=()=>{
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
     <div className='flex flex-row min-h-screen justify-center items-center'>
      <h1 className='text-3xl font-serif' >Welcome {authUser.user.name} ! 
      <br />
      Select a chat to start Conversation
         </h1>
      

     </div>
    </>
  )
}

