const titleFilter = (state = '', action) => {
    switch (action.type) {
      case 'CHANGE_TITLE_FILTER':
        return action.newTitle
      default:
        return state
    }
  }
  
  export default titleFilter
  