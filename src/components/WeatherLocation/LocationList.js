import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './index';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    const StrToComponent = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>))
    );

    return (<div>
        {StrToComponent(cities)}
    </div>);
}

LocationList.prototypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;