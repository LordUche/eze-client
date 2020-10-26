import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <footer className="footer">
        <div className="container">Copyright &copy; Lord Uche 2020</div>
      </footer>
    </Router>
  )
}

export default App
