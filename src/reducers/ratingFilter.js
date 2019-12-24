const filterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'CHANGE_RATING_FILTER':
        return action.newRating
      default:
        return state
    }
  }
  
  export default filterReducer
  