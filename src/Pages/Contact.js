import React from 'react'
import ImageLeft from "../Images/pizzaLeft.jpg";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="left-side" style={{backgroundImage:`url(${ImageLeft})`}}>
                                                            
      </div>
      <div className='right-side'>
        <h1>Contact us</h1>
        <form method='post'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' className='name' placeholder='Enter your full name'/>
          <label htmlFor='email'>Email</label>
          <input type='email' className='email' placeholder='Enter your email'/>
          <label htmlFor='message'>Message</label>
         <textarea type="text" className='message' placeholder='Enter the message' >
          
         </textarea>
         <button type='submit'>Send Message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact

