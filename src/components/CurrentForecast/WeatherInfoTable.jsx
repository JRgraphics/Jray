import React from 'react'
import WeatherInfoTableItem from './WeatherInfoTableItem'

//Renders a table of items based on the input object

function WeatherInfoTable(props) {
  return (
    <table className="weather-info-table">
      <tbody>
        {props.object.map((item) => (
          <WeatherInfoTableItem item={item} />
        ))}
      </tbody>
    </table>
  )
}

export default WeatherInfoTable
