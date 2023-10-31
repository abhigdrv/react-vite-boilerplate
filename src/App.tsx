import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainRoutes from './routes/MainRoutes'
import DefaultRoutes from './routes/DefaultRoutes'
import '@radix-ui/themes/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <MainRoutes />
          <DefaultRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
