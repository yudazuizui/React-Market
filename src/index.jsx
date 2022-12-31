import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'
import './assets/css/common.less'
import './assets/css/font.css'
import './assets/css/iconfont.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
