import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/back.jpg'

import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';



const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const[authUser,setAuthUser] = useAuth();
   const navigate = useNavigate();
    const password= watch("password","")
    const confirmpassword = watch("confirmpassword")
    const passwordmatch=(value)=>{
        return value === password || "Password and Confirm Password don't match"
    }
    const onSubmit = (data) => {
        const userInfo={
          name:data.name,
          email:data.email,
          password:data.password,
          confirmpassword:data.confirmpassword,
        }
        axios.post("/api/user/signup",userInfo)
        .then((response)=>{
            console.log(response.data);
            if(response.data) {
                toast.success("Account Created Successfully"); 
            }
                localStorage.setItem("token",JSON.stringify(response.data))
                  navigate("/login")            
        })
        .catch((error)=>{
            if (error.response) {
                toast.error("Error:"+error.response.data.error)
            }
        })
    }

    return (
        <div className='signup overflow-hidden min-h-screen' style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <section >
                <div className="sn flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full  rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="CSS typing ">
                  Create an Account
              </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-white dark:text-white">Your Name</label>
                                    <input type="text" {...register("name",{required:true})} name="name" id="name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                                    {errors.name && <span className='text-red-500'>This field is required</span>}

                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-white dark:text-white">Your email</label>
                                    <input type="email" {...register("email",{required:true})} name="email" id="email" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-white dark:text-white">Password</label>
                                    <input type="password" {...register("password",{required:true})} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    {errors.password && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label htmlFor="confirmpassword" className="block mb-1 text-sm font-medium text-white dark:text-white">Confirm password</label>
                                    <input type="password"{...register("confirmpassword",{required:true,validate:passwordmatch})} name="confirmpassword" id="confirmpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    {errors.confirmpassword && <span className='text-red-500'>{errors.confirmpassword.message}</span>}

                                </div>

                                <button type="submit" className="btn w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-center text-sm font-light text-white">
                                    Already have an account? <Link to="/login" className="text-pink-500 font-medium text- hover:underline ">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
