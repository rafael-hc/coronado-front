import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { MenuBar } from "./components/MenuBar"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Routes"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>

  )
}


