import React from 'react';
import { useSelector } from 'react-redux';

import './css/style.css';

export default function World(props) {
    const weather = useSelector((state) => state.weather);
    let weatherIndicatorClass = "params weather-calm";
    if(weather==="calm") weatherIndicatorClass = "params weather-calm";
    else if(weather==="storm") weatherIndicatorClass = "params weather-storm";

    return (
        <div className="world">
            <span className="large-title">WORLD PARAMS:</span>
            <span className="descriptions">
                WEATHER: <span className={weatherIndicatorClass}>{weather}</span>
            </span>
        </div>
    );
}