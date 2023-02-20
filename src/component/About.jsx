import React from 'react'
import './about.css'
import myIm from '../images/about1.png';
import myIma from '../images/about2.jpg';
import myImag from '../images/about3.jpg';
import myImage from '../images/about4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  return (
    <div className='my-main'>
      <div className="about-lefts">
      <div className="them-two">
      <div className='pic'>
            <img src={myIm} className="imaaage" alt="My Imaage" />
          </div>
          <div className='pic2'>
            <img src={myIma} className="imaaage" alt="My Imaage" />
          </div>
      </div>
      <div className="them-two">
      <div className='pic3'>
          <img src={myImag} className="imaaage" alt="My Imaage" />
        </div>
        <div className='pic4'>
          <img src={myImage} className="imaaage" alt="My Imaage" />
        </div>

      </div>     
    </div>
      
      <div className='about-right'>
          <div className='new-div'>
              <h2>About Us</h2>
            <div className='icons'>
             <FontAwesomeIcon icon={faUtensils} className='facofff' />
              <h1><b>Topman Food's Story</b></h1>
            </div>
          </div>
        <div>
                <p className='para'>CEO, Komolafe Tope, opened the first Topman Foods Restaurant in Lagos on January 27, 
                  2022. Today, there are 7 branches all over West Africa. Topman Foods Restaurants are well known with 
                  a substantial gathering of people including families, kids, seniors, and business experts. 
                  Our benevolent condition is perfect for praising unique events, facilitating a business lunch, 
                  or assembling for a flavorful dinner with loved ones. Open day by day for lunch and dinner, 
                  Topman Foods offers a choice of naturally arranged things utilizing just the best fixings accessible.
                </p>
                <p className='para'>Our top picks incorporate crisp fish, rotisserie chicken, infant back pork ribs. New prepared pot pie, 
                  strength plates of mixed greens, wood-let go pizzas, pasta, sandwiches, burgers, and more. Adnegs Food's 
                  heated merchandise and treats including our Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake, 
                  and delectably rich cream cheddar pies are prevalent top choices with our visitors.
                </p>
            
          <div className='years'>
            <div>
              <h3>5</h3>
              <p>Years of <br /><b>EXPERIENCE</b></p>
            </div>
            <div> 
              <h3>50</h3>
              <p>Popular <br /><b>MASTER CHEFS</b></p>
            </div>
            
          </div>
          <button className='mybut'>READ MORE</button>
        </div>
      </div>
          
    </div>
  )
}

export default About