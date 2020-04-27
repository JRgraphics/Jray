import React from 'react'
import { connect } from 'react-redux'
import WeatherThumbnail from '../WeatherThumbnail/WeatherThumbnail'

function ForecastCarouselItem(props) {
  return (
    <div
      key={props.time}
      className="carousel__item user-select--none px-2 py-4"
    >
      <WeatherThumbnail
        parent={'forecast'}
        temperature={props.main['temp']}
        time={props.time}
        icon={props.weather[0].icon}
        description={props.weather[0].description}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForecastCarouselItem)
