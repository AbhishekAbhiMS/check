
import React, { useContext } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Intro from "./Component/Intro/Intro"
import Skill from './Component/Services/Services'
import "./App.css"
import Experience from './Component/Experience/Experience'

import Projects from './Component/Portfolio/Portfolio'
import Education from './Component/TestiMonials/Testmonial'
import Contact from './Component/contact/Contact'
import Footer from './footer/Footer'

import { ThemeContext } from './Context'
const App = () => {
  let them=useContext(ThemeContext);
 let darkMode=them.state;
 
  return (
 
    <div className="App"  style={{background: darkMode?'black':'',color:darkMode?'white':'' }}>
  <Navbar></Navbar>
  <Intro></Intro>
 <Skill></Skill>
<Experience></Experience>

<Projects></Projects>
<Education></Education> 
<Contact></Contact> 
<Footer></Footer>

 </div>

  )
}

export default App

