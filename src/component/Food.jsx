import React from 'react'
import './food.css'
import hero from '../images/hero.png'

const Food = () => {
  return (
    <div className='food'>
        <div className='left-food'>
          <div className='text'>
            <h1>Enjoy Our <br /> Delicious Meal</h1>
            <p>Our menu offers something for everybody, from excellent client benefit to <br />the best quality fixings.</p>
            <button>BOOK A TABLE</button>
          </div>
        </div>


        <div className='right-food'>
        <img src={hero} className="App-logo" alt="logo" />
        </div>
    </div>
  )
}

export default Food