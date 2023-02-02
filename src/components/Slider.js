import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import '../styles/Slider.css'
import {Link} from 'react-router-dom'

function Slider({apiKey, baseUrl}) {
  const [upcomingMovies, setUpcomingMovies]=useState([])
  const [index, setIndex]=useState(0)
  const imageBaseUrl="https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(res=>{
      console.log(res.data.results)
      setUpcomingMovies(res.data.results)
    })
    .catch(err=>console.log(err))
  }, [index])

  const sliderStyle = {
    backgroundImage:`url("https://image.tmdb.org/t/p/w500/${upcomingMovies[index]?.backdrop_path}")`,
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
        <p>Release Date: {upcomingMovies[index]?.release_date}</p>
        <Link to={'/'}>See Details</Link>
      </div>
    </div>
  )
}

export default Slider
