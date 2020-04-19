import React from 'react'

function dateToString(date) {
    const d = new Date(date * 1000);
    const date_str = d.getDate() + '.' + (d.getMonth() + 1 ) + '.' + d.getFullYear();
    return date_str;
}

function timeToString(date) {
    const d = new Date(date * 1000);
    const time_str = d.getHours() + ':' + ('0'+d.getMinutes()).slice(-2);
    return time_str;
}

function ForecastCarouselItem(props) {
    return (
        <li key={props.key} className="carousel__item user-select--none">
            <div>
                {dateToString(props.time)}
            </div>
            <div>
                {timeToString(props.time)}
            </div>
        </li>
    )
}

export default ForecastCarouselItem
