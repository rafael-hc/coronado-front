import { Route, Routes } from 'react-router-dom'
import { CartLayout } from './layouts/LoginLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Product } from './pages/Product'
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
        <Route path="product/:name/:id" element={<Product />} />
      </Route>
      <Route path="/user" element={<CartLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}
