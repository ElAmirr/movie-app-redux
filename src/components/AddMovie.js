import React, { Component } from 'react'
import { connect } from 'react-redux'

import Rating from './Rating'

class AddMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      title: '',
      rating: 0,
      image: ''
    }
  }
  togglePopup = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  onChange = stateName => e => {
    this.setState({
      [stateName]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="button" value="+" onClick={this.togglePopup} />
        {this.state.isModalOpen && (
          <div onClick={this.togglePopup} className="add-movie-modal">
            <div className="add-movie-form" onClick={e => e.stopPropagation()}>
              <div>
                <label>
                  Title{' '}
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.onChange('title')}
                  />
                </label>
              </div>
              <div>
                <label>
                  Image{' '}
                  <input
                    type="text"
                    value={this.state.image}
                    onChange={this.onChange('image')}
                  />
                </label>
              </div>
              <div>
                <label style={{ display: 'flex' }}>
                  Rating{' '}
                  <Rating
                    count={this.state.rating}
                    onChange={rating => this.setState({ rating })}
                  />
                </label>
              </div>
              <div>
                <input
                  type="button"
                  value="Add"
                  onClick={() => {
                    this.props.onAdd(this.state)
                    this.togglePopup()
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAdd: state => {
    const cleanState = { ...state }
    delete cleanState.isModalOpen
    dispatch({
      type: 'ADD_MOVIE',
      newMovie: cleanState
    })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(AddMovie)