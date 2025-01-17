import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import App from './App2.jsx'
// import Counter from './Counter.jsx'
// import App from './App_rock paper_Lecture8_withEx14.jsx'
// import App from './App_Lecture9'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
