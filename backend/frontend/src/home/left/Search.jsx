import React, { useState } from 'react'
import getAllUsers from '../../context/getAllUsers.jsx'
import useConversation from '../../statemanage/userConversation';
import toast from 'react-hot-toast';

const Search = () => {
  const [search,setSearch]=useState("");
  const[allUsers]= getAllUsers();
  const {setSelectedConvo}= useConversation();
  const handleSubmit=(e)=>{
    e.preventDefault();
      if (!search) return;
      const conversation= allUsers.find((user)=>
        user.name.toLowerCase().includes(search.toLowerCase()),

      )
        if (conversation) {
          setSelectedConvo(conversation);
          setSearch("");

        }
        else {
        toast.error("User Not Found")
        }
      
    }
  
  return (
    <div className='ser h-[10vh]'>
      <form onSubmit={handleSubmit}>
        <div className='t  flex justify-center items-center text-center '>
<label className="input input-bordered flex items-center gap-2 w-4/5 px-4 ">
  <input type="text" value={search}
   onChange={(e)=>
    setSearch(e.target.value)
   }
  className="grow bg-white  text-black" placeholder="Search" />
<div>
<i onClick={handleSubmit} className="fa fa-search" style={{color:'black',fontSize:'20px'}}></i>
</div>
</label>

</div>
</form>
    </div>
  )
}

export default Search
