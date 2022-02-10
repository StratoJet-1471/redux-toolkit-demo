import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setCourse, setSpeed} from './react-redux-store/shipSlice.js';

import './css/style.css';

export default function Ship() {
    const course = useSelector((state) => state.shipState.course);
    const speed = useSelector((state) => state.shipState.speed);
    const dispatch = useDispatch();

    return (
        <div className='ship'>
            <span className='large-title'>SHIP PARAMS:</span>
            <span className='descriptions'>COURSE: <span className='params'>{course}</span></span>
            <span className='descriptions'>SPEED: <span className='params'>{speed}</span></span>

            <div className="ship__control-panel">

                <div className="ship__compass-container">
                    <img className="ship__compass-img" src="./design-elements/compass.png" alt="Compass" />
                    <img className="ship__compass-N" src="./design-elements/letter-N.png" alt="N" onClick={() => dispatch(setCourse("north"))}/>
                    <img className="ship__compass-S" src="./design-elements/letter-S.png" alt="S" onClick={() => dispatch(setCourse("south"))}/>
                    <img className="ship__compass-W" src="./design-elements/letter-W.png" alt="W" onClick={() => dispatch(setCourse("west"))}/>
                    <img className="ship__compass-E" src="./design-elements/letter-E.png" alt="E" onClick={() => dispatch(setCourse("east"))}/>
                </div>

                <div className="ship__engine-controls">
                    <div className="ship__eng-controls-title-container">
                        <span className="medium-title">Engine controls:</span>
                    </div>
                    <button className="ship__control-btn" onClick={() => dispatch(setSpeed(20))}>Full speed</button>
                    <button className="ship__control-btn" onClick={() => dispatch(setSpeed(11))}>Ahead medium</button>                    
                    <button className="ship__control-btn" onClick={() => dispatch(setSpeed(5))}>Ahead slow</button>
                    <button className="ship__control-btn" onClick={() => dispatch(setSpeed(0))}>Stopping</button>
                    <button className="ship__control-btn" onClick={() => dispatch(setSpeed(-4))}>Slow reverse</button>
                    <button className="ship__control-btn" onClick={() => dispatch(setSpeed(-9))}>Medium reverse</button>
                    <button className="ship__control-btn" onClick={() => dispatch(setSpeed(-15))}>Full reverse</button>
                </div>
            </div>

        </div>
    );
}