import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ForecastCarousel.sass'
import ForecastCarouselItem from './ForecastCarouselItem';

function ForecastCarousel({ weatherData }) {
  
  const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 9,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    return weatherData.loading ? (
      <h2 className="lds-dual-ring  centered"></h2>
    ) : weatherData.error ? (
        <h2>{weatherData.error}</h2>
    ) : (
      <div className="forecast-carousel">
        {
          weatherData &&
          weatherData.weather_forecast &&
          weatherData.weather_forecast.list &&
          <Carousel
      className="carousel"
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition=""
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
        {
          weatherData.weather_forecast.list.map((item) => (
            <ForecastCarouselItem time={item.dt} main={item.main} weather={item.weather} />
          ))
        }
      </Carousel>
        }
      </div>
  )
}

const mapStateToProps = state => {
  return {
      weatherData: state.weather
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastCarousel);
