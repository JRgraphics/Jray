import React from 'react'
import { connect } from 'react-redux'
import { changeTemperature } from '../../redux'
import './WeatherToggle.sass'

function WeatherToggle(props) {
  return (
    <div className="weather-toggle">
      <button
        onClick={() => props.changeTemperature('C')}
        className={
          'btn celcius ' +
          (props.weatherData.temp_type === 'C'
            ? 'btn-light'
            : 'btn-outline-light')
        }
      >
        °C
      </button>
      <button
        onClick={() => props.changeTemperature('F')}
        className={
          'btn fahrenheit ' +
          (props.weatherData.temp_type === 'F'
            ? 'btn-light'
            : 'btn-outline-light')
        }
      >
        °F
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTemperature: (temp) => dispatch(changeTemperature(temp)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToggle)
