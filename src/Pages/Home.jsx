import React from 'react'
import AsideComponent from "../components/core/homepage/AsideComponent.jsx"
import Cashrole from '../components/core/homepage/HomepageCasorel.jsx'
const Home = () => {
  return (
    <div className="container mx-auto p-4 py-0">
    <div className="grid grid-cols-12">
      <aside className="col-span-3 py-4 border-r border-gray-900 max-w-[250px] ">
      
      <AsideComponent/>
      
      </aside>
      
      <main className="col-span-6 bg-white min-w-[905px]">
        <Cashrole/>
      </main>

    </div>
  
    <div className="mt-6 bg-white p-5">
      
    </div>

  </div>
  
  )
}

export default Home