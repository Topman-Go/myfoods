import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-left'>
          <iframe
          width="100%"
          height="370"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8851856965694!2d3.34320711426848!3d7.139273617680197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61fc9ec0c3d0a852!2sNYSC%20Mini%20Secretariat%20%2C%20Oke%20Ilewo%2C%20Abeokuta%20Ogun%20State!5e0!3m2!1sen!2sng!4v1640728238812!5m2!1sen!2sng"
          allowFullScreen
          />
      </div>
      <div className='contact-right'>
        <div className='name-email'>
          <div className='your-name'>
            <input type="text" class='form-control' id="name" placeholder="Your Name" />
          </div>
          <div className='email-1'>
            <input type="email" class="form-control" id="email" placeholder="Your Email" />
          </div>
        </div>
        <div className='subject1'>
          <input type="text" class='form-control' id="subject" placeholder="Subject" />
        </div>
        <div className='text-area'>
          <textarea name="text" class='form-control' id="text" placeholder='Message' cols="30" rows="6"></textarea>
        </div>
        <button className='send-me'>SEND MESSAGE</button>
      </div>
    </div>
  )
}

export default Contact