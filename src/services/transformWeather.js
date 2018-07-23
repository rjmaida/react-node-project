import convert from 'convert-units';
import {CLOUDY,SUN,RAIN,SNOW,THUNDER,DRIZZLE} from '../constants/weathers';

const getTemp = temp => {
    return convert(temp).from('K').to('C').toFixed(1);
};
const getWeatherState = weathear => {
    const {id} = weathear[0];
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else{
        return CLOUDY;
    }
};

const transformWeather = weather_data => {
    const {weather} = weather_data;
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather)
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