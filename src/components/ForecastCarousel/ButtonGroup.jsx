import React from 'react'

// Assets
import arrow_left from '../../assets/images/arrow_left.png'
import arrow_right from '../../assets/images/arrow_right.png'

// Components
import Button from '../Button'

// Custom Navigational buttons for ForecastCarousel
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className="carousel-button-group" style={{ position: 'absolute' }}>
      <Button
        buttonClassName={
          'carousel-button-group__button p-2 ' +
          (currentSlide === 0 ? 'button__disabled' : '')
        }
        buttonContent={<img src={arrow_left} alt={'arrow'} />}
        onClick={() => previous()}
        disabled={currentSlide === 0}
      />
      <Button
        buttonClassName={'carousel-button-group__button p-2 '}
        buttonContent={<img src={arrow_right} alt={'arrow'} />}
        onClick={() => next()}
      />
    </div>
  )
}

export default ButtonGroup
