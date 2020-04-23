import React from 'react';
import { connect } from 'react-redux';


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
        <div key={props.time} className="carousel__item user-select--none">
            <div>
                {dateToString(props.time)}
            </div>
            <div>
                {timeToString(props.time)}
            </div>
            <div>
            {
                props.weatherData.temp_type === "C" ?
                (
                    Math.round((props.main.temp - 273) * 10) / 10
                ) : (
                    Math.round((props.main.temp * 9/5 - 459.67) * 10) / 10
                )
            }
            </div>
            <div>{props.weather[0].description}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ForecastCarouselItem);
