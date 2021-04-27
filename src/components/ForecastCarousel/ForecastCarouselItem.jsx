import React from 'react'
import WeatherThumbnail from '../WeatherThumbnail/WeatherThumbnail'

function ForecastCarouselItem({main, time, weather}) {
  return (
    <div
      key={time}
      className="carousel__item user-select--none px-2 py-4"
    >
      <WeatherThumbnail
        parent={'forecast'}
        temperature={main['temp']}
        time={time}
        icon={weather[0]?.icon}
        description={weather[0]?.description}
      />
    </div>
  )
}

export default ForecastCarouselItem
