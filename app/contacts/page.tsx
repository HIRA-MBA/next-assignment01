import React from 'react'
import cssStyle from "./contacts.module.css"

const ContactUsPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form className={cssStyle.form}>
      <label>Whatsapp
      <input type="text" placeholder='Enter your number'/></label> 
      <br/>
      <br/>
      <label  >Email
      <input type="email" placeholder="xyz@gmail.com"/></label>
      <br/>
      <br/>
      <button type="submit">Submit</button>
      
      </form>
    </div>
  )
}

export default ContactUsPage