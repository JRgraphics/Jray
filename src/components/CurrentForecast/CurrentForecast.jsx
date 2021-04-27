import React from 'react'

// Components
import WeatherConverter from '../WeatherConverter/WeatherConverter'
import WeatherInfoTable from './WeatherInfoTable'
import WeatherThumbnail from '../WeatherThumbnail/WeatherThumbnail'

// Helpers
import { timeToString } from '../DateFormatFunctions'

// Redux
import { useSelector } from 'react-redux'

const CurrentForecast = () => {
  const weatherData = useSelector((state) => state.weather)
  const currentWeather = useSelector((state) => state.weather.current_weather)

  return weatherData?.loading ? (
    <h2 className="lds-dual-ring centered"> </h2>
  ) : weatherData?.error ? (
    <h2>{weatherData?.error}</h2>
  ) : (
    <div className="current-forecast">
      {weatherData &&
        currentWeather &&
        currentWeather?.main && (
          <div className="row col-12 mx-auto px-0 text-center">
            <div className="col-6 text-right">
              <WeatherThumbnail
                parent={'current'}
                temperature={currentWeather?.main['temp']}
                time={currentWeather?.dt}
                icon={currentWeather?.weather[0].icon}
                description={
                  currentWeather?.weather[0]?.description
                }
              />
            </div>
            <div className="col-6">
              <WeatherInfoTable
                object={[
                  {
                    label: 'Feels like',
                    value: (
                      <WeatherConverter
                        temperature={
                          currentWeather?.main['feels_like']
                        }
                      />
                    ),
                  },
                  {
                    label: 'Wind',
                    value: currentWeather?.wind['speed'],
                    degree: currentWeather?.wind['deg'],
                  },
                  {
                    label: 'Humidity',
                    value: currentWeather?.main['humidity'] + '%',
                  },
                  {
                    label: 'Sunrise',
                    value: timeToString(
                      currentWeather?.sys['sunrise'],
                    ),
                  },
                  {
                    label: 'Sunset',
                    value: timeToString(
                      currentWeather?.sys['sunset'],
                    ),
                  },
                ]}
              />
            </div>
          </div>
        )}
    </div>
  )
}

export default CurrentForecast
