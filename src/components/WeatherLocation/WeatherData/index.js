import React, { Component } from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {SNOW} from '../../../constants/weathers'

class WeatherData extends Component {
    render() {
        return (
            <div>
                <WeatherTemperature temperature={20} weatherState={SNOW}/>
                <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
            </div>
        );
    }
}

export default WeatherData;