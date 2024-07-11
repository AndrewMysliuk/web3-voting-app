import { Route, Routes, Navigate } from "react-router-dom"
import { RouteNames, publicRoutes } from "."

const AppRouter = () => {
  return (
    <div className="app">
      <div className="wrap">
        <Routes>
          {publicRoutes.map((route) => (
            <Route path={route.path} element={<route.element />} key={route.path} />
          ))}

          <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter
