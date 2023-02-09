import React from 'react'
import StarRatings from 'react-star-ratings'

function Rating({movieRating}) {
    
  return (
    <StarRatings
    rating={movieRating}
    starRatedColor="red"
    numberOfStars={5}
    name='rating'
    starDimension='15px'
    starSpacing='1px'
  />
  )
}

export default Rating
