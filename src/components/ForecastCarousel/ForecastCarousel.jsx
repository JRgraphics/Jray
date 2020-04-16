import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ForecastCarousel.sass'

function ForecastCarousel({ weatherData, fetchWeather}) {
  useEffect(() => {
    fetchWeather()
  }, []);
  const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    return weatherData.loading ? (
      <h2 className="lds-dual-ring"></h2>
    ) : weatherData.error ? (
        <h2>{weatherData.error}</h2>
    ) : (
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
          <div className="carousel__item user-select--none">Item 1</div>
          <div className="carousel__item user-select--none">Item 2</div>
          <div className="carousel__item user-select--none">Item 3</div>
          <div className="carousel__item user-select--none">Item 4</div>
      </Carousel>
  )
}

const mapStateToProps = state => {
  return {
      weatherData: state.weather
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchWeather: () => dispatch(fetchWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastCarousel);
