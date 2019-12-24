import React from 'react'
import { connect } from 'react-redux'

import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

const MovieList = ({ list = [] }) => (
  <div className="movie-list">
    {list.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
    <AddMovie />
  </div>
)

const mapStateToProps = state => ({
  list: state.movieList.filter(movie => movie.rating >= state.ratingFilter)
})

export default connect(mapStateToProps)(MovieList)
