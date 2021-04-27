import React, { useEffect } from 'react'

// Components
import ForecastCarousel from '../../ForecastCarousel/ForecastCarousel'
import CurrentForecast from '../../CurrentForecast/CurrentForecast'
import LocationSearch from '../../LocationSearch/LocationSearch'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../redux'

const Home = () => {
  const dispatch = useDispatch()

  const weatherData = useSelector((state) => state.weather.weatherData)

  useEffect(() => {
    dispatch(
      fetchWeather(
        !!weatherData?.search_selection
          ? weatherData?.search_selection
          : 'Helsinki',
      ),
    )
  }, [weatherData])

  return (
    <div className="mx-auto">
      <LocationSearch />
      <div className="col-12 mx-auto">
        <CurrentForecast />
      </div>
      <div className="col-12 my-3">
        <ForecastCarousel />
      </div>
    </div>
  )
}

export default Home
