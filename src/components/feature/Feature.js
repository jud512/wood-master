import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='feature-container__feature'>
        <div className="feature-container__feature-title">
            <div></div>
            <h1>{title}</h1>
        </div>
        <div className="feature-container__feature-text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature