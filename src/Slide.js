import React from 'react'

const Slide = props => {
  const { index, activeIndex, slide } = props

  return (
    <li
      className={index === activeIndex
        ? "slide slide-active animated bounceInLeft"
        : "slide animated bounceInLeft"}>
      <img key={index} src={slide.image} alt={slide.name} />
    </li>
  )
}

export default Slide
