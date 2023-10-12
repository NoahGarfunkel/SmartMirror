import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppOff from './AppOff'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ display: 'flex'}}>
      <App/>
      <AppOff/>
    </div>
  </React.StrictMode>,
)
