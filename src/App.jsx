import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { Spin } from 'antd'
import routes from './router'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spin style={{ textAlign: 'center' }} />}>
        {useRoutes(routes)}
      </Suspense>
    </div>
  )
}

export default App
