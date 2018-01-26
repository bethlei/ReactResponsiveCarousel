import React from 'react'
import slideArrow from './images/move-to-next.svg'

const PreviousSlideArrow = props => {
  const { onClick } = props

  return (
    <a
      className="slide-arrow slide-arrow-left"
      onClick={onClick}>
      <img src={ slideArrow } className="left-arrow" alt="left-arrow" />
    </a>
  )
}

export default PreviousSlideArrow
