import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}
