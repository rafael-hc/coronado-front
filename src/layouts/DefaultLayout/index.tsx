
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { MenuBar } from '../../components/MenuBar'

import { LayoutContainer, LayoutContent, LayoutMain } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <MenuBar />
      <Outlet />
    </LayoutContainer>
  )
}
