import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import ratingFilter from './reducers/ratingFilter'
import titleFilter from './reducers/titleFilter'
import movieList from './reducers/movieList'

const store = createStore(
  combineReducers({
    ratingFilter,
    titleFilter,
    movieList
  }),
  composeWithDevTools()
)

export default store
