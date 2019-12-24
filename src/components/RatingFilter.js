import { connect } from 'react-redux'

import Rating from './Rating'

const mapStateToProps = state => ({
  count: state.ratingFilter
})

const mapDispatchToProps = dispatch => ({
  onChange: newRating =>
    dispatch({
      type: 'CHANGE_RATING_FILTER',
      newRating
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rating)
