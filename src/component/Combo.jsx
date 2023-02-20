import React from 'react'
import './combo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faBurger, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Combo = () => {
  return (
    <div className='most-pop'>
      <div className='combos'>
        <div className='teams'>
          <h5>Delicious meals from Topman Foods </h5>
          <h4>Most Popular Delicacies</h4>
          <div className='mine'>
            <div className='foods'>
              <FontAwesomeIcon icon={faCoffee} className='myicon' />
              <p>Popular<br /><b>Breakfast</b></p>
            </div>
            <div className='foods2'> 
                <FontAwesomeIcon icon={faBurger} className='myicon' />
                <p>Special<br /><b>Lunch</b></p>
            </div>
            <div className='foods3'> 
                <FontAwesomeIcon icon={faUtensils} className='myicon' />
                <p>Lovely<br /><b>Dinner</b></p>
            </div>
          </div>
        </div>
      </div>

      
      </div>   
     
    
  )
}

export default Combo