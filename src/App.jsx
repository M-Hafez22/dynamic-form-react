import React, { useState } from "react"
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Result from './components/Result'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/result">Result</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
