import React, { Component } from 'react';
import WeatherTemperature from '../components/WeatherTemperature';
import WeatherExtraInfo from '../components/WeatherExtraInfo';

class WeatherData extends Component {
    render() {
        return (
            <div>
                <WeatherTemperature temperature={20}/>
                <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
            </div>
        );
    }
}

export default WeatherData;