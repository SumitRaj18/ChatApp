import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
function getAllUsers  () {
    const[allUsers,setAllUsers]= useState([]);
 useEffect(()=>{
    const getusers= async()=>{
        try {
            const token= Cookies.get('jwt');
         const response=   await axios.get("/api/user/allusers",{
                   credentials:'include',
                headers:{
                    Authorization:`Bearer ${token}`,
                },
               
            }


            );
            setAllUsers(response.data);
        } catch (error) {
            console.log("Error",error)
        }
    };
    getusers()
 },[])
 return [allUsers]
}

export default getAllUsers;
