import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Provider } from 'react-redux'
import MainApp from './MainApp'
import { store } from './app/store'
import { BrowserRouter } from 'react-router'
import { setApiAuth } from './services/apiClient'  // import the setter

// Inject store getter + dispatch into apiClient
setApiAuth({
  getToken: () => store.getState().auth.accessToken,
  dispatch: store.dispatch
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

