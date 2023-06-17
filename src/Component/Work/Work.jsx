import React from 'react'

import './work.css'
 
import facebook from '../../image/Facebook.png'
import upwork from '../../image/Upwork.png'

import fiverr from '../../image/fiverr.png'

import amazon from '../../image/amazon.png'

import shopify from '../../image/Shopify.png'
import { ThemeContext} from '../../Context'
import { useContext } from 'react'



const Work = () => {
   const theme=useContext(ThemeContext)
   const darkMode=theme.state;
  return (
   <div className="work">
{/* left */}
<div className="awesome">
        <span style={{color:darkMode?"white":''}}>My Main </span>
        <span>Technical Skills</span>
        <span style={{color:darkMode?"white":''}}>These are my few main skills that i learn,  As a civil background  <br /> i learn these 
            Skills to become a Fullstack java developer  </span>
           <button className="button s-button">Hire Me</button>
<div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>
{/* right */}
{/* <div style={{marginLeft:'9rem'}}></div> */}

<div className="w-right">
<div className="w-maincircle">
 <div className="w-secondarycircle">
    <img src={upwork} alt="" />
 </div>
 <div className="w-secondarycircle">
    <img src={fiverr} alt="" />
 </div>
 <div className="w-secondarycircle">
    <img src={amazon} alt="" />
 </div>{" "}
 <div className="w-secondarycircle">
    <img src={shopify} alt="" />
 </div>
 <div className="w-secondarycircle">
    <img src={facebook} alt="" />
 </div>
 <div className="w-backcircle bluecircle"></div>
 <div className="w-backcircle yellowcircle"></div>


</div>
</div>

   </div>
  )
}

export default Work