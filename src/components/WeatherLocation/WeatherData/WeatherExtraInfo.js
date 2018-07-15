import React, { Component } from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtraInfo;