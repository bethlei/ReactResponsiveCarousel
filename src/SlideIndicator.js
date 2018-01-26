import React from 'react'

const SlideIndicator = props => {
  const { index, activeIndex, onClick } = props

  return (
    <li>
      <a
        className={index === activeIndex
          ? "slide-indicator slide-indicator-active"
          : "slide-indicator"
        }
        onClick={onClick}>
      </a>
    </li>
  )
}

export default SlideIndicator
