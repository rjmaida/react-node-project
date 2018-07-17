import convert from 'convert-units';
import {SUNNY} from '../constants/weathers';

const getTemp = temp => {
    return convert(temp).from('K').to('C').toFixed(1);
};
const getWeatherState = weathear => {
    return SUNNY;
};

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weathear)
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        wind:  `${speed} m/s`,
        weatherState
    }
    return data;
};

export default transformWeather;