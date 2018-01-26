import React from 'react'
import slideArrow from './images/move-to-next.svg'

const PreviousSlideArrow = props => {
  const { onClick } = props
  // console.log(props)
  return (
    <a
      className="slide-arrow slide-arrow-right"
      onClick={onClick}>
      <img src={ slideArrow } className="right-arrow" alt="right-arrow" />
    </a>
  )
}

export default PreviousSlideArrow
