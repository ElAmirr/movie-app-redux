import React from 'react'

const noop = () => {}

const Rating = ({ count, onChange = noop }) => (
  <div>
    {Array.from({ length: 5 }, (el, i) => (
      <span style={{ cursor: 'pointer' }} onClick={() => onChange(i + 1)}>
        {i < count ? '★' : '☆'}
      </span>
    ))}
  </div>
)

export default Rating
