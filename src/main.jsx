import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'
import App from './App.jsx'

console.log('Main.jsx: Rendering application root with Redux Provider');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The Provider component makes the Redux store available to any 
        nested components that need to access it. */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
