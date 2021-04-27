import React, { useEffect } from 'react'

// Components
import ButtonGroup from './ButtonGroup'
import Carousel from 'react-multi-carousel'
import ForecastCarouselItem from './ForecastCarouselItem'

// Redux
import { useSelector } from 'react-redux'

// Styles
import 'react-multi-carousel/lib/styles.css'

const ForecastCarousel = () => {
  const weatherData = useSelector((state) => state.weather)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return weatherData?.loading ? (
    <h2 className="lds-dual-ring centered"></h2>
  ) : weatherData?.error ? (
    <h2>{weatherData?.error}</h2>
  ) : (
    <div className="forecast-carousel">
      {weatherData &&
        weatherData?.weather_forecast &&
        weatherData?.weather_forecast.list && (
          <Carousel
            // Settings for the ForecastCarousel
            className="carousel"
            swipeable={true}
            draggable={true}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />} // Custom buttongroup for desktop slideshow control
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            keyBoardControl={true} // Operated by left and right arrow buttons
            customTransition=""
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']} // Arrows are only presented in UI on desktop
            itemClass="carousel-item-padding-40-px"
          >
            {weatherData?.weather_forecast.list.map((item, index) => (
              <ForecastCarouselItem
                key={index}
                time={item?.dt}
                main={item?.main}
                weather={item?.weather}
              />
            ))}
          </Carousel>
        )}
    </div>
  )
}

export default ForecastCarousel
