import React from 'react'
import HomePage from './pages/HomePage'
import MemberPage from './pages/MemberPage'
import EditMemberPage from './pages/EditMemberPage'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/member" element={<MemberPage />} />
        <Route exact path="/member/edit" element={<EditMemberPage />} />
      </Routes>
    </Router>
  )
}

export default App
