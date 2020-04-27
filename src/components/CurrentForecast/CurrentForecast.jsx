import React from 'react'
import { connect } from 'react-redux'
import './CurrentForecast.sass'
import WeatherConverter from '../WeatherConverter/WeatherConverter'
import { timeToString } from '../DateFormatFunctions'
import WeatherInfoTable from './WeatherInfoTable'
import WeatherThumbnail from '../WeatherThumbnail/WeatherThumbnail'

function CurrentForecast(props) {
  return props.weatherData.loading ? (
    <h2 className="lds-dual-ring centered"></h2>
  ) : props.weatherData.error ? (
    <h2>{props.weatherData.error}</h2>
  ) : (
    <div className="current-forecast">
      {props.weatherData &&
        props.weatherData.current_weather &&
        props.weatherData.current_weather.main && (
          <div className="row col-12 mx-auto px-0 text-center">
            <div className="col-6 text-right">
              <WeatherThumbnail
                parent={'current'}
                temperature={props.weatherData.current_weather.main['temp']}
                time={props.weatherData.current_weather.dt}
                icon={props.weatherData.current_weather.weather[0].icon}
                description={
                  props.weatherData.current_weather.weather[0].description
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
                          props.weatherData.current_weather.main['feels_like']
                        }
                      />
                    ),
                  },
                  {
                    label: 'Wind',
                    value: props.weatherData.current_weather.wind['speed'],
                    degree: props.weatherData.current_weather.wind['deg'],
                  },
                  {
                    label: 'Humidity',
                    value:
                      props.weatherData.current_weather.main['humidity'] + '%',
                  },
                  {
                    label: 'Sunrise',
                    value: timeToString(
                      props.weatherData.current_weather.sys['sunrise'],
                    ),
                  },
                  {
                    label: 'Sunset',
                    value: timeToString(
                      props.weatherData.current_weather.sys['sunset'],
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

const mapStateToProps = (state) => {
  return {
    weatherData: state.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast)
