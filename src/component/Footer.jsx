import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation, faPhone, faEnvelopesBulk, faSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='top-footer'>
            <div className='four-top'>
                <h3>Topman Foods</h3>
                
                <li><a href="/heading"><FontAwesomeIcon icon={faSquare} className='butinup' />Home</a></li>
                <li><a href="/about"><FontAwesomeIcon icon={faSquare} className='butinup' />About Us</a></li>
                <li><a href="/combo"><FontAwesomeIcon icon={faSquare} className='butinup' />Products</a></li>
                <li><a href="/contact"><FontAwesomeIcon icon={faSquare} className='butinup' />Contact</a></li>
                
            </div>
            <div className='four-top'>
                <h3>Contact</h3>
                <p><FontAwesomeIcon icon={faMapLocation} className='buti' /> Abeokuta, Ogun State.</p>
                <p><FontAwesomeIcon icon={faPhone} className='buti' /> +2347062420768</p>
                <p><FontAwesomeIcon icon={faEnvelopesBulk} className='buti' /> info@email.com</p>
            </div>
            <div className='four-top'>
                <h3>Opening</h3>
                <h4>Monday - Saturday</h4>
                <p>10AM - 9PM</p>
                <h4>Sunday</h4>
                <p>12PM - 4PM</p>
                </div>
            <div className='four-top'>
                <h3>Newsletter</h3>
                <p>Get updated on our new dishes and delicious discounts by subscribing to our newsletter.</p>
                <div class="input-container">
                    <input type="email" class="input-field" id="email" placeholder="Your Email" />
                    <button class="input-button">SIGN UP</button>
            </div>
            </div>
        </div>
        {/* <hr /> */}
        <div className='down-footer'>
            <div className='myhr'><hr /></div>
            <div className='sub-footer'>
                <div className='all-rights'>
                    <p>© Topman Foods, All Rights Reserved</p>
                </div>
                <div className='faqs'>
                    <p className='home-border'>Home</p>
                    <p>FAQs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer