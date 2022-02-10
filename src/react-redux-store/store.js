import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {weatherReducer} from './weatherSlice.js';
import {shipReducer} from './shipSlice.js';

export default configureStore({
    reducer: combineReducers({
        weather: weatherReducer, 
        shipState: shipReducer
    }),
    preloadedState: {
        weather: "calm",
        shipState: {
            course: "north",
            speed: 0
        }
    }
  })