import React from 'react'

// Components
import WeatherConverter from '../WeatherConverter/WeatherConverter'

// Constants
import WeatherIconMap from '../WeatherIconMap.json'

// Helpers
import { dateToString, timeToString } from '../DateFormatFunctions'

const WeatherThumbnail = ({parent = "", temperature = 0, time= new Date(), icon = "01d", description = "" }) =>  {
  return (
    <div className={parent + '-thumbnail'}>
      <div className="height--50 mb-2">
        <h1 className="main-temperature m-0">
          <WeatherConverter temperature={temperature} />
        </h1>
      </div>
      <div className="height--50">
        <div className="time-container float-right pb-1">
          <h5 className="m-0 pr-1">{dateToString(time)}</h5>
          <h6 className="m-0 pr-1">{timeToString(time)}</h6>
        </div>
        <i className={'wi ' + WeatherIconMap[icon] + ' wi-fw'}></i>
        <h6 className="mt-2">{description}</h6>
      </div>
    </div>
  )
}

export default WeatherThumbnail
