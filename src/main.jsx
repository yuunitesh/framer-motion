import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Background from "./Background"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="center">
    <Background />
    <App />
    </div>
  </React.StrictMode>,
)
