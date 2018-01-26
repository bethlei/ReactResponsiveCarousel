import React, { Component } from 'react'
import Carousel from './Carousel'
import './App.css'

const slidesData = [
  {
    name: 'dog1',
    image: 'http://media.istockphoto.com/photos/male-shiba-inu-dog-at-the-beach-picture-id502665349?s=2048x2048',
  },
  {
    name: 'dog2',
    image: 'http://media.istockphoto.com/photos/adorable-pug-puppy-dog-in-park-picture-id468648042?s=2048x2048',
  },
  {
    name: 'dog3',
    image: 'http://media.istockphoto.com/photos/wolf-dog-playing-on-the-beach-picture-id494709384?s=2048x2048',
  },
  {
    name: 'dog4',
    image: 'http://media.istockphoto.com/photos/shar-pei-dog-picture-id667551336?s=2048x2048',
  },
  {
    name: 'dog5',
    image: 'http://media.istockphoto.com/photos/german-sheperd-picture-id667545622?s=2048x2048',
  },
  {
    name: 'dog6',
    image: 'http://media.istockphoto.com/photos/cute-dalmatian-picture-id175455453?s=2048x2048',
  },
]

class App extends Component {
  state = {
    query: '',
    error: '',
    showSlideArrows: false,
  }

  getSlidesNumber = query => {
    this.setState({
      query,
      error: '',
    })

    if ((query < 1) || (query > 6)) {
      this.setState({
        query,
        error: 'Please enter a number between 1 and 6'
      })
      return
    }
  }

  getSlides = (slidesData, query) => {
    return slidesData.filter((slide, i) => i < query)
  }

  render() {
    const { query, error } = this.state

    return (
      <div className="App">
        <h1>React Responsive Carousel</h1>
        <form>
          <label className="slide-input-label">Enter the number of slides for the carousel</label>
          <input
            type="text"
            className="slide-input"
            value={query}
            onChange={(event) => this.getSlidesNumber(event.target.value)} />
        </form>
        {error !== '' ? (
          <h2 className="err-msg">{error}</h2>
        ) : (
          <Carousel
            slidesNum={query}
            slides={this.getSlides(slidesData,query)} />
        )}
      </div>
    )
  }
}

export default App
