import React from 'react'
import "./portfolio.css"
// import {Swiper,SwiperSlide} from 'swiper/react'
import {Swiper,SwiperSlide} from "swiper/react"

import sidebar from "../../image/sidebar.jpg"
import foodapp from '../../image/foodapp.jpeg'
import HOC from "../../image/hoc.png"
import { ThemeContext} from '../../Context'
import { useContext } from 'react'

import 'swiper/css'
const Portfolio = () => {
  const theme=useContext(ThemeContext)
  const darkMode=theme.state;
  return (
   <div className="portfolio" id='Projects'>
    {/* heading */}
    <span style={{color:darkMode?"white":''}}>Resent project.</span>

     {/* swiper */}
     <Swiper
     spaceBetween={0}
     slidesPerView={2}
     grabCursor={true}
     className='portfolio-slider'
     >
        <SwiperSlide>
            <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={foodapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={HOC} alt="" />
        </SwiperSlide>
      
     </Swiper>
   </div>
  )
}

export default Portfolio