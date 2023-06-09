import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { Provider } from 'react-redux'
import store from './redux/setupStore'
import { DynamicTheme } from './components/DynamicTheme'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <DynamicTheme>
        <App />
      </DynamicTheme>
    </React.StrictMode>
  </Provider>
)
