import React, {useEffect, useState} from 'react'
import '../styles/Home.css'
import Slider from '../components/Slider'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

function Homepage({apiKey, baseUrl}) {
  const [popularMovies, setPopularMovies]=useState([])
  const [topRatedMovies, setTopRatedMovies]=useState([])
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [page, setPage]=useState([1])

  useEffect(() => {
    axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
    .then(res=>{
      console.log(res.data.results)
      setPopularMovies(res.data.results)
    })
    .catch(err=> console.log(err))
  }, [page])

  useEffect(() => {
    axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}&page=${page}`)
    .then(res=>{
      setTopRatedMovies(res.data.results)
    })
    .catch(err=> console.log(err))
  }, [])

  return (
    <div className="homepage-container">
      <Slider apiKey={apiKey} baseUrl={baseUrl}/>
      <div className="movies-wrapper">
        <div className="popular-container">
        <h3 className="popular-title">Popular</h3>
          <div className="popular-cards-wrapper">
        {
          popularMovies?.map(movie => {
            return <MovieCard height="300px" imageUrl={movie.poster_path} cardStyle={"popular-card"} data={movie} radius={"16px"}/>
          })
        }
          </div>
        </div>

        <div className="page-numbers">
          <p>Select Page</p>
        {
          pageNumbers.map(item=>{
            return <p onClick={()=>setPage(item)}>{item}</p>
          })
        }
        </div>
          <div className="top-rated-container">
            <div className="top-rated-cards-wrapper">
            <h3>Top Rated</h3>
          {
          topRatedMovies?.map(movie => {
            return <MovieCard height="100px" imageUrl={movie.backdrop_path} cardStyle={"top-rated-card"} data={movie} radius={"8px"}/>
          })
        }
          </div>
          </div>
      </div>
    </div>
  )
}

export default Homepage
