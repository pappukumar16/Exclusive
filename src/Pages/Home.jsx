import React from 'react'
import AsideComponent from "../components/core/homepage/AsideComponent.jsx"
import Cashrole from '../components/core/homepage/HomepageCasorel.jsx'
const Home = () => {
  return (
    <div className="container mx-auto p-4 py-0">
    <div className="flex">
      <aside className="py-4 border-r h-[63vh] border-gray-900 w-[250px] mr-5 ">
      
      <AsideComponent/>
      
      </aside>
      
      <main className=" bg-white ">
        <Cashrole/>
      </main>

    </div>
  
    <div className="mt-6 bg-white p-5">
      
    </div>

  </div>
  
  )
}

export default Home