import "./intro.css"
import React from 'react'
import Github from '../../image/github.png'
import LinkedIn from '../../image/linkedin.png'
import Instagram from '../../image/instagram.png'

import vector1 from  '../../image/Vector1.png'
import vector2 from  '../../image/Vector2.png'
import boy from  '../../image/boy.png'
import thumbup from  '../../image/thumbup.png'
import Crown from  '../../image/crown.png'
import glassesimoji from  '../../image/glassesimoji.png'
import FlotingDiv from "../flotingdiv/FlotingDiv"
import { ThemeContext} from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion"


const Intro = () => {
  const transition={duration:2,type:'spring'}
  const theme=useContext(ThemeContext)
  const darkMode=theme.state;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?"white":''}}>Hy! I'm</span>
                <span> Abhishek MS</span>
                <span style={{color:darkMode?"white":''}}>JAVA FullStack   Developer whith verygood knowledge in Frontend and  Backend ,    
                      providing quality work.
                </span>
                <button className=" button i-button">Hire me</button>
                <div className="i-icons">
                  <a href="">  <img src={Github} alt="" /></a>
                   <a href=""> <img src={LinkedIn} alt="" /></a>
                   <a href="">  <img src={Instagram} alt="" /></a>
                </div>
            </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
             <motion.img 
             initial={{left:'-40%'}}
             whileInView={{left:'-20%'}}
             transition={transition}
             src={glassesimoji} alt="" />
      <div className="i-crown" style={{ left:'66%'}}>
      <FlotingDiv   img={Crown} txt1="Web" txt2=' Developer'></FlotingDiv>
      </div>

      <div className="i-crown" style={{top:'79%' , left:'-4%'}}>
      <FlotingDiv  img={thumbup} txt1="Best Student" txt2='Apriciation '></FlotingDiv>
      </div>
      <div className="blur" style={{background:'rgb(241, 193, 220)'}}> </div>
      <div className="blur" style={{background:'rgb(148, 231, 252)',top:'17rem',width:'20rem',height:'10rem',left:'-10rem'}
    }>
      </div>
        
        </div>
    </div>
  )
}

export default Intro