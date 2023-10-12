import './AppOff.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function AppOff() {
  return (
    <div className="Header">
      <h1>Smart Mirror Off</h1>
      <div className="camera" />
      <div className="mirror" />
      <div className="taskbar">
        <button style = {{marginTop: '10px'}}><FontAwesomeIcon icon={faPowerOff} size = "3x"/></button>
      </div>
    </div>
    
  )
}

export default AppOff
