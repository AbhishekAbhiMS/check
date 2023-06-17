import React from 'react'
import "./footer.css"
import wave from "../image/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin"

const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt=""  style={{width:"100%"}}/>
        <div className='f-content'>
            <span>abhishekmschotta@gmail.com</span>
            <div className="f-icons">
<Insta color="white" size="3rem"> </Insta>
<Facebook color="white" size="3rem"> </Facebook>
<Linkdin color="white" size="3rem"> </Linkdin>
            </div>
        </div>
    </div>
  )
}

export default Footer