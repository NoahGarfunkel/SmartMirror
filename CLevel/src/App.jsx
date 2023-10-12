import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faWifi} from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="Header">
      <h1>Smart Mirror On</h1>
      <div className="camera" />
      <div className="mirror"> Good morning Noah 
      </div>
      <div className="taskbar">
        <button style = {{marginTop: '10px'}}><FontAwesomeIcon icon={faSliders} size = "3x" /></button>
        <button><FontAwesomeIcon icon={faMessage} size = "3x"/></button>
        <button><FontAwesomeIcon icon={faMusic} size = "3x" /></button>
        <button><FontAwesomeIcon icon={faFaceSmile} size = "3x" /></button>
        <button><FontAwesomeIcon icon={faSun} size = "3x"/></button>
        <button><FontAwesomeIcon icon={faWifi} size = "3x"/></button>
        <button><FontAwesomeIcon icon={faPowerOff} size = "3x"/></button>
      </div>
    </div>
    
  )
}

export default App
