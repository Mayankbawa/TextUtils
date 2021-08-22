import './App.css'
import React, { useState } from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0b1e27'
      showAlert('Dark Mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light Mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={Mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className='container'>
          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>

            <Route exact path='/'>
              <TextForm
                heading='Enter Your Text'
                mode={Mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
