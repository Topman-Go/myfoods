import React from 'react'
// import { Card } from 'react-bootstrap/Card'
import './services.css'
// import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faCartPlus, faHeadphones, faUserTie, faMinus } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
  return (
    <div className='my-services'>
      <div className='tops'>
        <h1>Our Services <span><FontAwesomeIcon icon={faMinus} className='fadasshh' /></span></h1>
      </div>
      <div className='buttoms'>
        <div className='cards'>
        {/* <div className='card-title'> */}
          <FontAwesomeIcon icon={faUserTie} className='facof' />
          <h2>Chief Chef</h2>
          <p>We hire only the best chefs in Africa. All of whom undergo a 6 months
            training under our chief chef, who is non other than Mr. Dayo D1, Award winner 
            of the Nigerian Men can cook award 2002</p>
        {/* </div> */}
        </div>

        <div className='cards'>
        {/* <div className='minime'> */}
          <FontAwesomeIcon icon={faUtensils} className='facof' />
          <h2 className="mb-2 text-muted">Healthy Food</h2>
          <p>
          We use only the healthiest methods to cook our foods. Routine cleanups
          have also been set up for our equipments, utensils, furnitures and co.
          </p>
        {/* </div> */}
        </div>

        <div className='cards'>
        {/* <div> */}
        <FontAwesomeIcon icon={faCartPlus} className='facof' />
          <h2 className="mb-2 text-muted">Online Order</h2>
          <p>
          You can now get your meals delivered to your doorstep by placing your 
          orders on our website or mobile app.
          </p>
        {/* </div> */}
        </div>

        <div className='cards'>
        {/* <div> */}
          <FontAwesomeIcon icon={faHeadphones} className='facof' />
          <h2 className="mb-2 text-muted">Customer Care</h2>
          <p>
          Any issues? We will resolve them as soon as they appear with our hardworking 
          Customer support team who are made available to you 24/7
          </p>
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Services