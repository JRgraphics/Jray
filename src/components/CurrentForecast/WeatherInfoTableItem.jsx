import React from 'react'

// Assets
import wind_degree from '../../assets/images/wind_degree.png'

const WeatherInfoTableItem = ({item}) => {
  return (
    <tr>
      <td className="text-left">
        <h6 className="mb-1">{item?.label}</h6>
      </td>
      <td className="text-right">
        <h6 className="mb-1">
          {item?.value}
          {
            //Checks the object's item's label for "Wind" and
            //renders wind direction icon if match is found
            item?.label === 'Wind' && item?.degree && (
              <span className="position-relative ml-1 pr-3">
                <img
                  src={wind_degree}
                  alt={'arrow'}
                  style={{
                    position: 'absolute',
                    height: '90%',
                    padding: '0.2rem',
                    transform: 'rotate(' + item?.degree + 'deg)',
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
