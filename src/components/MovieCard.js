import React, { useState, useContext } from 'react'
import '../styles/Movie.css'
import Rating from './Rating'
import { ThemeContext } from '../context/ThemeContext'
import {Link} from 'react-router-dom'

function MovieCard({data, cardStyle, imageUrl, height, radius}) {
    const {darkMode, setDarkMode}=useContext(ThemeContext);
    const [movieRating, setMovieRating] = useState(0)
    const imageBaseUrl=process.env.REACT_APP_IMAGE_BASE_URL
    const imageStyle={
        backgroundImage: `url("${imageBaseUrl}/${imageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: height,
        width: "200px",
        borderRadius: radius,
        position: "relative"
    }
    
  return (
    <Link to={`/moviedetails/${data?.id}`} className={cardStyle}>
        <div style={imageStyle}>
            <div className="movie-info-top">
                Rating: <Rating movieRating={movieRating/2} />
            </div>
            <div className="movie-info-bottom">
                <p>
                {data?.title}
                </p>
            </div>
            </div>
        {
            cardStyle==="top-rated-card"
            ? <p className={darkMode ? "top-rated-card" : "top-rated-card top-rated-card-light"}> {data.title} </p>
            :null
        }
</Link>
  )
}

export default MovieCard
