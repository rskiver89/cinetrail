import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import '../styles/Slider.css'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import Genres from '../components/Genres'

function Slider({apiKey, baseUrl}) {
  const [upcomingMovies, setUpcomingMovies]=useState([])
  const [index, setIndex]=useState(0)
  const imageBaseUrl=process.env.REACT_APP_IMAGE_BASE_URL
  const [movieRating, setMovieRating] = useState(0)

  useEffect(() => {
    axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    .then(res=>{
      // console.log(res.data.results)
      setUpcomingMovies(res.data.results)
      setMovieRating(res.data.results[index].vote_average)
    })
    .catch(err=>console.log(err))
  }, [index])

  const sliderStyle = {
    backgroundImage:`url("${imageBaseUrl}/${upcomingMovies[index]?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    backgroundRepeat: "no-repeat",
    position: "relative"
  }

  const handleRight=()=>{
    setIndex(index + 1)
    if (index === upcomingMovies.length - 1) {
      setIndex(0)
    }
  }

  const handleLeft=()=>{
    setIndex(index - 1)
    if (index === 0) {
      setIndex(upcomingMovies.length - 1)
    }
  }
  
  return (
    <div style={sliderStyle}>
      <div className='slider-overlay'></div>
      <MdKeyboardArrowRight onClick={handleRight} className="right-arrow" />
      <MdKeyboardArrowLeft onClick={handleLeft} className="left-arrow" />
      <div className='slider-info'>
        <h1>{upcomingMovies[index]?.title}</h1>
        <p className='slider-description'>{upcomingMovies[index]?.overview.slice(0, 130)}...</p>
        <Genres movieGenres={upcomingMovies[index]?.genre_ids} apiKey={apiKey} baseUrl={baseUrl} />
        <p>Release Date: {upcomingMovies[index]?.release_date}</p>  
        <Rating movieRating={movieRating/2} />
        <Link to={`/moviedetails/${upcomingMovies[index]?.id}`}>See Details</Link>
      </div>
    </div>
  )
} 

export default Slider
