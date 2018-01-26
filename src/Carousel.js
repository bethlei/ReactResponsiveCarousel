import React, { Component } from 'react'
import Slide from './Slide'
import PreviousSlideArrow from './PreviousSlideArrow'
import NextSlideArrow from './NextSlideArrow'
import SlideIndicator from './SlideIndicator'

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.goToPreviousSlide = this.goToPreviousSlide.bind(this)
    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToSlide = this.goToSlide.bind(this)
  }

  state = {
    activeIndex: 0
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    })
  }

  goToPreviousSlide(event) {
    event.preventDefault()

    let index = this.state.activeIndex
    const { slidesNum } = this.props

    if (index < 1) {
      index = slidesNum
    }

    --index

    this.setState({
      activeIndex: index
    })
  }

  goToNextSlide(event) {
    event.preventDefault()

    let index = this.state.activeIndex
    const { slidesNum } = this.props

    if (index === (slidesNum -1)) {
      index = -1
    }

    ++index

    this.setState({
      activeIndex: index
    })
  }

  render() {
    const { activeIndex } = this.state
    const { slides } = this.props
    // console.log(this.props)
    return (
      <div className="carousel">
        <ul className="carousel-slides">
          {slides.map((slide, index) =>
            <Slide
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
            />
          )}
        </ul>
        <ul className="slide-indicators">
          {slides.map((slide, index) =>
            <SlideIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              isActive={activeIndex===index}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
        <PreviousSlideArrow onClick={event => this.goToPreviousSlide(event)} />
        <NextSlideArrow onClick={event => this.goToNextSlide(event)} />
      </div>
    )
  }
}

export default Carousel
