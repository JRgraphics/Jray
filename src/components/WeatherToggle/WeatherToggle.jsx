import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { changeTemperature } from '../../redux'

const WeatherToggle = () => {
  const dispatch = useDispatch()
  const weatherData = useSelector(state => state.weather)
  return (
    <div className="weather-toggle">
      <button
        onClick={() => dispatch(changeTemperature('C'))}
        className={
          'btn celcius ' +
          (weatherData?.temp_type === 'C'
            ? 'btn-light'
            : 'btn-outline-light')
        }
      >
        °C
      </button>
      <button
        onClick={() => dispatch(changeTemperature('F'))}
        className={
          'btn fahrenheit ' +
          (weatherData?.temp_type === 'F'
            ? 'btn-light'
            : 'btn-outline-light')
        }
      >
        °F
      </button>
    </div>
  )
}

export default WeatherToggle
