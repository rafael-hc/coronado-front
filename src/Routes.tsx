import { Route, Routes } from 'react-router-dom'
import { CartLayout } from './layouts/LoginLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/login" element={<CartLayout />}>
        <Route path="/login/user" element={<Login />} />
      </Route>

      <Route path="/user" element={<CartLayout />}>
        <Route path="/user/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
