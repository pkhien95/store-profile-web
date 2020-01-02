import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Root from './routes'

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <div className={'app-content'}>
          <Root />
        </div>
      </div>
    </Router>
  )
}

export default App
