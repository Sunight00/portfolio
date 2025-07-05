import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './nav.jsx'
import Content from './content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav></Nav>
    <Content></Content>
  </StrictMode>,
)
