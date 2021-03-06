import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Components / Containers
import HomePage from './containers/HomePage/HomePage'
import Header from './components/Custom/Header/Header'

//MUI
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    height: 'auto'
  }
}))

const App = props => {
  const classes = useStyles(props)
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
