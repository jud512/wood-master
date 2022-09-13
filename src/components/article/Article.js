import React from 'react'
import './article.css'

const Article = ({id, img, date, title}) => {
  return (
    
        <div className="blog-container_article">
            <div className="blog-container_article-image">
                <img src={img} alt={id} />
            </div>
            <div className="blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>                
                 <p>Folytatás</p>
            </div>
           
        </div>
    
  )
}

export default Article