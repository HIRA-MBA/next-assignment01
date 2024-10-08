import React from 'react'
import Image from 'next/image'
import handdesign1 from '../../image/handdesign1.jpg'
import design2 from '../../image/hand-design2.jpg'
import nails from '../../image/nails.jpg'
import paints from '../../image/paints.jpg'
import cssStyle from './products.module.css'


const OurProductspage = () => {
  return (
    <div >
      <h3 className={cssStyle.product}>Our Products</h3>
      <br/>
      <br/>
      <div><h4>Mehndi</h4>
      <br/>
      <Image src={handdesign1}  alt="design1" 
  height={200} 
  width={150} 
   style={{ width: '100px', height: '100px', marginLeft: '10px' }} 
/>
    <Image src={design2}  alt="design2" 
  height={200} 
  width={150} 
   style={{ width: '100px', height: '100px', marginLeft: '10px' }} 
/>   
      
      </div>
      <br/><br/>
      <div><h4>Nails Paints</h4>
      <br/>
      <Image src={nails}  alt="Nail Paints" 
  height={200} 
  width={150} 
   style={{ width: '100px', height: '100px', marginLeft: '10px' }} 
/>
    <Image src={paints}  alt=" fancy nails " 
  height={200} 
  width={150} 
   style={{ width: '100px', height: '100px', marginLeft: '10px' }} 
/>   
      
      </div>






    </div>
  )
}

export default OurProductspage
