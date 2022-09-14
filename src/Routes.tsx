import { Route, Routes } from 'react-router-dom'
import { CartLayout } from './layouts/LoginLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { PrivateRoute } from './utils/PrivateRoutes'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="user" element={<CartLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}
