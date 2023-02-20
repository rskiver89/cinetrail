import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Rating from '../components/Rating';
import Review from '../components/Review';
import '../styles/Movie.css';


function MovieDetails({baseUrl, apiKey}) {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    const [movie,setMovie]  = useState({})
    const {movieid} = useParams()
    const [videoLink, setVideoLink] = useState('')
    const [movieRating, setMovieRating] = useState(0)
    const [reviews, setReviews] = useState([])
    const [reviewNumber, setReviewNumber] = useState(0)
    const [totalReviews, setTotalReviews] = useState(0)
    const imageBase=process.env.REACT_APP_IMAGE_BASE_URL




    useEffect(() => {
        axios.get(`${baseUrl}/movie/${movieid}?api_key=${apiKey}`)
          .then(res => {
            setMovieRating(res.data.vote_average);
            setMovie(res.data);
          })
          .catch(err => console.log(err));

    
          axios.get(`${baseUrl}/movie/${movieid}/videos?api_key=${apiKey}`)
          .then(res => {
              const youtubeLink = res.data.results.filter(item=>item.site==="YouTube" && item.type==="Trailer")
              setVideoLink(youtubeLink[0].key)
          })
      .catch(err => console.log(err));

    
        axios.get(`${baseUrl}/movie/${movieid}/reviews?api_key=${apiKey}`)
          .then(res => {
            setTotalReviews(res.data.total_results);
            setReviews(res.data.results);
          })
          .catch(err => console.log(err));
      }, [baseUrl, apiKey, movieid]);


      return (
        <div className={darkMode ? "movie-details-container" : "movie-details-container details-light"}>
            {
                videoLink
                    ? <div className='trailer-container'>
                        <ReactPlayer
                            className='trailer-player'
                            url={`https://www.youtube.com/watch?v=${videoLink}`}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    : <div
                        className='trailer-container-blank'
                        style={{
                            backgroundImage: `url("${imageBase}/${movie?.backdrop_path}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <p>No Trailer Available</p>
                    </div>
            }
            <div className={darkMode ? "details-container" : "details-container details-light"}>
                <div className="title-container">
                    <h1>{movie?.title}</h1>
                </div>
                <Rating movieRating={movieRating / 2} />
                <div className="info-container">
                    <img src={`${imageBase}/${movie?.poster_path}`} className="details-poster" alt={`${movie?.title} poster`} />
                    <div className="movie-info">
                        <h2>{movie?.tagline}</h2>
                        <h4>{movie?.overview}</h4>
                        <h4>Status: {movie?.status}</h4>
                        <h4>Runtime: {movie?.runtime} min</h4>
                        <h4>Budget: {movie?.budget}</h4>
                        <h4>Genres: {movie?.genres?.map(genre => genre.name).join(', ')}</h4>
                    </div>
                </div>
                <div className="review-container">
                    <p className="reviews-title">Reviews</p>
                    {
                        reviews.slice(0, reviewNumber).map(item=>{
                            return <Review key={item.id} review={item} />
                        })
                    }

                        {
                            reviewNumber>=totalReviews
                            ? 
                            <p className="review-number" onClick={()=>setReviewNumber(3)}>End of reviews </p>
                            :
                            <p className="review-number" onClick={()=>setReviewNumber(reviewNumber+3)}>Read reviews </p>
                        }
                </div>
            </div>
        
    </div>
  )
}

export default MovieDetails
