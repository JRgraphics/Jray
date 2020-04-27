import React from 'react';
import WeatherConverter from '../WeatherConverter/WeatherConverter';
import WeatherIconMap from '../WeatherIconMap.json';
import { dateToString, timeToString } from '../DateFormatFunctions';

function WeatherThumbnail(props) {
    return (
        <div className={(props.parent) + '-thumbnail'}>
            <div className="height--50 mb-2">
                <h1 className="main-temperature m-0">
                    <WeatherConverter temperature={props.temperature} />
                </h1>
            </div>
            <div className="height--50">
                <div className="time-container float-right pb-1">
                    <h5 className="m-0 pr-1">{dateToString(props.time)}</h5>
                    <h6 className="m-0 pr-1">{timeToString(props.time)}</h6>
                </div>
                <i class={"wi " + (WeatherIconMap[props.icon]) + " wi-fw"}></i>
                <h6 className="mt-2">{props.description}</h6>
            </div>
        </div>
    )
}

export default WeatherThumbnail
