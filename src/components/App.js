import React from 'react'

import MovieList from './MovieList'
import RatingFilter from './RatingFilter'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Movie App</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-name"
            placeholder="Search by movie name"
          />
          <div className="search-min-rating">
            <label>Min rating</label>
            <div className="search-min-rating__stars">
              <RatingFilter />
            </div>
          </div>
        </div>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  )
}

export default App
