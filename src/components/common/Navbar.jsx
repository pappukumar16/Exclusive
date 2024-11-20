import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PiMagnifyingGlass } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { navdata } from './navdata';


const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-4 pb-4 border border-gray-900'>

     {/* //outer for desine */}
     <div className='flex justify-between items-center ml-6 mr-8'>

      <div>
        {/* logo */}
        <Link to={"/"}>
        <p className="text-gray-950 font-semibold text-xl">Exclusive</p>
        </Link>
      </div>

      <div className='flex gap-4 '>
        {
         navdata.map( (post)=>{
           return <NavLink to={post.path} key={post.id}>
              <p>{post.posts}</p>
            </NavLink>
         })
        }
      </div>

      {/* 3rd part for navbar */}
      <div className='flex gap-6 items-center justify-around'>
        <form className='flex gap-[-2px] items-center justify-stretch'>
          {/* value={formData} onChange={setFormDate( (e)=> e.target.value)} */}
        
          <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
 
  <input
    type="text"
    placeholder="What are you looking for?"
    className="px-4 py-2 w-full rounded-l-md focus:outline-none"
  />

  <span className="px-4 py-2 border-l border-gray-300 rounded-r-md flex items-center justify-center">
    <PiMagnifyingGlass />
  </span>
</div>



        </form>

        <div>
         <IoIosHeartEmpty/>
        </div>

        <div>
          <PiShoppingCartSimpleThin/>
        </div>

        <div>
           <GrUserManager/>
        </div>

      </div>
     </div>

    </div>
  )
}

export default Navbar