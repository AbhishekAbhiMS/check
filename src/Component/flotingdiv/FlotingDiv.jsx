import React from 'react'
import './floting.css'
import { motion } from "framer-motion"

const FlotingDiv = (image) => {
  const transition={duration:2,type:'spring'}

  return (
    <motion.div initial={{left:'-40%'}}
    whileInView={{left:'-20%'}}
    transition={transition} className="flotingdiv">
        <img   src={image.img} alt="" />
        <span>
          { image.txt1}
            <br />
           {image.txt2}
        </span>
    </motion.div>
   
  )
}

export default FlotingDiv