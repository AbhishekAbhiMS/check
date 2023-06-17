import React from 'react'
import './card.css'
import { ThemeContext} from '../../Context'
import { useContext } from 'react'
const Curd = (props) => {
  const theme=useContext(ThemeContext)
   const darkMode=theme.state;
  return (
    <div className="card">
      <img src={props.emogi} alt="" />
      <span>{props.heading}</span>
      <span style={{color:darkMode?"white":''}}>{props.content}</span>
     <button className=' button c-button'>MORE</button>
    </div>
  )
}

export default Curd