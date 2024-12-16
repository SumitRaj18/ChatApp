import React from 'react'
import useConversation from '../../statemanage/userConversation'
import { useSocketContext } from '../../context/SocketContext.jsx';
import image from '../../assets/bg.jpg';
const User = ({ user }) => {

  const { selectedConvo, setSelectedConvo } = useConversation();
  const isSelected = selectedConvo?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
 
  return (
    <div className={ `hey hover:bg-slate-500 duration-150 ${isSelected ? 'bg-slate-700' : ""}`}
      onClick={() => { setSelectedConvo(user)
       }}>
      
      <div className='flex space-x-4 px-6 py-7 hover:bg-slate-700'>
      <div className={`avatar ${isOnline ? "online" : ""}`}>
  <div className="w-16 rounded-full">
    <img src={user.photo || image }  style={{objectFit:'cover',height:'50'}}></img>  
  </div>
</div>
        <div>
          <h1 className='font-bold'>{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default User
