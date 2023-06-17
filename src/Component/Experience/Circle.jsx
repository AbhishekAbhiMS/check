import React, { useEffect, useState } from 'react'
import "./experience.css"
import { ThemeContext} from '../../Context'
import { useContext } from 'react'
const Circle = (p) => {
  const theme=useContext(ThemeContext)
   const darkMode=theme.state;

  return (
    <div className="achivements">
    <div className="circle" >{p.number}</div>
    <span style={{color:darkMode?"white":''}}>{p.txt1}</span>
    <span>{p.txt2}</span>
    
</div>
  )
}

export default Circle