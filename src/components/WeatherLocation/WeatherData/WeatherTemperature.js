import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,THUNDER,DRIZZLE} from '../../../constants/weathers';
import './styles.css';

const stateToIconName = weatherState => {
    switch(weatherState)  {
        case CLOUD:
            return CLOUD;
        case CLOUDY:
            return CLOUDY;
        case "sun":
            return SUN;
        case RAIN:
            return RAIN;
        case SNOW:
            return SNOW;
        case WINDY:
            return WINDY;
        case THUNDER:
            return 'day-thunderstorm';
        case DRIZZLE:
            return 'day-showers';
        default:
            return SUN;
    }
}

const getWeatherIcon = weatherState =>{
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{` ${temperature} `}</span>
        <span  className='temperatureType'>C°</span>
    </div>
);

WeatherTemperature.prototypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;