import React from 'react'
import './ourchef.css'
import myImage from '../images/Team1.png';
import myIm from '../images/Team2.png';
import myIma from '../images/Team3.png';
import myImag from '../images/Team4.png';


const Ourchef = () => {
  return (
    <div className='team'>
        <div className='text'>
          <h3>Team Members</h3>
          <h1>Our Chief Chefs</h1>
        </div>
        <div className='four-chef'>
            <div className='picss'>
                <div className='main-pic'>
                    <img src={myImage} className="imaage" alt="My Imaage" />
                </div>
                    <h3>Oyindamola. T</h3>
                    <small>chef</small>
                <div><button></button> <button></button> <button></button></div>
            </div>
            <div className='picss'>
                <div className='main-pic2'>
                    <img src={myIm} className="imaage" alt="My Imaage" />
                </div>
                    <h3>TOPMAN</h3>
                    <small>chef</small>
                <div><button></button> <button></button> <button></button></div>
            </div>
            <div className='picss'>
                <div className='main-pic3'>
                    <img src={myIma} className="imaage" alt="My Imaage" />
                </div>
                    <h3>Dayo D1</h3>
                    <small>chef</small>
                <div><button></button> <button></button> <button></button></div>
            </div>
            <div className='picss'>
                <div className='main-pic4'>
                    <img src={myImag} className="imaage" alt="My Imaage" />
                </div>
                    <h3>Oyindamola</h3>
                    <small>chef</small>
                <div><button></button> <button></button> <button></button></div>
            </div>
        </div>
    </div>
  )
}

export default Ourchef