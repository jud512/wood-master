import React, { useState } from 'react'
import { Article } from '../../components'
import './blog.css'
import {data, data_main} from '../../data/data-blog'

const Blog = () => {
    const [articles, setArticles] = useState(data);
  return (
    <div className='blog section__padding' id='blog'>
        <div className="blog-heading">
            <h1 className="blog-text heading-text">
                A kreativitás már az előszobában van
            </h1>
        </div>
        <div className="blog-container">
            <div className="blog-container_groupA">
                <Article  img={data_main.img} id={data_main.id} date={data_main.date} title={data_main.title} />
            </div>
            <div className="blog-container_groupB">
               { 
                articles.map((article) => {
                    const {id, img, date, title} = article;
                    return(
                        <Article img={img} id={id} date={date} title={title}/>
                    );
                }
                )}
            </div>
        </div>
    </div>
  )
}

export default Blog