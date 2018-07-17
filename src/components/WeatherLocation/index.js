import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from '../../services/transformWeather';
import './styles.css';

const LOCATION = 'mendoza,ar';
const APPID =  '4a6a6edcc689a6b293e22fcac112e0e4';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${APPID}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city:LOCATION,
            data: null
        }; 
    }
    
    handleUpdateClick = () => {
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    };

    componentWillMount() {
        this.handleUpdateClick();
    }

    render() {
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont'>
            <Location city={city}/>
            {data ? <WeatherData data={data}/> : <CircularProgress size={50} />}
        </div>
        );
    }
}

export default WeatherLocation;