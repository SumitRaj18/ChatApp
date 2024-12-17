import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import image from '../assets/bg.jpeg'
import { useAuth } from '../context/AuthProvider';
const Login = () => {
    const [authUser,setAuthUser] = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const userInfo={
          email:data.email,
          password:data.password,
        }
        axios.post("/api/user/login",userInfo)
        .then((response)=>{
            console.log(response.data);
           
            if(response.data) {
                toast.success("Logged in Successfully");
            }
                localStorage.setItem("token",JSON.stringify(response.data))
               setAuthUser(response.data)
               
          
        })
          
        .catch((error)=>{
            if (error.response) {
            toast.error("Error:")
            }
        })
    }

  return (
    <>
     

    <div className='login min-h-screen' style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <section  >
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen sm:h-screen lg:py-0">
     
      <div className="ty w-full bg-transparent rounded-lg  md:mt-0 sm:max-w-md ">
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="CSS typing ">
                  Log in to your Account
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                      <input type="email" {...register("email",{required:true})} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                      {errors.email && <span className='text-red-500'>This field is required</span>}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                      <input type="password" {...register("password",{required:true})} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  0   dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      {errors.password && <span className='text-red-500'>This field is required</span>}
                  </div>
                 
                
                  <button type="submit" className="btn w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                  <p className="text-center text-sm font-light text-white ">
                      New User? <Link to='/signup' className="font-medium text-pink-500 hover:underline dark:text-blue-600">Create an account</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
    </>
  )
  
}

export default Login
