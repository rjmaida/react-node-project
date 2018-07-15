import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,CLOUDY,SUNNY,RAIN,SNOW,WINDY} from '../../../constants/weathers';

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
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x" />);
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{` ${temperature} C°`}</span>
    </div>
);

WeatherTemperature.prototypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;