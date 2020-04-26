import React from 'react';

function WeatherInfoTableItem(props) {
    return (
        <tr>
            <td className="text-left">
                <h6 className="m-0">{props.label}</h6>
            </td>
            <td className="text-right">
                <h6 className="m-0">{props.value}</h6>
            </td>
        </tr>
    )
}

function WeatherInfoTable(props) {
    return (
        <table className="weather-info-table">
            <tbody>
                {
                    props.object.map(item => (
                        <WeatherInfoTableItem label={item.label} value={item.value} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default WeatherInfoTable
