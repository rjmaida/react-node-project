import React from 'react';
import WeatherLocation from './index';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Mendoza,ar'}/>
        <WeatherLocation city={'Bogotá,col'}/>
        <WeatherLocation city={'Buenos Aires,ar'}/>
    </div>
);
export default LocationList;