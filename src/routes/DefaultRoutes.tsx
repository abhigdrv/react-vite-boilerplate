import { Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home'

function DefaultRoutes() {
  return (
    <>
      <Routes>
        <Route
          element={
            <div>
              <h1>Default Route</h1>
              <Outlet />
            </div>
          }
        >
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default DefaultRoutes
