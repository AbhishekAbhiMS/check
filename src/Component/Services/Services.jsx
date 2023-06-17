import React from 'react'
import './service.css'
import HeartEmoji from '../../image/heartemoji.png'
import Humble from '../../image/humble.png'
import Glasses from '../../image/glasses.png'
import Card from '../Card/Card'
import resume from '../Ressume/resume.pdf' 
import { ThemeContext} from '../../Context'
import { useContext } from 'react'


const Services = () => {
  const theme=useContext(ThemeContext)
  const darkMode=theme.state;
  return (
   <div className="services" id='TechnicalSkills'>
{/* left */}
    <div className="awesome">
        <span style={{color:darkMode?"white":''}}>My Main </span>
        <span>Technical Skills</span>
        <span style={{color:darkMode?"white":''}}>These are my few main skills that i learn,  As a civil background  <br /> i learn these 
            Skills to become a Fullstack java developer  </span>
            <a href={resume} download  draggable><button className="button s-button">Downlode CV</button></a>
<div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>
{/* right */}
<div className="cards">
  <div style={{left:'15rem',top:'18rem'}}> 
  <Card emogi={HeartEmoji} heading='BackEnd' content='Complete Java, SQL(RDBMS)..'></Card> 
    </div>
    <div style={{top:'13rem'}}>
    <Card emogi={Humble} heading='Tools/IDE' content='Eclipse,Oracal 10g,Intellij, Visual Studio..'></Card>

    </div>
    <div style={{left:'15rem'}}>
    <Card  emogi={Glasses} heading='FrontEnd' content='HTML,CSS,JacaScript,
React,NodeJs,Bootstrap..'></Card>
    </div>


</div>
   </div>
  )
}

export default Services