import React from 'react'
import './listoffood.css'
import hero from '../images/about4.jpg'

const Listoffood = () => {
  return (
<div className='list-food'>
<div className='lefty'>
          <div className='lefty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Fruit Combo</span><span className='text-color'>NGN1,500</span></h4>
              <hr />
              <small><i>The perfect fruit combination, just for you</i></small>
            </div>
          </div>
          <div className='lefty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Vegetable Pizza</span><span className='text-color'>NGN1,200</span></h4>
              <hr />
              <small><i>Six wonderful pieces of sliced pizza, with extra vegetables</i></small>
            </div>
        </div>
        <div className='lefty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Standard LunchCombo</span><span className='text-color'>NGN5,000</span></h4>
              <hr />
              <small><i>A combination of different meals for your afternoon, Bon Apetite</i></small>
            </div>
        </div>
        <div className='lefty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Pepperoni Pizza</span><span className='text-color'>NGN2,200</span></h4>
              <hr />
              <small><i>This combination with extra cheese is for those who have a high taste for awesomeness :)</i></small>
            </div>
        </div>

        </div>
        
        <div className='righty'>
        <div className='righty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Lobster Sauce</span><span className='text-color'>NGN2,000</span></h4>
              <hr />
              <small><i>An amazing sauce made of one of the best crustaceans - The Lobster</i></small>
            </div>
        </div>
          <div className='righty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Bread Buns</span><span className='text-color'>NGN500</span></h4>
              <hr />
              <small><i>Bread buns mixed with pepper</i></small>
            </div>
          </div>
          <div className='righty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Noodle Fries</span><span className='text-color'>NGN1,800</span></h4>
              <hr />
              <small><i>Have you tasted noodle fries before? This one might just be the best yet</i></small>
            </div>
          </div>
          <div className='righty-small'>
            
            <img src={hero} className="combo-pic" alt="logo" />
            
            <div className='text-combo'>
              <h4><span>Chicken Burger</span><span className='text-color'>NGN4,220</span></h4>
              <hr />
              <small><i>Delivering the very best of fried chicken</i></small>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Listoffood