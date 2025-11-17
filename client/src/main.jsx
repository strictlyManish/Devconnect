import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster position='bottom-left' toastOptions={{
      className: '',
      style: {
        color: '#FFFFFF',
        fontSize:'10px',
        backgroundColor:'transparent',
        backdropFilter:'blur(10px)'
      },
    }} />
  </BrowserRouter>
)
