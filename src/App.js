import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Issues from './issues'

function App() {

  const[issue, setIssues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => res.json())
    .then(resData => {
      setIssues(resData)
    })
  }, [])

  return (
    <div>
      <Issues issues={issues} />
    </div>
  )
}

export default App