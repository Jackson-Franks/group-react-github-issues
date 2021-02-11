import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './Home'
import Issues from './Issues'
import Widget from './Widget'


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
        <Route exact path='/' component={Home} />
        <Route path="/issues" render={() => <Issues issues={issues} /> } />
        <Route path='/Widget/:id' render={(props) => <Widget {...props} issues={issues} /> } />
      </div>
    </Router>
  )
}

export default App