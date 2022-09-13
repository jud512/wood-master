import React, { useState } from 'react'
import { Feature } from '../../components'
import './about.css'
import { data } from '../../data/data-about'


const About = () => {
    const [features, setFeatures] = useState(data);

  return (
    <div className="about section__margin" id='about'>
    <div className="about-heading">
        <h1>Bemutatkozás</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eveniet veritatis amet quos similique ab fuga asperiores eum sit soluta non dignissimos velit beatae laudantium minima maxime iure dolorum nihil totam, qui molestiae? Vero maiores aspernatur ex voluptas explicabo odit at quas optio? Temporibus sit molestias quibusdam iste voluptas autem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore necessitatibus sit iusto ducimus non aliquid labore cupiditate, saepe repellendus quo laudantium commodi quas delectus, dicta voluptatem ea iure? Dolorum recusandae ipsa cumque similique dolores iste, impedit eius ab, libero quaerat ratione eveniet. Consequuntur nisi libero, quia excepturi perferendis voluptas aliquid reprehenderit quae mollitia dolorum maiores ex nesciunt quod obcaecati est voluptates labore, eius a aut ullam accusamus repellendus. Eum, quas vero aut rem ex consequuntur sed corrupti numquam natus voluptatibus fugiat expedita deserunt est ullam, minima, porro aliquid sapiente neque alias! Tempora voluptatem necessitatibus earum aliquam officiis adipisci itaque.
        </p>
    </div>
    <div className='about-container'>
        {
        features.map((feature) => {
            const {id, title, text} = feature;
            return (
                <Feature id={id} title={title} text={text}/>
            );
        })
        }
    </div>
    </div>
  )
}

export default About