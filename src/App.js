import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Issues from './Issues'
import IssuesDetails from './IssuesDetails'

function App() {

  const[issues, setIssues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => res.json())
    .then(resData => {
      setIssues(resData)
    })
  }, [])

  return (
    <Router>
      <div>
        <h1>Home Page</h1>
        <Route path="/issues" render={() => <Issues issues={issues} /> } />
        <Route path='issues/:id' render={(props) => <IssuesDetails {...props} issues={issues} /> } />
      </div>
    </Router>
  )
}

export default App