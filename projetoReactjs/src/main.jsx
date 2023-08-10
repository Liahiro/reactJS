import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Pages/Home/index.jsx'
import Criador from './components/Pages/criador/index.jsx'
import Historia from './components/Pages/historia/index.jsx'
import Mecanica from './components/Pages/mecanica/index.jsx'
import Personagens from './components/Pages/personagens/index.jsx'
import Menu from './components/Menu/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>

        <Menu/>
        <App />
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/historia" element = {<Historia />} />
        <Route exact path="/personagens" element = {<Personagens />} />
        <Route exact path="/mecanica" element = {<Mecanica />} />
        <Route exact path="/criador" element = {<Criador />} />
      </Routes>
      
    </Router>

  </React.StrictMode>,
)
