import React from 'react';

import { Provider } from 'react-redux';
import store from './react-redux-store/store.js';

import WeatherManager from './WeatherManager.jsx';
import World from './World.jsx';
import Ship from './Ship.jsx';

function App() {
  return (
    <Provider store={store}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <World/>
        <Ship/>
        <WeatherManager />
      </div>
    </Provider>
);
}

export default App;
