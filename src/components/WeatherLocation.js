import React from 'react';
import Location from '../components/Location'
import WeatherData from '../components/WeatherData'

const WeatherLocation = () => (
    <div>
        <Location city={"Mendoza"}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;