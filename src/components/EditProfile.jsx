import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const navigate = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/dashboard')
    alert('Profile Updated')
}
  return (
    <div>
      
         <form
            className="flex flex-col p-[30px] mt-[70px] ml-[30px] w-[400px] h-[400px] sm:w-[600px] sm:p-[100px] sm:pt-[50px]
            md:mt-[10px] md:ml-[10px] md:w-[100%] lg:w-[90%] lg:h-[580px] lg:mx-5
            "
          onSubmit={handleSubmit} 
          >
            <h1 className="text-3xl font-bold mb-3">Edit Profile</h1>
            <h1 className="font-semibold mb-3">Enter your details below</h1>
            {/* <label>Name</label> */}
            <input
              type="text"
              placeholder="First Name "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete='true'
            />

            <input
              type="email"
              placeholder="Email or Phone Number "
              className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete='true'
            />

            <input
              type="password"
              placeholder="Password "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete='true'
            />
            <button className="bg-red-500 w-[300px] font-bold h-[40px]">Update Account</button>
           
          </form>
    
    </div>
  )
}

export default EditProfile
