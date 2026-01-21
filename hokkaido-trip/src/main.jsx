import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ⚠️ 關鍵：在這裡引入 Leaflet CSS，保證地圖樣式正確載入
import 'leaflet/dist/leaflet.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
