import React, { useState, useContext } from "react"
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Result from "./components/Result"
import ThemeToggle from "./components/ToggleThemes/ThemeToggle"
import { ThemeContext } from "./contexts/theme"

function App() {
  const [{ isDark }] = useContext(ThemeContext)

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <Router>
        <div className={isDark ? "links dark" : "links light"}>
          <Link to="/">Home</Link>
          <Link to="/result">Result</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
      <ThemeToggle />
    </div>
  )
}

export default App
