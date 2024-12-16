import React from 'react'
import Search from './Search'
import Users from './Users'

import Example from './Drawer';


const Left = () => {
 
 
  return (
    <div  className='hh w-[30%] h-screen  bg-slate-950 text-white border-r border-white'>
      <div className='chati flex gap-32'>
      <h1 className='ee text-3xl px-8 mt-2'>Chats</h1>
      
      <Example />
      </div>
      <Search></Search>
      <hr className='mt-4' />
      <Users></Users>
    </div>
  )
}

export default Left
