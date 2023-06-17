import React from 'react'
import "./navbar.css"
import Toggle from '../toggle/Toggle'
import { Link } from "react-scroll"
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name" >
                    ABHISHEK MS
                </div>
                <Toggle/>

            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                    <Link spy={true} to='Navbar' activeClass='activeClass' smooth={true}>
                        <li>Home</li></Link>
                         <Link spy={true} to='TechnicalSkills' smooth={true}><li>TechnicalSkills</li></Link>
                         <Link spy={true} to='Experiance'  smooth={true}><li>Experiance</li></Link>
                         <Link spy={true} to='Projects' smooth={true}><li>Projects</li></Link>
                        <Link spy={true} to='Education'  smooth={true}> <li>Education</li></Link>
                    </ul>

                </div>
                <Link spy={true} to='Contact'  smooth={true}>
                <button className="button n-button">Contact </button></Link>
            </div>

        </div>
    )
}

export default Navbar