import React from 'react'

const Message = ({message}) => {
     const authUser = JSON.parse(localStorage.getItem("token"));
     const itsme= message.senderId=== authUser.user._id;
     const chatUser= itsme? 'chat-end ':'chat-start'
     const chatColor= itsme? 'bg-blue-500': 'bg-slate-500'
     const createdAt=  new Date(message.createdAt)
     const format= createdAt.toLocaleTimeString([],{
      hour:'2-digit',
      minute:'2-digit'
     })
  return (
    <div>
       <div className='p-4'>
      <div className={`chat ${chatUser}`}>
  <div className={`chat-bubble text-white ${chatColor}`}>
   {message.message}
  </div>
  <div className='text-xs '>{format}</div>

</div>

    </div>
    </div>
  )
}

export default Message
