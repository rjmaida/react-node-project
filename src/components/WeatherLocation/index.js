import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import {SUNNY,RAIN} from '../../constants/weathers';
import './styles.css';

const data1 = {
    temperature: 20,
        weatherState: SUNNY,
        humidity: 15,
        wind: '12 m/s',
}

const data2 = {
    temperature: 25,
        weatherState: RAIN,
        humidity: 60,
        wind: '18 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city:'Mendoza',
            data: data1
        }; 
    }

    handleUpdateClick = () => {
        this.setState({
            city:'Mendoza',
            data: data2
        });
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