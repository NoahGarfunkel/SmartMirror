import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faWifi} from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faPause} from '@fortawesome/free-solid-svg-icons'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function App() {
  const [musicDisplay, setMusicDisplay] = useState(false);

  const toggleDisplay = () => {
    setMusicDisplay(!musicDisplay);
  };

  if (musicDisplay == false){
    return (
      <div className="Header">
        <h1>Smart Mirror B Level</h1>
        <div className="camera" />
        <div className="mirror"> Good Morning Noah 
        </div>
        <div className="taskbar">
          <button style = {{marginTop: '10px'}}><FontAwesomeIcon icon={faSliders} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faMessage} size = "3x"/></button>
          <button onClick={toggleDisplay}><FontAwesomeIcon icon={faMusic} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faFaceSmile} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faSun} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faWifi} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faPowerOff} size = "3x"/></button>
        </div>
      </div>
      )
  }
  else {
    return(
    <div className="Header">
      <h1>Smart Mirror B Level</h1>
      <div className="camera" />
      <div className="mirror"> Now Playing:
        <div className="music"> she knows it - Maggie Lindemann
        <br></br>
        <button style = {{marginTop: '10px', marginRight: '40px', marginLeft: '50px'}}><FontAwesomeIcon icon={faPlay} size = "xs" /></button>
        <button ><FontAwesomeIcon icon={faPause} size = "2xs" /></button>
        </div>
        
      </div>
      <div className="taskbar">
        <button style = {{marginTop: '10px'}}><FontAwesomeIcon icon={faMusic} size = "3x" /></button>
        <button onClick={toggleDisplay}><FontAwesomeIcon icon={faHouse} size = "3x" /></button>
      </div>
    </div>
    )
  }
}

export default App
