import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Global.scss'
import Home from './pages/Home/Home.tsx'
import TableauDeBord from './pages/TableauDeBord/TableauDeBord.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tableau-de-bord/:userId" element={<TableauDeBord />} />
      </Routes>
    </Router>
  </StrictMode>
)
