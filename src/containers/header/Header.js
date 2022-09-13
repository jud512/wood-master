import React from 'react'
import './header.css'
import image from '../../assets/header-img.jpg';


const Header = () => {
  return (
    <div className='header-content'>        
        <div className="header-content__image">            
            <img src={image} alt="bicycle" />
        </div>
        <div className="header-content__text">
          <h1>Wood Master</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facere aliquid repellat voluptatem consectetur eaque animi temporibus aliquam optio voluptatibus?</p>
        </div>
    </div>
    
  )
}

export default Header