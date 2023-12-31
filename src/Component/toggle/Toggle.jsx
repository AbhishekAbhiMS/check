import React from 'react'
import "./toggle.css"
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { ThemeContext} from '../../Context'
import { useContext } from 'react'
const Toggle = () => {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state;
    let handel=()=>{
      theme.dispatch({type:"toggle"})
    }
  
  return (
    <div className='toggle'  onClick={handel}><Moon></Moon><Sun></Sun>
    <div className="t-button"  style={darkMode?{left:"2px"}:{right:"2px"}}></div></div>
  )
}

export default Toggle