import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from '../../services/transformWeather';
import './styles.css';

const apy_key =  '4a6a6edcc689a6b293e22fcac112e0e4';
const api_url = 'http://api.openweathermap.org/data/2.5/weather'


class WeatherLocation extends Component {

    constructor({city}) {
        super();
        this.state = {
            city,
            data: null
        }; 
    }
    
    handleUpdateClick = () => {
        const {city} = this.state;
        const api_weather = `${api_url}?q=${city}&appid=${apy_key}`;
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
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {data ? <WeatherData data={data}/> : <CircularProgress size={50} />}
        </div>
        );
    }
}

WeatherLocation.protoTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;