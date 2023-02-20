import React from 'react'
import './heading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'


const Heading = () => {
  return (
    <div className='heading'>
        <div className='top-left'>
          <FontAwesomeIcon icon={faUtensils} className='facoff' />
          <h1>Topman <span>Foods</span></h1>            
        </div>
        <div className='top-right'>
          
          <li><a href="/home">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/combo">PRODUCTS</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <button>BOOOK A TABLE</button>
        </div>
    </div>
  )
}

export default Heading