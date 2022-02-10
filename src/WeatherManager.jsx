import React from 'react';
import { useDispatch } from 'react-redux';

import {setWeather_Calm, setWeather_Storm} from './react-redux-store/weatherSlice.js';

import './css/style.css';

export default function WeatherManager(props) {
    const dispatch = useDispatch();

    return (
        <div className='weather-manager'>
            <span className="medium-title">Weather manager:</span>
            <button className='weather-manager__btn' onClick={() => dispatch(setWeather_Calm())}>Set Calm</button>
            <button className='weather-manager__btn' onClick={() => dispatch(setWeather_Storm())}>Set Storm</button>
        </div>
    );
}