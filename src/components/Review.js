import React, { useState, useContext } from 'react'
import '../styles/Review.css'
import { ThemeContext } from '../context/ThemeContext'
import avatar from '../assets/avatar.png'


function Review({ review }) {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    const imageBase=process.env.REACT_APP_IMAGE_BASE_URL
    const [imageError, setImageError] = useState(false)
    const [seeMore, setSeeMore] = useState(false)




  return (
    <div className='review'>
        <div className='avatar-container'>
            <img className='avatar' src={imageError ? avatar : `${imageBase}/${review?.author_details.avatar_path}`} onError={()=>setImageError(true)} />
        </div>
        <p>{review?.author}</p>

    {
        !seeMore
        ?
        <p>{review?.content?.slice(0, 300)}... <span className='read-more' onClick={()=>setSeeMore(true)}>read more</span></p>
        :
        <p> {review?.content} <span className='read-less' onClick={()=>setSeeMore(false)}>read less</span></p>
    }
    
    </div>
  )
}

export default Review
