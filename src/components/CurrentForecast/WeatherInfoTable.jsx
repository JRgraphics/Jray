import React from 'react'
import wind_degree from '../../assets/images/wind_degree.png'

//Renders a table of items based on the input object
function WeatherInfoTableItem(props) {
  return (
    <tr>
      <td className="text-left">
        <h6 className="mb-1">{props.item.label}</h6>
      </td>
      <td className="text-right">
        <h6 className="mb-1">
          {props.item.value}
          {
            //Checks the object's item's label for "Wind" and
            //renders wind direction icon if match is found
            props.item.label === 'Wind' && props.item.degree && (
              <span className="ml-1">
                <img
                  className="pb-1"
                  src={wind_degree}
                  alt={'arrow'}
                  style={{
                    height: '1rem',
                    transform: 'rotate(' + props.item.degree + 'deg)',
                  }}
                />
              </span>
            )
          }
        </h6>
      </td>
    </tr>
  )
}

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
