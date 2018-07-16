import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import {SUNNY} from '../../constants/weathers';
import './styles.css';

const LOCATION = 'mendoza,ar';
const APPID =  '4a6a6edcc689a6b293e22fcac112e0e4';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${APPID}`

const data1 = {
    temperature: 20,
        weatherState: SUNNY,
        humidity: 15,
        wind: '12 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city:LOCATION,
            data: data1
        }; 
    }

    handleUpdateClick = () => {
        /*this.setState({
            data: data2
        });*/
        fetch(api_weather);
        console.log('Updated!');
    };

    render() {
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont'>
            <Location city={city}/>
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
}

export default WeatherLocation;