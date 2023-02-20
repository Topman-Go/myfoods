import React from 'react'
import './mybutin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Mybutin = () => {
  return (
    
        <button class='form-control' className="fixed-button">
        <FontAwesomeIcon icon={faArrowUp} className='butinup' />
        </button>
    
  )
}

export default Mybutin