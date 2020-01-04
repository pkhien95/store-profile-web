import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './routes'
import ToastContainer from './shared/components/Toast/ToastContainer'

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <div className={'app-content'}>
          <Root />
        </div>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
