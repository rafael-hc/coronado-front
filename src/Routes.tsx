import { Route, Routes } from 'react-router-dom'
import { CartLayout } from './layouts/CartLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Login } from './pages/Login'

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/cart' element={<Cart />}/>
            </Route>
            <Route path='/login' element={<CartLayout />}>
                <Route path='/login/user' element={<Login />}/>
            </Route>
        </Routes>
    )
}