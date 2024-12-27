import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './Global.scss'
import Home from './pages/Home/Home.tsx'
import TableauDeBord from './pages/TableauDeBord/TableauDeBord.tsx'
import Error from './pages/Error/Error.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tableau-de-bord/:userId" element={<TableauDeBord />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" replace={true} />} />
      </Routes>
    </Router>
  </StrictMode>
)
