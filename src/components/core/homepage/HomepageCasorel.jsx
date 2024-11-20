import React from "react";

import {mainCarouselData} from ".";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

function HomepageCasorel() {
  
 const navigate = useNavigate();
  
  const items = mainCarouselData.map( (items)=> <img onClick={()=>navigate("/men's%20Fashion")}  className='cursor-pointer rounded  ' 
  role='Presentation'src={items.image} alt = "home"/>)

  return (
    <>

        <div className="w-[950px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mt-4">
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        animationDuration={1000}
        animationType="fadeout"
        // touchTracking={false}
        // mouseTracking 
        // disableDotsControls
        
    />

         
        </div>
    
    </>
  );
}

export default HomepageCasorel;