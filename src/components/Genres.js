import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Genres({apiKey, baseUrl, movieGenres}) {
    const [allGenres, setAllGenres] = useState([])


    useEffect(() => {
        axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
        .then(res=>{
        setAllGenres(res.data.genres)
        //   console.log(res.data.results)
        })
        .catch(err=>console.log(err))
        console.log(movieGenres)
      }, [movieGenres])

  return (
    <div className='genre-container'>
        <p>Genres: &nbsp; </p>
        {
        movieGenres?.map((id, index) => {
            for (let i = 0; i < allGenres.length; i++) {
                if (id == allGenres[i].id) {
                    return <p key={index}>{index===movieGenres.length-1 ? `${allGenres[i].name}` : `${allGenres[i].name},`} &nbsp; </p>
                }
        }
        })
        }
    </div>
    
  )
}

export default Genres
