import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,CLOUDY,SUNNY,RAIN,SNOW,WINDY} from '../../../constants/weathers';
import './styles.css';

const stateToIconName = weatherState => {
    switch(weatherState)  {
        case "cloud":
            return CLOUD;
        case "cloudy":
            return CLOUDY;
        case "sun":
            return SUNNY;
        case "rain":
            return RAIN;
        case "snow":
            return SNOW;
        case "windy":
            return WINDY;
        default:
            return SUNNY;
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