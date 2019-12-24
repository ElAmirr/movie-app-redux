const defaultMovies = [
    {
      id: 'titanic',
      title: 'Titanic',
      rating: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51G13d3EwBL.jpg'
    },
    {
      id: 'inception',
      title: 'Inception',
      rating: 4,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51ShRC1YMrL.jpg'
    }
  ]
  const movieListReducer = (state = defaultMovies, action) => {
    if (action.type === 'ADD_MOVIE')
      return state.concat({ ...action.newMovie, id: Math.random() })
    return state
  }
  
  export default movieListReducer
  