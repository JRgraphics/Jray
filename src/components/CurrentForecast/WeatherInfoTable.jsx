import React from 'react'

// Components
import WeatherInfoTableItem from './WeatherInfoTableItem'

//Renders a table of items based on the input object

const WeatherInfoTable = ({ object = [] }) => {
  return (
    <table className="weather-info-table">
      <tbody>
        {object.map((item, index) => (
          <WeatherInfoTableItem key={index} item={item} />
        ))}
      </tbody>
    </table>
  )
}

export default WeatherInfoTable
