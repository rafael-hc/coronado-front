import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MenuBar } from '../../components/MenuBar'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <MenuBar />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
