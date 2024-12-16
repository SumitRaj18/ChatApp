import React from 'react'
import useConversation from '../../statemanage/userConversation'
import { useSocketContext } from '../../context/SocketContext';
import image from '../../assets/bg.jpg';


const Chatuser = (user) => {
  const {selectedConvo} = useConversation();

  const {onlineUsers} = useSocketContext();
  const getStatus=(userId)=>{
  return onlineUsers.includes(userId) ? "Online" :"Offline"
  }

  return (
    <>
    <div className='dd pl-5 pt-3 h-[14vh] flex space-x-4 bg-slate-950'>
        <div>
        <div className={"avatar"}>
        <div className="pic w-14 rounded-full">
    <img src={selectedConvo.photo || image} />
  </div>
</div>
</div>
<div className='sss'>
    <h1 className='naam text-xl'>{selectedConvo.name}</h1>
    <span className='status text-sm'>{getStatus(selectedConvo._id)}</span>
</div>

    </div>

    </>
  )
}

export default Chatuser
