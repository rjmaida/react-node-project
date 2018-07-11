import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        <WeatherIcons name="cloud" size="2x" />
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;