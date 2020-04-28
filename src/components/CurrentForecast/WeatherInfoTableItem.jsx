import React from 'react'
import wind_degree from '../../assets/images/wind_degree.png'

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
              <span className="position-relative ml-1 pr-3">
                <img
                  src={wind_degree}
                  alt={'arrow'}
                  style={{
                    position: 'absolute',
                    height: '90%',
                    padding: '0.2rem',
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

export default WeatherInfoTableItem
