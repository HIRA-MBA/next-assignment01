import React from 'react'
import cssStyle from "./about.module.css"
import Image from 'next/image'
import jullie from "../../image/jullie.png"


const Aboutpage = () => {
  return (
    <div >
      <h1 className={cssStyle.main}>Gleam & Glow</h1><br/>
     < h3 className={cssStyle.about} >About Us</h3><br/>
      <p className={cssStyle.intro} >At Glam & Glow, we specialize in offering a stunning collection of jewelry, mehndi stencils, hair clips, nail paints, and fancy nails—all at economical prices. Our goal is to provide stylish, high-quality items that enhance your beauty and expression, all available for easy online shopping. Whether you're looking to add a touch of elegance or make a bold statement, we’ve got you covered, without breaking the bank!"</p>
   
      <Image 
  src={jullie} 
  alt="girl" 
  height={200} 
  width={150} 
   style={{ width: '400px', height: '400px', marginLeft: '10px' }} 
/>

    
    </div>
  )
}

export default Aboutpage
