import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { Provider } from 'react-redux'
import store from './redux/setupStore'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './utils/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
)
