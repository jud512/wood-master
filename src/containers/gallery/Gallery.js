import React, { useState, useEffect } from 'react'
import { data } from '../../data/data-gallery'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useTransition } from 'react-spring'
import './gallery.css'

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const { url } = data[index];

  const [fade, setFade] = useState({
    fade: 'fade',
  })


  useEffect(() => {
    if(fade.fade === 'fade'){
      setFade({
        fade: 'fade2'
      })
    } else {
      setFade({
        fade: 'fade'
      })
    }
  }, [index])

  // const transition = useTransition(data[index], img => img.id, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 }
  // })

  const checkNumber = (number) => {
    if(number > data.length - 1){
      return 0;
    }
    if(number < 0){
      return data.length - 1;
    }
    return number;
  }

  const nextImage = () => {
    setIndex((index) => checkNumber(index+1))
  }

  const prevImage = () => {
    setIndex((index) => checkNumber(index - 1))
  }



  return (
    <div className="gallery section__padding" id='gallery'>
    
      <div className='gallery-heading'>
        <h1 className='gallery-text heading-text'>Szépség-morzsák</h1>
      </div>
      <div className='gallery-container'>
      <div className='gallery-container_button gallery-container_item'>
        <button className='gallery-container_prev-btn' onClick={prevImage}>
          <FaChevronLeft />
        </button>
      </div>

      <div className="gallery-container_image gallery-container_item">
        <img src={url} alt="kép" className={fade.fade}/>
      </div>
      
      <div className='gallery-container_button gallery-container_item'>
        <button className='gallery-container_next-btn' onClick={nextImage}>
          <FaChevronRight />
        </button>
      </div>
    </div>

    <div className="gallery-images_small">
      {
        data.map((img) => {
          return (
            <div className="gallery-images_small-item" id={img.id}>
              <img  src={img.url} alt={img.id} onClick={() => {
                const id= parseInt(img.id);
                console.log(id);
                setIndex((index) => id - 1);
              }}/>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Gallery

