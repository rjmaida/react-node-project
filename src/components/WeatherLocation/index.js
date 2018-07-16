import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import {SUNNY} from '../../constants/weathers';
import './styles.css';

const data ={
    temperature: 20,
        weatherState: SUNNY,
        humidity: 15,
        wind: '12 m/s',
}

class WeatherLocation extends Component {
    render() {
        return (
            <div className='weatherLocationCont'>
            <Location city={"Mendoza"}/>
            <WeatherData data={data}/>
        </div>
        );
    }
}

export default WeatherLocation;