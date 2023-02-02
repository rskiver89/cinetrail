import React from 'react'
import '../styles/Home.css'
import Slider from '../components/Slider'

function Homepage({apiKey, baseUrl}) {
  return (
    <div className="homepage-container">
      <Slider apiKey={apiKey} baseUrl={baseUrl}/>
    </div>
  )
}

export default Homepage
