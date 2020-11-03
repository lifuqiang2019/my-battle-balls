/** @format */

import React, { useState } from 'react'
import { fromEvent } from 'rxjs';
import { Con } from './utils/app'
import './App.less'

const App = () => {
    const [show, setShow] = useState(false);
    
    return <div className="Container">
        {!show ? <div className="showName">
            <p>Open Baatle Balls</p>
            <input type="text"  placeholder="Enter your name here" id="playerNameInput" />
            <a><button id="startButton" onClick={
                ()=>{ 
                    
                    const ele = document.getElementById('startButton')
                    fromEvent(ele, 'click').subscribe(Con());
                    setShow(true);
                }
            }>Play</button></a>
        </div>:
        <div>
           <canvas id="cvs"></canvas> 
        </div>}

    </div>
}



export default App
