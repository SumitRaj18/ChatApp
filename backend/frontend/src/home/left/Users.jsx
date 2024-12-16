import React, { useState } from 'react'
import User from './User'
import getAllUsers from '../../context/getAllUsers.jsx'
function Users ()  {
  const [allUsers,loading]= getAllUsers();
  console.log(allUsers);
  return (
    <div className='ms py-2 overflow-y-auto' style={{maxHeight:'calc(84vh - 5vh)'}}>
       {allUsers.map((user,index)=>{
        return <User key={index} user={user}></User>
        
       })}
               
    </div>
  )
}

export default Users
