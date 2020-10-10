import React from 'react'
import { GlobalStyle } from './styled/GlobalStyle'
import { NavbarCompleteSidebar } from './styled/Navbar/NavbarComplete/NavbarCompleteSidebar'
import { PageRouter } from './pages/PageRouter'
import './App.css'

function App() {
  return (
    <div style={{display: 'flex', height: '100%', width: '100%'}}>
        <GlobalStyle /> 
        <NavbarCompleteSidebar /> 
        <PageRouter />
    </div>
  )
}

export default App
