import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const CartLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
