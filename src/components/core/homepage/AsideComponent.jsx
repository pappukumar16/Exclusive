import React from 'react'
import {NavLink} from "react-router-dom"
import  {dataAside}  from '../../../data/sidebardata'
// import animation from "../homepage/index"

const AsideComponent = () => {

    

  return (
    <div className='ml-3 space-y-3 '>
     {
        dataAside.map( (data)=>(
            <div  className='hover:translate-x-1 '>
              <NavLink to={`/${data.path}`} key={data.id}>
                
                <span className='font-semibold text-lg '>{data.posts}</span>
              </NavLink>
            </div>
            
        ))
     }
  

    </div>
  )
}

export default AsideComponent