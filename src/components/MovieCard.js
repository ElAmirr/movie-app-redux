import React from 'react'
import Rating from './Rating'

// https://images-na.ssl-images-amazon.com/images/I/51G13d3EwBL.jpg
// ★★★★☆

const MovieCard = ({ movie = {} }) => (
  <div className="movie-card">
    <div className="movie-rating">
      <Rating count={movie.rating} />
    </div>
    <div
      className="movie-image"
      style={{
        backgroundImage: `url(${movie.image})`
      }}
    />
    <div className="movie-title">{movie.title}</div>
  </div>
)

export default MovieCard