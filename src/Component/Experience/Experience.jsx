import React from 'react'
import Circle from './Circle'
import "./experience.css"
import { useState } from 'react'
import { useEffect } from 'react'
const Experience = () => {


//   let [n1,Setn1]=useState(0)
//   let[n2,setn2]=useState(0)
//   let [n3,setn3]=useState(0)


// useEffect(()=>{
//  setInterval(() => {
//   Setn1(n1++)
//  }, 60000000);
//  setInterval(() => {
//   setn2(n2++)
//  }, 600000);
//  setInterval(() => {
//   setn3(n3++)
//  }, 6000);
  
// },[n1])
  return (
   <div className="experience" id='Experiance'>
   <Circle number="0" txt1='Year' txt2='Experience'></Circle>
   <Circle number="3" txt1='Completed' txt2='Projects'></Circle>
   <Circle number='8' txt1='Months Coaching' txt2='in JSpiders'></Circle>
   </div>
  )
}

export default Experience