import React from 'react';
import { connect } from 'react-redux';
import { dateToString, timeToString } from '../DateFormatFunctions';
import WeatherConverter from '../WeatherConverter/WeatherConverter';
import WeatherIconMap from '../WeatherIconMap.json';


function ForecastCarouselItem(props) {
    return (
        <div key={props.time} className="carousel__item user-select--none px-2 py-4">
            <div>
                <div className="height--50">
                    <h1 className="main-temperature main-temperature--small m-0">
                        <WeatherConverter temperature={props.main['temp']} />
                    </h1>
                </div>
                <div className="height--50">
                    <div className="time-container float-right pb-1">
                        <h6 className="carousel-font m-0 pr-1">{dateToString(props.time)}</h6>
                        <h6 className="carousel-font m-0 pr-1">{timeToString(props.time)}</h6>
                    </div>
                    <i class={"wi " + (WeatherIconMap[(props.weather[0].icon)]) + " wi-fw wi-fw--small"}></i>
                <h6 className="carousel-font mt-1">{props.weather[0].description}</h6>
                </div>
            </div>
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
