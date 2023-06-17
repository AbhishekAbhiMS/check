import "./testmonial.css"
import React from 'react'
import { Pagination } from "swiper"
import "swiper/css/pagination";
import "swiper/css";
import porfilePic1 from "../../image/school.png"
import porfilePic2 from "../../image/puc.png"
import porfilePic3 from "../../image/be.png"
import { ThemeContext} from '../../Context'
import { useContext } from 'react'


import {Swiper, SwiperSlide } from "swiper/react"

const Testmonial = () => {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state;

   const clints=[
        {
            img:porfilePic1,
            review:"I completed my 10th in 'G J C kadur' in science medium with aggreate of 76%  in the year 2015"
           
        },
        {
            img:porfilePic2,
            review:"After the completion of 10ht , i join 'varaprada kadur pu college' for 'PCMB' and i completed my Pre-university course in the year 2018 with the aggreate of 84% "
            
        },
        {
            img:porfilePic3,
            review:"After PUC i get a seat in 'Dr. Ambedkar Institute of Technology', i completed my 'Bachelor of Engineering' in the year 2022 whith CGPI 7.67 "
        }
    ]
  return (
   <div className="t-wraper" id="Education">
    <div className="t-headding">
        <span style={{color:darkMode?"white":''}}>My </span>
        <span>Education </span>
        <span style={{color:darkMode?"white":''}}>Details..</span>
        <div className="blur t-blur1" style={{backgroung:"var(--purple)"}}></div>
        <div className="blur t-blur2" style={{backgroung:"var(skyblue)"}}></div>

    </div>
    {/* slider */}
   <Swiper
   modules={{Pagination}}
   slidesPerView={1}
   pagination={{clickable:true}}>

{clints.map((ir)=>{
    return(
      
         <SwiperSlide key={ir}>
         <div className="t-testmonial">
            <img src={ir.img} alt="" />
            <span style={{color:darkMode?"white":''}}   >{ir.review}</span>
            </div>
        </SwiperSlide>
      

    )

})}

   </Swiper>
   </div>

  )
}

export default Testmonial