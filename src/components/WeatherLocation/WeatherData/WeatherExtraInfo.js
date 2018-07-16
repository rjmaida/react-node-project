import React from 'react';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className='weatherExtraInfoCont'>
        <span className='extraInfoText' >{`Humedad: ${humidity} %`}</span>
        <span className='extraInfoText' >{`Viento: ${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;