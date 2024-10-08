import React from 'react'
import Image from 'next/image'
import clips from '../../../image/clips.jpg'

const SaleItems = () => {
  return (
    <div>
      <h2>End of season Sale</h2>
      <br/>
      <br/>
      <h4>Hair clips</h4>
      <br/>
      <br/>
      <Image src={clips} alt='hairclips' height={100} width={100} 
      style={{height:'100px', width:'100px', marginLeft:'10px' } }/>
    </div>
  )
}

export default SaleItems
